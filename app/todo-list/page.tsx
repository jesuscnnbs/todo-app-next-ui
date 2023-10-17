"use client"
import { Link } from "@nextui-org/link";
import TodoListComponent from '@/components/todo-list-component/TodoListComponent'

const getAllTodoes = async () => {
  const res = await fetch(`http://localhost:3001/todos`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  });
  const todos = await res.json();
  return todos;
}

export default async function TodoList() {
  const todos = await getAllTodoes();
  console.log(todos);
  return (
    <main className="flex flex-col">
      <TodoListComponent todoes={todos}/>
      <Link href="/" color="primary">
        To main
      </Link>
    </main>
  );
}
