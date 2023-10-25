import { useState } from 'react'
import { useDisclosure } from '@nextui-org/react'
import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import { 
  Modal, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalFooter
} from '@nextui-org/modal'

export default function EditTask () {
  // const router = useRouter();
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [newTodo, setNewTodo] = useState("");
  const addTask: any = async (todo: any) => {
    await fetch(`http://localhost:3001/todos/${todo.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newTodo,
        completed: false
      })
    });
  }
  const handleAddTask = (task: any) => {
    setNewTodo("")
    addTask(task).catch(console.error)
    //router.reload();
  }

  return (
    <>
      <Button onPress={onOpen} color="primary">Open Modal</Button>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Todo"
                  placeholder="New todo"
                  variant="bordered"
                  value={newTodo}
                  onValueChange={setNewTodo}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={() => handleAddTask(newTodo)}>
                  Add
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}