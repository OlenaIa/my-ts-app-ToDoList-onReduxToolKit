import { ToDoList } from "../ToDoList";
import { Form } from "../Form";
import './App.css';

export function App() {
    return (
        <>
            <header className="header">
                <h1 className="title">Todo List on Redux ToolKit</h1>
            </header>
            <main className="main">
                <Form />
                <ToDoList />
            </main>
        </>
    );
};