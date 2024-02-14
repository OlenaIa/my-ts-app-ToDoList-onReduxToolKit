import { ToDoItemType, FuncType } from "../App/App.types";
import { ToDoItem } from "../ToDoItem";
import { FC } from 'react';
import './ToDoList.css'

interface IToDoListProps {
    toDoList: ToDoItemType[];
    delToDo: FuncType;
};

export const ToDoList: FC<IToDoListProps> = ({ toDoList, delToDo }) => {
    return (
        <ul className="list">
            {toDoList?.map((item) => <ToDoItem item={item} key={item.id} delToDo={delToDo} />)}
        </ul>
    )
};