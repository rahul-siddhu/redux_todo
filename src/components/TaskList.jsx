// import React, { useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { deleteTask, fetchTodo } from '../features/taskSlice'
// import EditTask from './EditTask'

// const TaskList = () => {
//     const tasks=useSelector((state) => state.tasks.tasks)
//     const loading=useSelector((state) => state.tasks.loading)
//     const error=useSelector((state) => state.tasks.error)
//     const dispatch=useDispatch()

//     useEffect(() => {
//         dispatch(fetchTodo())
//     }, [dispatch])

//     const handleDelete =(id) => {
//         dispatch(deleteTask(id))
//     }

//     if(loading){
//         return <p>Tasks loading ....</p>
//     }
//     if(error){
//         return <p>There is an error {error}</p>
//     }

//   return (
//     // <p>Hi</p>
//     <div>
//         <div>
//             <h2>Tasks</h2>
//             <ul className='space-y-4'>
//                 {tasks.map(task =>(
//                     <li key={task.id} className='bg-gray-50 p-4 rounded-md shadow-sm flex justify-between items-center'>
//                         <div>
//                             <h3 className='text-lg font-medium text-gray-800'>{task.title}</h3>
//                             {task.description && <p className='text-gray-600'>{task.description}</p>}
//                             <p className='mt-1 text-sm font-semibold'>
//                                 Status: <span className='italic underline'>{task.status}</span> 
//                             </p>
//                         </div>
//                         <div className='flex space-x-2'>
//                             <EditTask task={task}/>
//                             <button className='px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600'
//                             onClick={() => handleDelete(task.id)}>Delete</button>
//                         </div>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     </div>
//   )
// }

// export default TaskList
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, fetchTodo, setStatusFilter } from '../features/taskSlice';
import EditTask from './EditTask';

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks.tasks);
    const loading = useSelector((state) => state.tasks.loading);
    const error = useSelector((state) => state.tasks.error);
    const statusFilter = useSelector((state) => state.tasks.status);
    const dispatch = useDispatch();

    const [filteredTasks, setFilteredTasks] = useState([]);

    useEffect(() => {
        dispatch(fetchTodo());
    }, [dispatch]);

    useEffect(() => {
        if (statusFilter === 'All') {
            setFilteredTasks(tasks);
        } else {
            setFilteredTasks(tasks.filter((task) => task.status === statusFilter));
        }
    }, [tasks, statusFilter]);

    const handleDelete = (id) => {
        dispatch(deleteTask(id));
    };

    const handleStatusChange = (e) => {
        dispatch(setStatusFilter(e.target.value));
    };

    if (loading) {
        return <p>Tasks loading ....</p>;
    }
    if (error) {
        return <p>There is an error {error}</p>;
    }

    return (
        <div>
            <div>
            <h2 className="text-2xl font-bold text-gray-700 mb-4 border-b-2 border-indigo-500 pb-2">
  Tasks
</h2>

                <div className="mb-4">
                    <label htmlFor="statusFilter" className="mr-2">Filter by Status:</label>
                    <select
                        id="statusFilter"
                        value={statusFilter}
                        onChange={handleStatusChange}
                        className="px-2 py-1 border rounded-md"
                    >
                        <option value="All">All</option>
                        <option value="Completed">Completed</option>
                        <option value="To Do">To Do</option>
                        <option value="In Progress">In Progress</option>
                    </select>
                </div>
                <ul className="space-y-4">
                    {filteredTasks.map((task) => (
                        <li key={task.id} className="bg-gray-50 p-4 rounded-md shadow-sm flex justify-between items-center">
                            <div>
                                <h3 className="text-lg font-medium text-gray-800">{task.title}</h3>
                                {task.description && <p className="text-gray-600">{task.description}</p>}
                                <p className="mt-1 text-sm font-semibold">
                                    Status: <span className="italic underline">{task.status}</span>
                                </p>
                            </div>
                            <div className="flex space-x-2">
                                <EditTask task={task} />
                                <button
                                    className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                                    onClick={() => handleDelete(task.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TaskList;
