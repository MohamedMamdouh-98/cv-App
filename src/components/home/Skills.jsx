import React, { useState } from 'react'

const Skills = () => {
    const [todo, setTodo] = useState("");
    console.log('todo',todo)
    const [todos, setTodos] = useState([]);
    console.log(todos,'todos')
    const [editId, setEditId] = useState(0);

    const handleOnSubmit = (event) => {
      event.preventDefault();
  
      if (editId) {
        const editTodo = todos.find((i) => i.id === editId);
  
        const updateTodos = todos.map((t) =>
          t.id === editTodo.id
            ? (t = { id: t.id, todo })
            : { id: t.id, todo: t.todo }
        );
        setTodos(updateTodos);
        setEditId(0);
        setTodo("");
        return;
      }
 
      if (todo !== "") {
        setTodos([...todos, { id: `${todo}-${Date.now()}`, todo }]);
        localStorage.setItem("todos", JSON.stringify([...todos, { id: `${todo}-${Date.now()}`, todo }]));
      }
      setTodo("");
    };
    const handleDelete = (id) => {
      const delTodo = todos.filter((to) => to.id !== id);
      setTodos([...delTodo]);
    };
  
    const handleEdit = (id) => {
      const todoEdit = todos.find((i) => i.id === id);
      setTodo(todoEdit.todo);
      setEditId(id);
    };
  
    return (
      <div>
        <div className="container pt-3 text-center">
  
          <h1>Add Skills</h1>
          <form onSubmit={handleOnSubmit}>
            <input
              type="text"
              onChange={(e) => {
                setTodo(e.target.value);
              }}
              value={todo}
            />
            <button type="submit">{editId ? "Edit" : "Add"}</button>
          </form>
          <ul>
            {todos.map((t) => (
              <li key={t.id}>
                <span>{t.todo}</span>
                <button onClick={() => handleEdit(t.id)}>Edit</button>
                <button onClick={() => handleDelete(t.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
}

export default Skills