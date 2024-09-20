import logo from './logo.svg';
import './App.css';
import Sidebar from './component/Sidebar/Sidebar';
import Iconbox from './component/Iconbox/Iconbox';
import Searchbar from './component/input/Searchbar';
import { MdDashboard } from 'react-icons/md';
import Icononly from './component/Iconbox/Icononly';
import Priceline from './component/Details/Priceline';

function App() {
  return (
    <div className="App">
      <div className='sidebarcont'>
        <Sidebar/>
      </div>
      <div className='maincont'>
          <div className='main-left'>
            <div className='searchandicon'>
              <div style={{width:'82%',padding:'15px',height:'50%',display:'flex',alignItems:'center'}}><Searchbar/></div>
              <div className='icononlybox' style={{width:'8%'}}><Icononly icon={<MdDashboard />}/></div>
            </div>
            <div className='threeiconandlist'>
              <div style={{width:'38%',height:'100%',alignItems:'center',justifyContent:'start',display:'flex',flexDirection:'column'}}>
                <div style={{fontSize:'22px',justifyContent:'start',display:'flex',}}>Cart Summary</div>
                <div style={{fontSize:'17px',justifyContent:'start',display:'flex',}}>Order Id: 000007</div>
              </div>
              <div style={{width:'30%',alignItems:'center',height:'100%',display:'flex',padding:'0px 2%',justifyContent:'space-between'}}>
                <div className='icononlybox'><Icononly   icon={<MdDashboard /> }/></div>
                <div className='icononlybox'><Icononly  icon={<MdDashboard />}/></div>
                <div className='icononlybox'><Icononly icon={<MdDashboard />}/></div>
              </div>
            </div>
          </div>
          <div className='main-right'>

            <div className='Pricelinehead'>
              <div style={{fontSize:'20px',fontWeight:'700'}}>Payment Summary</div>
              <div style={{fontSize:'18px'}}>Ashwin</div>
            </div>

            <div className='pricebox'>
              <div><Priceline name = 'Sub total' price = 'SAR 0.00'/></div>
              <div><Priceline name = 'Taxable Amount' price = 'SAR 0.00'/></div>
              <div><Priceline name = 'Total Tax' price = 'SAR 0.00'/></div>
            </div>
            <div>
              <hr/>
            </div>
            <div>
            <div><Priceline name = 'Grand Total' price = 'SAR 0.00'/></div>
            </div>
              
          </div>
      </div>
      
    </div>
  );
}

export default App;
