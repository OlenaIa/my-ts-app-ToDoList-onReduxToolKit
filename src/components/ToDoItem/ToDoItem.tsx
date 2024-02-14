import { FC } from 'react';
import { ToDoItemType, FuncType } from '../App/App.types'
import './ToDoItem.css';

interface IToDoItemProps {
    item: ToDoItemType;
    delToDo: FuncType;
};

export const ToDoItem: FC<IToDoItemProps> = ({ item, delToDo }) => {
    return (
        <li className='item'>
            <p className='task'>{item.toDoText}</p>
            <button className='button-delete' onClick={() => delToDo(item.id)}>Delate</button>
        </li>
    )
};