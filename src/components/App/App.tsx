import { useState } from "react";
import { ToDoList } from "../ToDoList";
import { Form } from "../Form";
import { nanoid } from "nanoid";
import { ToDoItemType, FuncType } from "./App.types";
import './App.css';

export function App() {
    const [toDoList, setToDoList] = useState<ToDoItemType[]>([]);

    const addToDo: FuncType = (newTextTodo) => {
        const newToDo: ToDoItemType = { id: nanoid(3), toDoText: newTextTodo };
        console.log('newToDo', newToDo);
        setToDoList([...toDoList, newToDo])
    };

    const delToDo: FuncType = (idToDo) => {
        const refreshToDoList = toDoList.filter(item => item.id !== idToDo);
        setToDoList(refreshToDoList);
    };

    return (
        <>
            <header className="header">
                <h1 className="title">Todo List</h1>
            </header>
            <main className="main">
                <Form addToDo={addToDo} />
                <ToDoList toDoList={toDoList} delToDo={delToDo} />
            </main>
        </>
    );
};