import React, { useContext } from 'react';
import { TaskContext } from './TaskContext';

const TaskList = () => {

    const { tasks, addTask, removeTask, filterTask } = useContext(TaskContext);

    const handleAddTask = (event) => {
        event.preventDefault();
        const name = event.target.elements.name.value;
        if(name.trim()){
            addTask({ id: Date.now(), name });
            event.target.elements.name.value = "";
        }
    };

    const handleRemoveTask = (task) => {
        removeTask(task);
    };

    const handleFilterTask = (event) => {
        const query = event.target.value;
        filterTask(query);
    };


    return (
        <div>
            <form onSubmit={handleAddTask}>
                <input
                    type='text'
                    name='name'
                    placeholder='Ingresa una descripción'
                />
                <button type='submit'>
                    Agregar Tarea
                </button>
            </form>
            <input
                type='text'
                onChange={handleFilterTask}
                placeholder='filtrar por...'
            />
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.name}
                        <button
                            onClick={() => handleRemoveTask(task)}
                        >
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;
