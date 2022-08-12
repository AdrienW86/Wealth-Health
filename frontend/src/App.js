import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import List from './pages/List/List';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={ <Home /> }/>
      <Route path='/list' element={ <List /> }/>
     </Routes>
    </div>
  );
}

export default App;
