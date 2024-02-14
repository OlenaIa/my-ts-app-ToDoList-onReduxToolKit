import { ToDoList } from "../ToDoList";
import { Form } from "../Form";
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {addTodo, delTodo} from '../../redux/toDoSlice'
import { RootState } from '../../redux/store';

export function App() {
    const toDoList = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch();

    return (
        <>
            <header className="header">
                <h1 className="title">Todo List on Redux ToolKit</h1>
            </header>
            <main className="main">
                <Form addToDo={(text) => dispatch(addTodo(text))} />
                <ToDoList toDoList={toDoList} delToDo={(id) => dispatch(delTodo(id))} />
            </main>
        </>
    );
};