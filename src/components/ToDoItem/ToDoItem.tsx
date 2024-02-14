import { FC } from 'react';
import { ToDoItemType, FuncType, delTodo } from '../../redux/toDoSlice';
import {useDispatch} from 'react-redux'
import './ToDoItem.css';

interface IToDoItemProps {
    item: ToDoItemType;
};

export const ToDoItem: FC<IToDoItemProps> = ({ item }) => {
    const dispatch = useDispatch();

    const onClick: FuncType = (id) => {
        dispatch(delTodo(id))
    };

    return (
        <li className='item' key={item.id}>
            <p className='task'>{item.toDoText}</p>
            <button key={item.id} className='button-delete' onClick={() => onClick(item.id)} >Delate</button>
        </li>
    )
};