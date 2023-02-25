import './NoteItem.style.css';
import { BsFillTrashFill } from 'react-icons/bs';
import { useRef, useContext, useEffect } from 'react';
import { NoteContext } from '../NoteContainer.index';

function NoteItem(props) {
    let noteData = useContext(NoteContext);
    let deleteAnItem = () => {

        fetch('http://localhost:5000/notes/' + props.keyItem, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        noteData.getData();
    }
    useEffect(() => {
        noteData.getData();
    }, []);
    return (
        <>
            <div className="noteitem-container" style={{color:'black'}}>
                <div className="noteitem-content-container"><span>{props.content}</span></div>
                <div className="noteitem-bottom-side">
                    <div className="nibs-date">{props.day}/{props.month}/{props.year}</div>
                    <div className="nibs-icon" ref={noteData.trashRef} onClick={deleteAnItem}><BsFillTrashFill /></div>
                </div>
            </div>
        </>
    );
}
export default NoteItem;