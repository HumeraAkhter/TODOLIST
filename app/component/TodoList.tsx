'use client'

import { useState} from "react"

 interface Todo{
    id:number;
    text:string;
    completed:boolean;
 }

 const TodoList =()=>
 {
    const [todos,setTodos] =useState<Todo[]>([]);
    const[inputvalue,setinputvalue]=useState("");
    //add of item
    const addTodo =()=>{
        if(inputvalue.trim() ==="")return;
        setTodos([
            ...todos,
            {id:Date.now(), text:inputvalue, completed:false},
        ]);
        setinputvalue("");
    };
    //add values number
    const toggleTodo=(id:number)=>{
        setTodos(
            todos.map((todo)=>
            todo.id ===id?{...todo,completed: !todo.completed} :todo   
        )


        )

    };
    //delete todo section
    const deleteTodo=(id:number)=>{
        setTodos(todos.filter((todo) =>todo.id !==id));


    };
    return(
        <div className="flex flex-col  main-h-screen">
        <header className="bg-blue-700 text - white py-4">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-serif">TodoList by Humera Yahya</h1>
                <p className="font-serif mt-3 ">
                    {""}
                    Organize your work with our Next js TodoList  App.
                </p>    
            </div>

        </header>


     <main  className="flex-grow flex  items-center  justify-center">
        <div className="max-w-md  max-auto  p-4  bg-slate-300  rounded-lg  shadow-md">
            <div className="mb-4">
                <div className="flex">
                    <input 
                    type="text"
                    value={inputvalue}
                    onChange={(e) => setinputvalue(e.target.value)}
                    className="flex-grow p-2 border border-brown-400 rounded-lg"
                    placeholder="Add a new task ...."
                     />
                     <button 
                     onClick={addTodo}
                     className="ml-2  px-4 py-2  bg-blue-500 text-white rounded-lg hovor:bg-sky-600">
                    Add    

                     </button>

                </div>
            </div>
            <ul className="space-y-2">
{todos.map((todo) => [
    <li key={todo.id}
    className={`flex item-center justify-between p-2 border bordee-slate-400 rounded-lg ${
        todo.completed ? "bg-lime-400 line through": "bg-sky-400"
    }`}
    >
        <span>{todo.text}</span>

,<div>
    <button
    onClick={()=>toggleTodo(todo.id)}
    className="px-2  py-1 text-sm  bg-yellow-500 rounded-lg hover:bg-gray-300">
        {todo.completed ? "Undo" : "completed"}

    </button>




    <button
    onClick={()=>deleteTodo(todo.id)}
    className="px-2  py-1 text-sm  bg-red-500 rounded-lg hover:bg-gray-300">
        delete

    </button>

</div>

    </li>
])}



           
 






        </ul>
        </div>

     </main>
    </div>
    );

 };  

 export default  TodoList


            
        

    

   
 
