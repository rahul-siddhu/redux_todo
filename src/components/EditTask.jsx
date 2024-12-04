import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { editTask } from '../features/taskSlice'


const EditTask = ({task}) => {
    const [isEdit, setIsEditing] = useState(false)
    const [title, setTitle] = useState(task.title)
    const [description, setDescription] = useState(task.description)
    const [status, setStatus] = useState(task.status)
    const dispatch = useDispatch()

    const handleEdit=()=>{
        dispatch(editTask({id: task.id, title, description, status}))
        setIsEditing(false)
    }

  return (
    <div>
        {isEdit?(
            <div className='absolute bg-white p-4 border rounded-md shadow-lg z-10'>
                <h2 className="text-2xl font-semibold text-gray-700 text-center">EditTask</h2>
                <div>
                    <label htmlFor="taskName" className="block text-sm font-medium text-gray-600">
                    Task Name
                    </label>
                    <input
                    id="taskName"
                    type="text"
                    placeholder="Enter Task Name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>
                <div>
                    <label htmlFor="taskDescription" className="block text-sm font-medium text-gray-600">
                    Task Description
                    </label>
                    <textarea
                    id="taskDescription"
                    placeholder="Enter Task Description"
                    rows="3"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="taskStatus" className="block text-sm font-medium text-gray-600">
                    Task Status
                    </label>
                    <select
                    id="taskStatus"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                    </select>
                </div>
                <div className="flex justify-between gap-4 mt-4 mb-4">
                <button
                    type="submit"
                    className="bg-blue-500 text-white font-semibold py-1 px-3 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    onClick={handleEdit}
                >
                    Save
                </button>
                <button
                    className="bg-gray-500 text-white font-semibold py-1 px-3 rounded-md hover:bg-gray-600 focus:ring-2 focus:ring-gray-400 focus:outline-none"
                    onClick={()=>setIsEditing(false)}
                >
                    Cancel
                </button>
                </div>



            </div>
        ):(
            <>
            <button
            className='px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600'
            onClick={()=>setIsEditing(true)}>Edit</button>
            </>
        )}
    </div>
  )
}

export default EditTask