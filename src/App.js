import "./App.css";
import Sidebar from "./component/Sidebar/Sidebar";
import { useState } from "react";
import Price from "./pages/Price";
import Catalog from "./pages/Catalog";
import EmptyTable from "./pages/EmptyTable";
import Variant from "./pages/Variant";
import pizza from './assets/pizza.jpeg'
import burger from './assets/burger.jpeg'
import juice from './assets/juice.jpeg'
import frenchfries from './assets/frenchfries.png'
import steak from './assets/steak.jpeg'
import pasta from './assets/pasta.png'
import nachos from './assets/nachos.png'
import grape from './assets/grape.png'
import mango from './assets/mando.png'


// const data = [
//   { img: pizza, name: "Mushroom Delight", id: 1, descr: 'A delicious mushroom pizza with extra cheese', min: 300, mid: 500, max: 800 },
//   { img: burger, name: "Pepperoni Passion", id: 2, descr: 'Spicy pepperoni on a cheesy base', min: 320, mid: 520, max: 820 },
//   { img: juice, name: "Veggie Supreme", id: 3, descr: 'Loaded with fresh vegetables and herbs', min: 290, mid: 480, max: 750 },
//   { img: frenchfries, name: "BBQ Chicken Feast", id: 4, descr: 'BBQ chicken with a smoky flavor', min: 310, mid: 540, max: 780 },
//   { img: grape, name: "Hawaiian Paradise", id: 5, descr: 'A mix of ham and pineapple for a tropical twist', min: 300, mid: 500, max: 760 },
//   { img: steak, name: "Four Cheese Fantasy", id: 6, descr: 'A blend of four delicious cheeses', min: 280, mid: 550, max: 740 },
//   { img: nachos, name: "Spicy Sausage", id: 7, descr: 'Italian sausage with a spicy kick', min: 330, mid: 510, max: 790 },
//   { img: pasta, name: "Mediterranean Magic", id: 8, descr: 'Feta cheese and olives with a Mediterranean flair', min: 295, mid: 525, max: 765 },
//   { img: mango, name: "Margherita Classic", id: 9, descr: 'Simple and classic with fresh basil and mozzarella', min: 300, mid: 515, max: 755 },
// ];

const data = [
  { img: pizza, name: "Truffle Mushroom Bliss", id: 1, descr: "A gourmet pizza topped with savory truffle oil and fresh mushrooms", min: 300, mid: 500, max: 800, vari : '1'},
  { img: burger, name: "Fiery Pepperoni Smash", id: 2, descr: "A robust burger featuring zesty pepperoni, melted cheese.", min: 320, mid: 520, max: 820 , vari : ''},
  { img: juice, name: "Garden Fresh Elixir Bliss", id: 3, descr: "A vibrant juice blend bursting with seasonal veggies ", min: 290, mid: 480, max: 750 , vari : '2'}, 
  { img: frenchfries, name: "Smoky BBQ Crunch", id: 4, descr: "Crispy fries drizzled with smoky BBQ sauce, paired perfectly .", min: 310, mid: 540, max: 780 , vari : ''}, 
  { img: grape, name: "Tropical Ham Delight", id: 5, descr: "A sweet and savory fusion of juicy ham and pineapple", min: 300, mid: 500, max: 760, vari : '1' }, 
  { img: steak, name: "Cheese Lovers’ Dream", id: 6, descr: "An indulgent dish featuring a rich blend of", min: 280, mid: 550, max: 740, vari : '3' }, 
  { img: nachos, name: "Zesty Sausage Nachos", id: 7, descr: "Crispy tortilla chips loaded with spicy sausage, jalapeños", min: 330, mid: 510, max: 790, vari : '2' }, 
  { img: pasta, name: "Mediterranean Bliss Bowl", id: 8, descr: "A delightful pasta dish adorned with feta, olives", min: 295, mid: 525, max: 765 , vari : '3'}, 
  { img: mango, name: "Classic Basil Margherita", id: 9, descr: "An iconic pizza with fresh mozzarella, aromatic basil", min: 300, mid: 515, max: 755 , vari : '4'},
  { img: pizza, name: "Truffle Mushroom Bliss", id: 1, descr: "A gourmet pizza topped with savory truffle oil and fresh mushrooms", min: 300, mid: 500, max: 800, vari : '' },
  { img: burger, name: "Fiery Pepperoni Smash", id: 2, descr: "A robust burger featuring zesty pepperoni, melted cheese.", min: 320, mid: 520, max: 820, vari : '2' },
  { img: juice, name: "Garden Fresh Elixir Bliss", id: 3, descr: "A vibrant juice blend bursting with seasonal veggies ", min: 290, mid: 480, max: 750 , vari : '1'}, 
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