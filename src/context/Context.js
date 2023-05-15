import { createContext } from 'react'
import { faker } from '@faker-js/faker'

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

    console.log(products);

    return (
        <Cart.Provider>{children}</Cart.Provider>
    )
}

export default Context