import { FaTrashCan } from "react-icons/fa6";
const Content = ({ items, handleDelete, handleCheck, setItems }) => {



  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => {
            return (
              <li className="item" key={item.id}>
                <div className="jcsb">
           
               
                  
                  <div>
                    <input
                      type="checkbox"
                      onChange={() => handleCheck(item.id)}
                      checked={item.checked}
                    />
                    <label 
                        style={item.checked ? {textDecoration : 'line-through'} : null}
                        onClick={() => handleCheck(item.id)}
                    >
                      {item.item}
                    </label>
                  </div>
             
                  <div>
                    <FaTrashCan
                      role="button"
                      onClick={() => handleDelete(item.id)}
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      ) :
       (
        <p style={{ marginTop: "100px" }}>Your List is Empty</p>
      )}
    </main>
  );
};

export default Content;
