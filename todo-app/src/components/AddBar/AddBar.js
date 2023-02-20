import { useState } from 'react';
import './AddBar.css';
import { UserContext } from '../../App';
import { useContext } from 'react';

function AddBar() {
    let data = useContext(UserContext);
    let addItem = (e) => {
        if (data.task != "") {
            data.setTodoItem({
                id: data.id,
                task: data.task,
                editing: data.editing
            });
            data.setArr((oldArr) => [...oldArr, data]);
            console.log(data.arr);
            data.setId(++data.id);
            data.setTask("");
        }
        e.target.parentElement.children[1].value = "";
    }
    return (
        <>
            <div className="addbar-container">
                <h1 className="addbar-header">Task Manager</h1>
                <input type="text" placeholder="Add task" className="addbar-input" onChange={(e) => data.setTask(e.target.value)} />
                <button className="addbar-button" onClick={addItem}>Add</button>
            </div>
        </>
    );
}
export default AddBar;