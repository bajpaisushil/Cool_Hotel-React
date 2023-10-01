import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import About from './pages/About/index';
import Rooms from './pages/Rooms/index';
import RoomDetails from './pages/RoomDetails/index';
import Contact from './pages/Contact/index';
import { Provider } from 'react-redux';
import store from './redux/store';
import Footer from './components/footer';
import Cart from './pages/Cart/index';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/rooms' element={<Rooms />} />
        <Route path='/rooms/:roomId' element={<RoomDetails />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      </BrowserRouter>
      <Footer />
      </Provider>
    </div>
  );
}

export default App;
