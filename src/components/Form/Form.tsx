import { useState } from "react";
import { FC, FormEvent,ChangeEvent } from 'react';
import { FuncType } from "../App/App.types";
import './Form.css'

interface IFormProps {
    addToDo: FuncType;
};

export const Form: FC<IFormProps> = ({ addToDo }) => {
    const [newToDoItem, setNewToDoItem] = useState<string>('');

    function onSubmit(e: FormEvent) {
        e.preventDefault();
        addToDo(newToDoItem);
        setNewToDoItem('');
    };

    return (
        <form className="form" onSubmit={onSubmit}>
            <input className="input" type="text" placeholder="Add task" value={newToDoItem} onChange={(e: ChangeEvent<HTMLInputElement>) => setNewToDoItem(e.target.value)} />
            <button className="button-submit" type="submit">Submit</button>
        </form>
    )
};