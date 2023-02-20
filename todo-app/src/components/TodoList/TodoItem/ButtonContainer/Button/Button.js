import './Button.css';
import { useContext, useEffect,useState } from 'react';
import { UserContext } from '../../../../../App';

function Button(props) {
    let data = useContext(UserContext);
    let [saveActive, setSaveActive] = useState(false);
    let removeAnItem = (e) => {
        e.target.parentElement.parentElement.remove();
    }
    let editAnItem = (e) => {
        if (saveActive) {
            setSaveActive(false);
            e.target.parentElement.parentElement.children[1].style.display = "inline-block";
            e.target.parentElement.parentElement.children[2].style.display = "none";
        }
        else {
            setSaveActive(true);
            e.target.parentElement.parentElement.children[1].style.display = "none";
            e.target.parentElement.parentElement.children[2].style.display = "inline-block";
        }
        console.log(saveActive);
    }
    useEffect(() => {
    }, [saveActive]);
    return (
        <>
            <button className="button" onClick={props.removeButton ? removeAnItem : editAnItem}>{props.content} <span>{props.icon}</span></button>
        </>
    );
}
export default Button;