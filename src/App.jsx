import { useState, useEffect } from 'react';

import Todo from './components/Todo';
import TodoForm from './components/TodoFORM';
import Search from './components/Search';
import Filter from './components/Filter';

import "./App.css";

function App() {
  const [todos, setTodos] = useState(() => {
    // Try to get todos from localStorage
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [
        {
          id: 1,
          text: "Criar funcionalidade X no sistema",
          category: "Trabalho",
          isCompleted: false,
        },
        {
          id: 2,
          text: "Ir para a academia",
          category: "Pessoal",
          isCompleted: false,
        },
        {
          id: 3,
          text: "Estudar React",
          category: "Estudos",
          isCompleted: false,
        }
      ];
    }
  });

      const [search, setSearch] = useState("");
      const [filter, setFilter] = useState("All");
      const [sort, setSort] = useState("Asc");
      
      // Effect to save todos to localStorage whenever they change
      useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
      }, [todos]);

    const addTodo = (text, category, date, time)=> {
      const newTodos= [...todos,{
        id:Math.floor(Math.random()*10000),
        text,
        category,
        date,
        time,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };


  const deleteTodo = (id)=> {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter((todo)=>
    todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
  };

  const completeTodo = (id)=> {
    const newTodos = [...todos];
    newTodos.map((todo)=>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSorte = {setSort} />
      <div className="todo-list">
        {todos
        .filter((todo)=> 
        filter ==="All"
        ? true 
        : filter ==="Completed"
        ? todo.isCompleted 
        : !todo.isCompleted
        )
        .filter((todo)=>
        todo.text.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b)=> 
        sort ==="Asc" 
        ? a.text.localeCompare(b.text) 
        : b.text.localeCompare(a.text)
        )
        .map((todo) =>(
          <Todo 
          key={todo.id} 
          todo={todo} 
          deleteTodo= {deleteTodo}
          completeTodo = {completeTodo}
        />
        ))}
      </div>
      <TodoForm addTodo = {addTodo}/>
    </div>
  )
}

export default App;
