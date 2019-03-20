import React from 'react';

const Customer = ({customer, deleteCustomer}) => (
    <div className='Customer'>
        <h4>{customer.name}</h4>
        <button onClick={() => {deleteCustomer(customer.id)}}>delete</button>
        <ul>
            {customer.CustomerContracts && customer.CustomerContracts.map((contract) => (
                <li key={contract.id}>{contract.name}</li>
            ))}
        </ul>
    </div>
);

export default Customer;