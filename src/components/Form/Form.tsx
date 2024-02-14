import { useState } from "react";
import { FC, FormEvent,ChangeEvent } from 'react';
// import { FuncType } from "../../redux/toDoSlice";
import {useDispatch} from 'react-redux'
import {addTodo} from '../../redux/toDoSlice'
import './Form.css'

export const Form: FC = () => {
    const [newToDoItem, setNewToDoItem] = useState<string>('');
    const dispatch = useDispatch();

    function onSubmit(e: FormEvent) {
        e.preventDefault();
        dispatch(addTodo(newToDoItem));
        setNewToDoItem('');
    };

    return (
        <form className="form" onSubmit={onSubmit}>
            <input className="input" type="text" placeholder="Add task" value={newToDoItem} onChange={(e: ChangeEvent<HTMLInputElement>) => setNewToDoItem(e.target.value)} />
            <button className="button-submit" type="submit">Submit</button>
        </form>
    )
};