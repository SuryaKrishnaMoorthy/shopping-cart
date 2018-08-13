import React, { Component } from 'react';
import CartHeader from './components/CartHeader';
import CartFooter from './components/CartFooter';
import CartItems from './components/CartItems';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    //React components
    return (
      <section>
        <CartHeader />
        <CartItems />
        <CartFooter />
      </section>
    );
  }
}

export default App;
