import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell
  } from "@nextui-org/table";
import {Tooltip} from "@nextui-org/tooltip"

type Props = {
    todoes: Todo[];
}

type Todo = {
    id: number;
    title: string;
    completed: boolean;
}

const columns = [
  {name: 'Status', uid: 'status'},
  {name: 'Task', uid: 'task'},
  {name: 'Actions', uid: 'actions'}
]


export default function TodoListComponent({todoes}: Props) {
  const deleteTask = async(id: number) => {
    await fetch(`http://localhost:3001/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    });
  }
  const renderCellContent = (user: Todo, columnKey: React.Key) => {
    switch (columnKey) {
      case "status":
        return (
          <div><p>{user.completed ? "Completada" : "Pendiente"}</p></div>
        )
      case "task":
        return (
          <div><p>{user.title}</p></div>
        )
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Edit user">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  Edit
                </span>
              </Tooltip>
              <Tooltip color="danger" content="Delete user">
                <span onClick={() => deleteTask(user.id)} className="text-lg text-danger cursor-pointer active:opacity-50">
                  Del
                </span>
              </Tooltip>
          </div>
        )
    }
  }  
  return (
      <Table aria-label="Todo list">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.uid} align={column.uid === 'actions' ? 'center' : 'start'} >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={todoes}>
          {(item) => (
            <TableRow key={item.id} >
              {(columnKey) => <TableCell>{renderCellContent(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
  );
}