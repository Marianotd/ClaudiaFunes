const data = [
    {
        id: 1,
        name: 'Arcano el Carro',
        img: '/assets/productos/ArcanoElCarro.jpg',
        stock: 20,
        description: '',
        price: 500
    },

    {
        id: 2,
        name: 'Arquetipo Tierra',
        img: '/assets/productos/ArquetipoTierra.jpg',
        stock: 10,
        description: '',
        price: 500
    },

    {
        id: 3,
        name: 'Arquetipo Fuego',
        img: '/assets/productos/ArquetipoFuego.jpg',
        stock: 12,
        description: '',
        price: 500
    },

    {
        id: 4,
        name: 'Arquetipo Oro',
        img: '/assets/productos/ArquetipoOro.jpg',
        stock: 6,
        description: '',
        price: 500
    },

    {
        id: 5,
        name: 'Arquetipo Aire',
        img: '/assets/productos/ArquetipoAire.jpg',
        stock: 8,
        description: '',
        price: 500
    },  
]

export default function getItems() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(data)
        }, 2000);
    })
}