import harry from './components/img/harry.jpg';
import lotr from './components/img/the_return_of_the_king.jpg';
import loli from './components/img/lolita.jpg';
import jane from './components/img/jane_eyre.jpeg';
import master from './components/img/the_master_and_margarita.png';

export const data = {
    product:[
        {
            id: '1',
            name:'Harry Potter',
            price: 5.33,
            img: harry
        },
        {
            id: '2',
            name:'Lord of the rings',
            price: 6.44,
            img: lotr
        },
        {
            id: '3',
            name:'Lolita',
            price: 3.54,
            img: loli
        },
        {
            id: '4',
            name:'Jane Eyer',
            price: 6.40,
            img: jane
        },
        {
            id: '5',
            name:'Master and Margarita',
            price: 6.66,
            img: master
        },

    ],
    currency: '$',

}
export const PAGE_PRODUCTS = 'products';
export const PAGE_CART = 'cart';