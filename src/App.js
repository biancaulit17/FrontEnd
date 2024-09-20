import './App.css';
import React from 'react';
import Header from './components/header';
import Promo from './components/promo';
import Order from './components/order';
import Footer from './components/footer';
 
function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Order />
      <Footer />
    </div>
  );
}
 
export default App;