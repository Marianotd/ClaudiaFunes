const data = [
    {
        id: 1,
        name: 'Arcano el Carro',
        img: '/assets/productos/ArcanoElCarro.jpg',
        stock: 20,
        description: 'Arcano el carro: -',
        price: 500
    },

    {
        id: 2,
        name: 'Arquetipo Tierra',
        img: '/assets/productos/ArquetipoTierra.jpg',
        stock: 10,
        description: 'Arquertipo Tierra: -',
        price: 500
    },

    {
        id: 3,
        name: 'Arquetipo Fuego',
        img: '/assets/productos/ArquetipoFuego.jpg',
        stock: 12,
        description: `El fuego modifica el estado de la materia, lo transmuta. Lo transforma. La pasión y acción. Este elemento lo exteriorizamos o vemos reflejado mediante el movimiento, la actividad, vitalidad y entusiasmo. Trata de la energía existencial y sexual. En exceso, puede abrasar.
        Es un elemento masculino. Energia Yan.
        
        Habla de personas o situaciones las cuales son espontáneas e impulsivas, aplican su energía con todo su corazón. Su repuesta emocional es rápida y tienen una imaginación vivaz.`,
        price: 500
    },

    {
        id: 4,
        name: 'Arquetipo Oro',
        img: '/assets/productos/ArquetipoOro.jpg',
        stock: 6,
        description: `Los oros se relacionan con el elemento Tierra. El fundamento del mundo material y de  los sentidos. Significa que realiza la función de equilibrar el ímpetu del Fuego, la razón de las Espadas, la emoción del Agua, para realizar algo tangible con todo ello. En las cartas de oro se materializan los frutos de nuestros esfuerzos, los bienes y las ganancias.`,
        price: 500
    },

    {
        id: 5,
        name: 'Arquetipo Aire',
        img: '/assets/productos/ArquetipoAire.jpg',
        stock: 8,
        description: 'Arquetipo Aire: -',
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

export function getSingleItem( idItem) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            let itemFind = data.find( item => item.id === idItem)
            if(itemFind){
                res(itemFind)
            } else {
                rej("Producto no encontrado")
            }
            
        }, 2000);
    })
}
