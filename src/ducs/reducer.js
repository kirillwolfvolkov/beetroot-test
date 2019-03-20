import {
    LOAD_CONTRACTS,
    LOAD_CUSTOMERS,
    DELETE_CUSTOMER
} from './constants';

const contracts = [
    {
        id: '1',
        name: 'name1',
        customerId: '1'
    },
    {
        id: '2',
        name: 'name2',
        customerId: '1'
    },
    {
        id: '3',
        name: 'name3',
        customerId: '2'
    },
];

const customers = [
    {
        id: '1',
        name: 'Customer1'
    },
    {
        id: '2',
        name: 'Customer2'
    }
]

export const initialState = {
    customers,
    contracts
}

const deleteCustomer = (id, state) => {
    const { customers, contracts } = state;
    try {
        const tempContracts = contracts.filter((contract) => (contract.customerId !== id));
        const tempCustomers = customers.filter((customer) => (customer.id !== id));
          return ({
            customers: tempCustomers,
            contracts: tempContracts
          });
    } catch(e) {
        console.log(e);
    }
}


const getCustomers = ({customers, contracts}) => {
    const newCustomers = customers.map((customer, key) => {
      const CustomerContracts = contracts.filter((contract) => contract.customerId === customer.id)

      return {
        ...customer,
        CustomerContracts: CustomerContracts || [],
        index: key
      }
    });
    return newCustomers;
  }

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CONTRACTS:
            return {...state};
        
        case LOAD_CUSTOMERS:
            return {...state, customers: getCustomers(state)};
        
        case DELETE_CUSTOMER:
            return {...state, ...deleteCustomer(action.payload, state)};
        default:
            return state;
    }
};
