import './asset/css/admin/app.css';
import './asset/css/admin/dashboard.css';
import './asset/css/admin/productManage.css';
import './asset/assets/bootstrap-5.0.0-beta2-dist/css/bootstrap.min.css';
import './asset/assets/fontawesome-pro-5.15.1-web/css/all.min.css';

import {useState} from 'react';
import  Nav from './components/Navbar';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Manageprd } from './components/Product/Manageprd';

function App() {
  const [route, setRoute] = useState(0);
  
  const renderBody = () => {
    switch (route) {
      case 1:
        // code
        return (<Manageprd />)
      
      default:
        // code
        return <Dashboard />
    }
  }
  
  
  return (
    
      <div className="App">
        <Header/>
        <div className="row">
        <Nav
          onHandleSetRoute={setRoute}
        />
        {
          renderBody()
        }
        </div>
        
      </div>
    
  );
}

export default App;
