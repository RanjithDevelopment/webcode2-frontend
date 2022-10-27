import Homepage from './components/homepage';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Scrapeddetails from './components/Scrapeddetails';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Homepage/>}/>
        <Route path='/Scrapeddetails' element={<Scrapeddetails/>}/>
      </Routes>
      </BrowserRouter>
    
     
    </div>
  );
}

export default App;
