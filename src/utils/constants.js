import harry from '../assets/static/img/harry.jpg';
import lotr from '../assets/static/img/the_return_of_the_king.jpg';
import loli from '../assets/static/img/lolita.jpg';
import jane from '../assets/static/img/jane_eyre.jpeg';
import master from '../assets/static/img/the_master_and_margarita.png';

export const data = {
    products:[
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
