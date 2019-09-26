import './App.css';
import React, { Component } from 'react';
import Product from './Product'
import Cart from './Cart'


class App extends Component {

  constructor ( props ) {
    super( props )
    this.state = {
      showCart: false,
      showCheck: false,
      products: "",
      cart: []
    }
    this.handleClick = this.handleClick.bind( this )
    this.toggleCartPop = this.toggleCartPop.bind( this )
    this.handleCheck = this.handleCheck.bind( this )
    this.handleCheckout = this.handleCheckout.bind( this )

  }

  componentDidMount() {
    let endPoint = `https://api.myjson.com/bins/10kyrb`
    fetch( endPoint )
      .then( response => response.json() )
      .then( jsonData => {
        this.setState( prevState => ( {
          products: jsonData.products
        } ) )
      } )
  }

  handleClick( e ) {
    // console.log( 'type of e was: ', typeof ( e ) )
    // if ( e === 'undefined' ) {
    //   console.log( 'event was undefined' )
    //   return e === undefined;
    // }
    // console.log( 'clicked', e )
    console.log( 'the event is: ', e )
    const existingProduct = this.state.cart.filter( p => p.id === e.id );

    if ( existingProduct.length > 0 ) {
      // console.log( "length was positive" )
      const withoutExisingProduct = this.state.cart.filter( p => p.id !== e.id )
      const updatedUnitsProduct = {
        ...existingProduct[ 0 ],
        units: existingProduct[ 0 ].units + e.units
      }

      this.setState( {
        cart: [ ...withoutExisingProduct, updatedUnitsProduct ],
        showCart: !this.state.showCart,
        showCheck: true
      } )
    }
    else {
      const withoutExisingProduct = this.state.cart.filter( p => p.id !== e.id )
      const updatedUnitsProduct = {
        ...e,
      }
      this.setState( {
        cart: [ ...withoutExisingProduct, updatedUnitsProduct ],
        showCart: !this.state.showCart,
        showCheck: true
      } )
    }
  }
  toggleCartPop() {
    this.setState( { showCart: !this.state.showCart } )
  }

  handleCheck() {
    if ( this.state.cart.length > 2 ) {
      this.setState( { showCheck: true } )
    }
  }
  handleCheckout() {
    alert( 'Thank you for purchasing' )
  }
  render() {
    // console.log( this.state.products )
    return (
      <div className='homepage'>
        <button className='btn cartbtn' onClick={ this.toggleCartPop }>Cart</button>
        <div>
          <div className="main">
            {
              this.state.products &&
              this.state.products.map( p => <Product { ...p }
                addFunc={ this.handleClick }
                cartPop={ this.toggleCartPop }
                handleCheck={ this.handleCheck } /> )
            }
          </div>
          <div>
            {
              this.state.showCart ?
                <Cart
                  checkout={ this.handleCheckout }
                  showCheck={ this.state.showCheck }
                  cart={ this.state.cart }
                  closeCart={ this.toggleCartPop } />
                : null }
          </div>
        </div>
      </div>

    )
  }
}

export default App;
