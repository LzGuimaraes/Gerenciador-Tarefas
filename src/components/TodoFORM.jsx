import {useState} from 'react'

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");
    const [category,setCategory] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleSubmit = (e)=> {
        e.preventDefault();
        if(!value || !category) return;
        addTodo(value, category, date, time);
        setValue("");
        setCategory("");
        setDate("");
        setTime("");
    };

  return(
   <div className= "todo-form"> 
    <h2>Criar Tarefa: </h2>
    <form onSubmit={handleSubmit}>
        <div>
            <input type="text" 
            placeholder="Digite o título" 
            value={value}
            onChange={(e)=> setValue(e.target.value)}/>
            <select value ={category} onChange={(e)=> setCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudo">Estudo</option>
            </select>
            <label>Data:</label>
            <input 
                type="date" 
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <label>Hora:</label>
            <input 
                type="time" 
                value={time}
                onChange={(e) => setTime(e.target.value)}
            />      
           <hr></hr>
            <button type="submit"> Criar tarefa</button>
        </div>
    </form>
    </div> 
    )
}

export default TodoForm;