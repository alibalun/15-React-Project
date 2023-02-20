import './App.css';
import AddBar from './components/AddBar/AddBar';
import TodoList from './components/TodoList/TodoList';
import TodoItem from './components/TodoList/TodoItem/TodoItem';
import ButtonContainer from './components/TodoList/TodoItem/ButtonContainer/ButtonContainer';
import { useState, createContext } from 'react';

let UserContext = createContext();
let ListProvider = createContext();

function App() {
  let [id, setId] = useState(0);
  let [task, setTask] = useState("");
  let [todoItem, setTodoItem] = useState({
    id: id,
    task: task,
  });
  let [arr, setArr] = useState([]);
  return (
    <div className="App">
      <UserContext.Provider value={{ id, setId, task, setTask, todoItem, setTodoItem, arr, setArr }}>
        <AddBar />
        <TodoList>
          {
            arr.map((item) => {
              return (
                <TodoItem obj={item} id={item.id} key={item.id} />
              );
            })
          }
        </TodoList>
      </UserContext.Provider>
    </div>
  );
}

export default App;
export { UserContext, ListProvider };