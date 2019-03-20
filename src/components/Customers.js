import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import * as actions from '../ducs/actions';
import Customer from './Customer';

class Customers extends Component {
    componentWillMount() {
        this.props.loadCustomers();
    }
    render() {
        const { customers } = this.props;
        return (
            <section>
                <h1>Customers</h1>
                <nav>
                    <Link to='/contracts'>Contracts</Link>
                    <Link to='/'>Home</Link>
                </nav>
                <div className='Customers'>
                {customers.length ? customers.map((customer) => (
                    <Customer key={customer.id} customer={customer} deleteCustomer={this.props.deleteCustomer} />
                )) : (
                    <h2>No costomers...</h2>
                )}
                </div>
            </section>
        );
    }
}

const mapStateToProps = store => {
    return {
      customers: store.customers,
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
        loadCustomers: () => dispatch(actions.loadCustomers()),
        deleteCustomer: (id) => dispatch(actions.deleteCustomer(id)),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Customers)