import { addTodoAtom, newTodoItemText } from "@/store";
import { Button, Input } from "antd";
import { useAtom } from "jotai";

const AddTodo = () => {
  const [newTodo, setNewTodo] = useAtom(newTodoItemText);
  const [, addTodoNew] = useAtom(addTodoAtom);
  return (
    <div className="mx-auto max-w-7xl px-2 mt-8">
      <div>
        <Input
          size="large"
          type="text"
          className="rounded-md w-2/6 mr-3 h-8 bg-transparent"
          placeholder="New Todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <Button type="primary" onClick={() => addTodoNew()}>
          Add Todo
        </Button>
      </div>
    </div>
  );
};

export default AddTodo;
