// import { ToDoItemType, FuncType } from "../../redux/toDoSlice";
import { ToDoItem } from "../ToDoItem";
import { FC } from 'react';
import './ToDoList.css'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export const ToDoList: FC = () => {
    const toDoList = useSelector((state: RootState) => state.todos);

    return (
        <ul className="list">
            {toDoList?.map((item) => <ToDoItem item={item} key={item.id}/>)}
        </ul>
    )
};