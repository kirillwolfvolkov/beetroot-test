import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

import * as actions from '../ducs/actions';

class Contracts extends Component {
    componentWillMount() {
        this.props.loadContracts();
    }
    render() {
        const { contracts } = this.props;
        return (
            <section>
                <h1>Contracts</h1>
                <nav>
                    <Link to='/customers'>Customers</Link>
                    <Link to='/'>Home</Link>
                </nav>
                <div className='Contracts'>
                    {contracts.length ? contracts.map(contract => (
                        <div key={contract.id}  className='Contract'>{contract.name}</div>
                    )): (
                        <h2>No contracts...</h2> 
                    )}
                </div>   
                
            </section>
        );
    }
}

const mapStateToProps = store => {
    return {
      contracts: store.contracts
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
      loadContracts: () => dispatch(actions.loadContracts()),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Contracts)