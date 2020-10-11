import { createContext } from "react";
import { ITodo } from "../../interfaces";

type TodoContextType = {
    addTodo: (tetx: string) => void;
    removeTodo: (id: number) => void;
    todos: ITodo[];
}

export const TodoContext = createContext<Partial<TodoContextType>>({})