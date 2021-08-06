/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, ChangeEvent, SyntheticEvent } from 'react';

export default function Card() {
  interface ITask {
    name: string;
    deadline: number;
  }

  const [task, setTask] = useState({
    name: '',
    deadline: '',
  });
  const [toDoList, setToDoList] = useState<ITask[]>([]);

  const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask({
      ...task,
      [event.target.name]: event.target.value,
    });
  };

  const addToList = (event: SyntheticEvent): void => {
    event.preventDefault();
    setToDoList([
      ...toDoList,
      {
        name: task.name,
        deadline: Number(task.deadline),
      },
    ]);
    setTask({
      name: '',
      deadline: '',
    });
  };

  return (
    <>
      {console.log(toDoList)}
      <form onSubmit={addToList}>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          name="name"
          value={task.name}
          onChange={handleInput}
        />
        <label htmlFor="deadline">Idade:</label>
        <input
          type="number"
          name="deadline"
          value={task.deadline}
          onChange={handleInput}
        />
        <button type="submit">Salvar</button>
      </form>
      <ul>
        {toDoList.map(item => (
          <li key={item.name}>
            <p>
              Nome: {item.name}, Idade: {item.deadline}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
