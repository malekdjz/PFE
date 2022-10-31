import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'; 
import Login from './components/Login';
import Dashboard from './components/Dashboard';
function app() 
{   
  return (  
  <Router>
    <Routes>       
      <Route exact path='/' element={<Login/>}></Route>     
      <Route exact path='/dashboard' element={<Dashboard/>}></Route>     
    </Routes>   
  </Router>
  ); 
}  
export default app; 