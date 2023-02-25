import './AddingArea.style.css';
import { useEffect, useContext, useRef, useState } from 'react';
import { NoteContext } from '../NoteContainer.index';

function AddingArea(props) {
    let noteData = useContext(NoteContext);
    let textAreaRef = useRef();
    let setItem = () => {
        let obj = { content: textAreaRef.current.value, day: '2', month: '12', year: '2023' };
        if (textAreaRef.current.value != '')
            noteData.setNewItem(() => obj);
        textAreaRef.current.value = "";
    }
    return (
        <>
            <div className="addingarea-container">
                <div className="addingarea-content-container">
                    <textarea className="aa-input-container" placeholder="Type to add a note..." ref={textAreaRef}></textarea>
                </div>
                <div className="addingarea-bottom-side">
                    <div className="aa-remaining">{noteData.noteData.length} Created</div>
                    <button className="aa-save-btn" onClick={setItem}>Save</button>
                </div>
            </div>
        </>
    );
}
export default AddingArea;