const data = [
    {
        id: 1,
        name: 'Arcano el Carro',
        img: '/assets/productos/ArcanoElCarro.jpg',
        stock: 20,
        description: 'Arcano el carro: -',
        price: 500,
        category: 'Ilustraciones',
        category2: 'blanco y negro',
        novelty: true
    },

    {
        id: 2,
        name: 'Arquetipo Tierra',
        img: '/assets/productos/ArquetipoTierra.jpg',
        stock: 10,
        description: `LAS COPAS:
        Su elemento es el Agua y su facultad el AMOR, el sentimiento, la ilusión y la fe. Pero su problema es el desbordamiento emocional.
        Meditar con este arquetipo puede ayudar a mantener un equilibrio en la salud emocional. Puede facilitar encontrar mucha alegría, felicidad y amor.`,
        price: 500,
        category: 'Ilustraciones',
        category2: 'blanco y negro',
        novelty: true
    },

    {
        id: 3,
        name: 'Arquetipo Fuego',
        img: '/assets/productos/ArquetipoFuego.jpg',
        stock: 12,
        description: `El fuego modifica el estado de la materia, lo transmuta. Lo transforma. La pasión y acción. Este elemento lo exteriorizamos o vemos reflejado mediante el movimiento, la actividad, vitalidad y entusiasmo. Trata de la energía existencial y sexual. En exceso, puede abrasar.
        Es un elemento masculino. Energia Yan.
        
        Habla de personas o situaciones las cuales son espontáneas e impulsivas, aplican su energía con todo su corazón. Su repuesta emocional es rápida y tienen una imaginación vivaz.`,
        price: 500,
        category: 'Ilustraciones',
        category2: 'blanco y negro',
        novelty: false
    },

    {
        id: 4,
        name: 'Arquetipo Oro',
        img: '/assets/productos/ArquetipoOro.jpg',
        stock: 6,
        description: `Los oros se relacionan con el elemento Tierra. El fundamento del mundo material y de  los sentidos. Significa que realiza la función de equilibrar el ímpetu del Fuego, la razón de las Espadas, la emoción del Agua, para realizar algo tangible con todo ello. En las cartas de oro se materializan los frutos de nuestros esfuerzos, los bienes y las ganancias.`,
        price: 500,
        category: 'Ilustraciones',
        category2: 'blanco y negro',
        novelty: true
    },

    {
        id: 5,
        name: 'Arquetipo Aire',
        img: '/assets/productos/ArquetipoAire.jpg',
        stock: 8,
        description: `LAS ESPADAS:
        Su elemento es el Aire y  el pensamiento. Cuando éste funciona debidamente, goza de claridad. Las cartas de espadas nos revelan lo tenso de la mente humana, engaños y autoengaños; las luchas y el sufrimiento. Así como también representa la victoria, la fuerza mental, la justicia, la claridad y el pensamiento creativo. Una gran idea o una inspiración a la creatividad.`,
        price: 500,
        category: 'Ilustraciones',
        category2: 'blanco y negro',
        novelty: false
    },  
]

export default function getItems() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(data)
        }, 2000);
    })
}

export function getItemsByCategory(cat) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if(cat === true){
                let itemsFind = data.filter( item => item.novelty == cat)
                res(itemsFind)
            } else {
                let itemsFind = data.filter( item => item.category == cat)
                res(itemsFind)
            }
        }, 2000);
    })
}

export function getSingleItem(name) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            let itemFind = data.find( item => item.name === name)
            if(itemFind){
                res(itemFind)
            } else {
                rej("Producto no encontrado")
            }
        }, 2000);
    })
}
