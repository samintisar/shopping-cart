import { createContext, useContext, useReducer } from 'react'
import { faker } from '@faker-js/faker'
import { cartReducer } from './Reducers';

const Cart = createContext();

const Context = ({ children }) => {

    const products = [...Array(20)].map(() => ({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.urlLoremFlickr(),
        inStock: faker.number.float({ min: 1, max: 10, precision: 0.001 }),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.number.int({ min: 1, max: 5 })
    }))

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: []
    })

    return (
        <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>
    )
}

export default Context

export const CartState = () => {
    return useContext(Cart)
}