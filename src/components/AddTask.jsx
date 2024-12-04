import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {v4 as uuid4} from 'uuid'
import { addTask } from '../features/taskSlice';

const AddTask = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('To Do')
    const dispatch = useDispatch()

    const handleSubmit=(e)=>{
        e.preventDefault()
        const newTask={
            id: uuid4(),
            title,
            description,
            status
        }
        dispatch(addTask(newTask))
        setTitle('')
        setDescription('')
        setStatus('To Do')
    }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-gray-700 text-center">Add New Task</h2>
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
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
