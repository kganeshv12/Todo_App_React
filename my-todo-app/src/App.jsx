import { useState } from 'react'
import './App.css';
import TodoList from './TodoItem';
import InputArea from './InputArea';

function App() {

  // const [text, setText] = useState("");

  const [items, setItems] = useState([]);



  // function handleChange(event){
  //   const value = event.target.value;
  //   return setText(value);
  // }

  function addList(text){
    const input = text
    setItems((prev)=>{
      return [...prev, input]
    })  


  }

  function deleteItem(index){
    console.log(index)
    const newList = items.filter((_,i)=>i!==index)
    setItems(newList)
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      {/* <InputArea change = {handleChange} text = {text} add = {addList} /> */}
      <InputArea add = {addList}/>
      <div>
        <ul>
          
          {items && items.length > 0 ? (
            items.map((item, index) => (
              <TodoList key={index} onChecked={() => deleteItem(index)} text={item} />
            ))
          ) : (
            <p>No items in the list yet.</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;

