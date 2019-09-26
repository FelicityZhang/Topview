import React from 'react';
import './App.css';


class Cart extends React.Component {
    constructor ( props ) {
        super( props )
    }
    render() {
        // console.log( 'cart:   ', this.props.cart )
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <div className='cartBox'>
                        <button className='btn closebtn' onClick={ this.props.closeCart }> close me</button>
                        <div>
                            <ul>
                                { this.props.cart.map( c => <li key={ c.id }>{ c.name } | units { c.units }</li> )
                                }
                            </ul>
                        </div>
                        <div>
                            {
                                this.props.showCheck ?
                                    <button className='btn addbtn' onClick={ this.props.checkout }>Check Out</button>
                                    : null }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart