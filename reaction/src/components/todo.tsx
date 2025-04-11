import React, { useEffect, useState } from "react";
type Todo = {
  userId: number;
  completed: boolean;
  content: string;
  todoId: number;
};
type User = {
  userId: number;
  firstName: string;
  lastName: string;
};
export const TodoList = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [userList, setUserList] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [activeClass, setActiveClass] = useState<boolean>(false);
  const [toDoListForSelectedUser, setToDoListForSelectedUser] = useState<
    Todo[]
  >([]);
  useEffect(() => {
    (async () => {
      const data = await fetch("https://json-mock.org/api/todos");
      const res = await data.json();
      console.log(res);
      setTodoList(res);
      const userData = await fetch("https://json-mock.org/api/users");
      const userRes: User[] = await userData.json();
      const filteredUsers = userRes.slice(0, 10);
      console.log(filteredUsers);
      setUserList(filteredUsers);
    })();
  }, []);
  const handleButtonClick = (user: User) => {
    setSelectedUser(user);
    const filteredToDo = todoList.filter((todoListItem) => {
      return todoListItem.userId === user.userId;
    });
    console.log(filteredToDo);
    setActiveClass(true);
    setToDoListForSelectedUser(filteredToDo);
  };
  return (
    <main>
      <ul className="user-tabs-list">
        {userList.map((user) => {
          return (
            <li key={user.userId} className={activeClass ? "active" : ""}>
              <button onClick={() => handleButtonClick(user)}>
                {user.firstName} {user.lastName}
              </button>
            </li>
          );
        })}
      </ul>
      {selectedUser && (
        <>
          <h3>TODO for the selcted user</h3>
          <ul style={{ listStyle: "none" }}>
            {toDoListForSelectedUser.map((todo) => {
              return (
                <li key={todo.todoId}>
                  <label>
                    <input type="checkbox" checked={todo.completed} />
                    {todo.content}
                  </label>
                </li>
              );
            })}
            <input type="checkbox" />
            <label htmlFor=""></label>
          </ul>
        </>
      )}
    </main>
  );
};
