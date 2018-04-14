import React, { Component } from 'react';
import { Button, Panel} from 'react-bootstrap';
import Counter from './Counter';
import Checkout from './Checkout';
import {Link, Switch, Route} from 'react-router-dom'

class Food extends Component {
    constructor(props){
        super(props)
        this.newChange = this.newChange.bind(this)
    }

    newChange = (event)=>{
        this.props.handleClick(event.target.id)
    }
    
    render(){
        return(
            <div> 
            <div className = 'col-md-9'>
            <div className= 'row'>
                    {this.props.products.map( foo => {
                        return(
                            <div className="panel panel-default col-md-4 col-xs-12">
                            <div className="panel-body">
                                <div>
                                    <img className="img-responsive" src={foo.photo}/>
                                    <br/>
                                    <h3 className="panel-title">{foo.item}</h3>
                                    <br/>
                                    <p>Precio: {foo.price}</p>
                                    <p>Cantidad: {foo.cuantity}</p>
                                </div>
                                <div className="col-md-5">
                                <Button
                                    onClick={this.newChange}
                                    id={foo.id}
                                    bsStyle="primary"
                                    bsSize="small"
                                    >
                                    Agregar
                                </Button>
                                </div>
                                <div className="col-md-6">
                                <Button
                                    // aqui detona evento
                                    // onClick={this.newChange}
                                    id={foo.id}
                                    className =''
                                    bsStyle="danger"
                                    bsSize="small">
                                    Quitar
                                </Button>
                                </div>
                            </div>
                        </div>)
                    })}
                    </div>
                </div>
                <Counter order={this.props.order}/>
                </div>
        )
    }
}

export default Food
