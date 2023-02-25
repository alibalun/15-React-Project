import './NoteContainer.style.css';
import NoteItem from "./NoteItem/NoteItem.index";
import AddingArea from './AddingArea/AddingArea.index';
import { useState, useEffect, createContext, useRef } from 'react';

let NoteContext = createContext();

function NoteContainer(props) {

    let [newItem, setNewItem] = useState({});
    let [noteData, setNoteData] = useState([]);
    let [refresh, setRefresh] = useState(true);
    let trashRef = useRef();

    let addItem = () => {
        fetch('http://localhost:5000/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem),
        })
        setNewItem("");
    }
    let getData = () => {
        fetch('http://localhost:5000/notes')
            .then((response) => response.json())
            .then((data) => {
                setNoteData(data);
            })
    }
    useEffect(() => {
        if (!refresh) {
            addItem();
        }

        getData();
        setRefresh(false);
    }, [newItem]);

    return (
        <>
            <NoteContext.Provider value={{ newItem, setNewItem, trashRef, getData, noteData }}>
                <div className="note-container">
                    {
                        noteData.map((item) => {
                            return <NoteItem key={item.id} content={item.content} day={item.day} month={item.month} year={item.year} keyItem={item.id} />
                        })
                    }
                    <AddingArea />
                </div>
            </NoteContext.Provider>
        </>
    );
}
export default NoteContainer;
export { NoteContext };