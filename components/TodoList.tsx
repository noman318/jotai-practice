import {
  deleteTodoAtom,
  todosAtom,
  toggleTodoAtom,
  updateTodoAtom,
} from "@/store";
import { Button, Checkbox, Input } from "antd";
import { useAtom } from "jotai";

function TodoListItems() {
  const [todos] = useAtom(todosAtom);
  const [, updateTodo] = useAtom(updateTodoAtom);
  const [, toggleTodo] = useAtom(toggleTodoAtom);
  const [, deleteTodo] = useAtom(deleteTodoAtom);
  const onChange = (id: number) => {
    toggleTodo(id);
  };
  return (
    <>
      {todos?.length > 0 && (
        <div className="mt-4 border border-gray-200 p-2 rounded-lg">
          {todos.map((todo) => (
            <div key={todo.id} className=" flex mt-2 gap-2">
              <Checkbox onChange={() => onChange(todo.id)} />
              <Input
                value={todo.text}
                onChange={(e) =>
                  updateTodo({ id: todo.id, text: e.target.value })
                }
              />
              <Button
                color="danger"
                variant="outlined"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </Button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

const TodoList = () => {
  return (
    <div className="w-2/3">
      <TodoListItems />
    </div>
  );
};

export default TodoList;
