
import "./App.css";

import Sidebar from "./component/Sidebar/Sidebar";
import { useState } from "react";
import Price from "./pages/Price";
import Catalog from "./pages/Catalog";
import EmptyTable from "./pages/EmptyTable";
import Variant from "./pages/Variant";

function App() {
  const [col, setcol] = useState(-1);


  return (
    <div className="App">
      <div className="sidebarcont">
        <Sidebar />
      </div>
      <div className="maincont">
        <div className="main-left">
          <EmptyTable col={col} setcol={setcol}/>
          
        </div>
        <div className="main-right">
            {(
              col ===  -1 ?(
                <Price col={col} setcol={setcol}/>
                
              ) : col === -2 ? (
               
                <Catalog col={col} setcol={setcol}/>
              ) : 
              (
                <Variant col={col} setcol={setcol}/>
              )
            )}

          
        </div>
      </div>
    </div>
  );
}

export default App;
