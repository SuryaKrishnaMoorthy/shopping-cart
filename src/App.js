import React, { Component } from 'react';
import CartHeader from './components/CartHeader';
import CartFooter from './components/CartFooter';
import CartItems from './components/CartItems';
import 'bootstrap/dist/css/bootstrap.css';
let year = '20180'
class App extends Component {
  render() {
    //React components
    return (
      <section>
        <CartHeader />
        <CartItems />
        <CartFooter copyright={year}/>
      </section>
    );
  }
}

export default App;
