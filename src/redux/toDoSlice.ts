import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export interface ToDoItemType {
  id: string;
  toDoText: string;
};

export type FuncType = (prop: string) => void;

const initialState: ToDoItemType[] = [];

const todoSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.push({ id: nanoid(3), toDoText: action.payload });
        },
        delTodo: (state, action: PayloadAction<string>) => {
            return state.filter(item => item.id !== action.payload);
        }
    }
});

export const { addTodo, delTodo } = todoSlice.actions;
export default todoSlice.reducer;