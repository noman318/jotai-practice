"use client";
import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import { Typography } from "antd";

const { Title } = Typography;

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <Title className=" text-2xl font-bold">Todo List</Title>
      <AddTodo />
      <TodoList />
    </div>
  );
}
