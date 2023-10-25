"use client"
import { Link } from "@nextui-org/link";
import TodoListComponent from '@/components/todo-list-component/TodoListComponent'
import AddNewTask from "@/components/add-new-task/AddNewTask";
import { useEffect, useState } from "react";

const INITIAL_TODOS: any = [];
export default function TodoList() {
  const [todos, setTodos] = useState<any>(INITIAL_TODOS);
  useEffect(() => {
    const getAllTodoes: any = async () => {
      const res = await fetch(`http://localhost:3001/todos`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });
      const newTodos = await res.json();
      setTodos(newTodos)
    }
    getAllTodoes().catch(console.error);
  }, []);
  return (
    <main className="flex flex-col">
      <AddNewTask />
      <TodoListComponent todoes={todos}/>
      <Link href="/" color="primary">
        To main
      </Link>
    </main>
  );
}
