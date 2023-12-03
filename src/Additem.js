import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { useRef } from 'react';


const Additem = ({newItem, setNewItem, handleSubmit}) => {

    const inputRef = useRef()
  return (
    <div>
        <form className='addForm' onSubmit={handleSubmit}>
            <input
                    type="text"
                    ref={inputRef}
                    required
                    autoFocus
                    placeholder="Add Item"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                />
                <button 
                    type="submit"
                    onClick={() => inputRef.current.focus()}
                >
                    <FaPlus />
                </button>
        </form>
    </div>
  )
}

export default Additem
