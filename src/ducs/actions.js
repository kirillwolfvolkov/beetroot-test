import {
    LOAD_CONTRACTS,
    LOAD_CUSTOMERS,
    DELETE_CUSTOMER
} from './constants';

export const deleteCustomer = (id) => ({
    type: DELETE_CUSTOMER,
    payload: id
});

export const loadContracts = () => ({
    type: LOAD_CONTRACTS
});

export const loadCustomers = () => ({
    type: LOAD_CUSTOMERS
});