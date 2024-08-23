import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './Pages/Home';
import Coin from './Pages/Coin';
import { createTheme } from '@mui/material/styles';
function App() {
  const theme = createTheme();
 
  return (
    <BrowserRouter>
      <div className="app">
          <Header />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/coins/:id" Component={Coin} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
