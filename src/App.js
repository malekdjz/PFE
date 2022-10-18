import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'; 
import Login from './auth/Login'
function App() 
{   
  return (  
  <Router>
    <Routes>       
      <Route exact path='/' element={<Login/>}></Route>     
    </Routes>   
  </Router>
  ); 
}  
export default App; 