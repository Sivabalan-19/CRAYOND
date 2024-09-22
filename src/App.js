
import "./App.css";

import Sidebar from "./component/Sidebar/Sidebar";
import { useState } from "react";
import Price from "./pages/Price";
import Catalog from "./pages/Catalog";
import EmptyTable from "./pages/EmptyTable";
import Variant from "./pages/Variant";
import pizza from './component/assets/pizza.jpeg'



const data = [
  { img: pizza, name: "Mushroom Delight", id: 1, descr: 'A delicious mushroom pizza with extra cheese', min: 300, mid: 500, max: 800 },
  { img: pizza, name: "Pepperoni Passion", id: 2, descr: 'Spicy pepperoni on a cheesy base', min: 320, mid: 520, max: 820 },
  { img: pizza, name: "Veggie Supreme", id: 3, descr: 'Loaded with fresh vegetables and herbs', min: 290, mid: 480, max: 750 },
  { img: pizza, name: "BBQ Chicken Feast", id: 4, descr: 'BBQ chicken with a smoky flavor', min: 310, mid: 540, max: 780 },
  { img: pizza, name: "Hawaiian Paradise", id: 5, descr: 'A mix of ham and pineapple for a tropical twist', min: 300, mid: 500, max: 760 },
  { img: pizza, name: "Four Cheese Fantasy", id: 6, descr: 'A blend of four delicious cheeses', min: 280, mid: 550, max: 740 },
  { img: pizza, name: "Spicy Sausage", id: 7, descr: 'Italian sausage with a spicy kick', min: 330, mid: 510, max: 790 },
  { img: pizza, name: "Mediterranean Magic", id: 8, descr: 'Feta cheese and olives with a Mediterranean flair', min: 295, mid: 525, max: 765 },
  { img: pizza, name: "Margherita Classic", id: 9, descr: 'Simple and classic with fresh basil and mozzarella', min: 300, mid: 515, max: 755 },
];


function App() {
  const [col, setcol] = useState(-1);
  const [cart, setcart] = useState([]); 
  const [id,setid] = useState(-1)
 
  console.log(cart)
  console.log("hii")
  return (
    <div className="App">
      <div className="sidebarcont">
        <Sidebar />
      </div>
      <div className="maincont">
        <div className="main-left">
          <EmptyTable col={col} setcol={setcol} cart={cart}  setcart={setcart} />
          
        </div>
        <div className="main-right">
            {(
              col ===  -1 ?(
                <Price col={col} setcol={setcol} id={id} setid={setid} data={data} cart={cart} setcart={setcart}/>
                
              ) : col === -2 ? (
               
                <Catalog col={col} setcol={setcol} id={id} setid={setid} data={data} cart={cart} setcart={setcart}/>
              ) : 
              (
                <Variant col={col} setcol={setcol} id={id} setid={setid} data={data} cart={cart} setcart={setcart}/>
              )
            )}

          
        </div>
      </div>
    </div>
  );
}

export default App;
