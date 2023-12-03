import './App.css';
import './index.css'
import { useState } from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import Additem from './Additem';

function App() {

  
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || []);

 

  const [newItem, setNewItem] = useState('');



  const handleCheck = (id) => {
    const listItem = items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItem);
    localStorage.setItem('items',JSON.stringify(listItem))
  };

  const handleDelete = (id) => {
    const listItem = items.filter((item) => item.id !== id);
    setItems(listItem);
    localStorage.setItem('items',JSON.stringify(listItem))
  };



  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id +1 : 1;
    const addNewItem = {id, checked:false, item }
    const listItem = [...items, addNewItem]
    setItems(listItem)
    localStorage.setItem('items',JSON.stringify(listItem))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addItem(newItem)
    setNewItem('')
  } 


  return (
    <div className='App '>
      <Header header="Todo List"/>
      <Additem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content 
        items={items}
        setItems={setItems}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
      />
      <Footer items={items}/>
    </div>

  );
}

export default App;
