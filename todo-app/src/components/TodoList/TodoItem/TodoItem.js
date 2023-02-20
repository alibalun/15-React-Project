import Button from './ButtonContainer/Button/Button';
import ButtonContainer from './ButtonContainer/ButtonContainer';
import './TodoItem.css';
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from 'react-icons/fa';
import { useContext, useEffect, useState } from 'react';
function TodoItem(props) {
    let [clicked, setClicked] = useState(false);
    let [editValue, setEditValue] = useState("");
    let controlCheckbox = (e) => {
        if (e.target.checked) {
            setClicked(true);
        }
        else {
            setClicked(false);
        }
    }
    let changeTask = (e) => {
        setEditValue(e.target.value);
    }
    return (
        <>
            <div className="todoitem-container" id={props.id}>
                <input type="checkbox" className="todoitem-check" checked={props.obj.isChecked} onChange={controlCheckbox} />
                <label className="todoitem-label" style={{ display: props.obj.editing ? 'none' : 'inline-block', textDecoration: clicked ? 'line-through' : 'none' }}>{editValue!="" ? editValue : props.obj.task}</label>
                <input type="text" defaultValue={props.obj.task} style={{ display: 'none' }} onChange={changeTask} />
                <ButtonContainer>
                    <Button content="Edit" icon={<FaPencilAlt size="10px" />} removeButton={false} />
                    <Button content="Remove" icon={<FaTrashAlt size="10px" />} removeButton={true} />
                </ButtonContainer>
            </div>
        </>
    );
}
export default TodoItem;