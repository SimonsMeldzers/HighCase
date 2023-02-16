import Product from './pages/Product/Product';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css';

const theme = createTheme({
  typography:{
    fontFamily:'Poppins'
  },
  palette:{
    primary:{
      main: '#FF7B54',
    },
    secondary: {
      main: '#939B62'
    },
    info:{
      main: '#ffffff',
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/products/' element={ <Products/> }/>
          <Route path='/product/' element={ <Product/> }/>
          <Route path='/products/:id' element={ <Products/> }/>
          <Route path='/product/:id' element={ <Product/> }/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
