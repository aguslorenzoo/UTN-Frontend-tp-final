const contacts = [
    {
        id: 1,
        name: 'Harry Potter',
        descripcion: 'El niño que vivió',
        avatar: '/images/harry.jpg',
        last_connection: '10:05',
        connection_status: 'online',
        last_message: "09:45",
        messages: [
            {
                emisor: "otro",
                hora: "09:15",
                id: 1,
                texto: "¡Hola! ¿Ya desayunaste?",
                status: "visto"
            },
            {
                emisor: "otro",
                hora: "09:16",
                id: 2,
                texto: "Ron está buscando sus calcetines otra vez",
                status: "visto"
            },
            {
                emisor: "yo",
                hora: "09:30",
                id: 3,
                texto: "Jajaja, sí, ya desayuné.",
                status: "visto"
            },
            {
                emisor: "yo",
                hora: "09:31",
                id: 4,
                texto: "Decile a Ron que revise bajo la cama.",
                status: "visto"
            },
            {
                emisor: "otro",
                hora: "09:45",
                id: 5,
                texto: "¡Lo encontró! Nos vemos en la sala común.",
                status: "no-visto"
            }
        ]
    },
    {
        id: 2,
        name: 'Hermione Granger',
        descripcion: 'La bruja más brillante de su edad',
        avatar: '/images/hermione.jpg',
        last_connection: '14:25',
        connection_status: 'online',
        last_message: "14:22",
        messages: [
            {
                emisor: "otro",
                hora: "13:01",
                id: 1,
                texto: "¿Terminaste el deber de Pociones?",
                status: "visto"
            },
            {
                emisor: "yo",
                hora: "13:45",
                id: 2,
                texto: "Todavía no, pero me falta poco.",
                status: "visto"
            },
            {
                emisor: "otro",
                hora: "14:00",
                id: 3,
                texto: "Asegúrate de revisar la página 394.",
                status: "visto"
            },
            {
                emisor: "otro",
                hora: "14:01",
                id: 4,
                texto: "Y no olvides citar los ingredientes correctamente.",
                status: "visto"
            },
            {
                emisor: "yo",
                hora: "14:10",
                id: 5,
                texto: "¡Gracias por el consejo!",
                status: "visto"
            },
            {
                emisor: "otro",
                hora: "14:22",
                id: 6,
                texto: "¡No dudes en preguntarme si necesitas ayuda!",
                status: "no-visto"
            }
        ]
    },
    {
        id: 3,
        name: 'Ron Weasley',
        descripcion: 'Amo los dulces y las bromas',
        avatar: '/images/ron.jpg',
        last_connection: '13:00',
        connection_status: 'offline',
        last_message: "12:55",
        messages: [
            {
                emisor: "otro",
                hora: "12:30",
                id: 1,
                texto: "¿Vamos a jugar ajedrez mágico?",
                status: "visto"
            },
            {
                emisor: "otro",
                hora: "12:31",
                id: 2,
                texto: "Esta vez no vas a ganar.",
                status: "visto"
            },
            {
                emisor: "yo",
                hora: "12:45",
                id: 3,
                texto: "¡Claro! Pero esta vez te gano.",
                status: "visto"
            },
            {
                emisor: "yo",
                hora: "12:46",
                id: 4,
                texto: "Ya estoy practicando.",
                status: "visto"
            },
            {
                emisor: "otro",
                hora: "12:55",
                id: 5,
                texto: "¡Eso lo veremos!",
                status: "no-visto"
            }
        ]
    },
    {
        id: 4,
        name: 'Draco Malfoy',
        descripcion: 'Mi padre se enterará de esto',
        avatar: '/images/draco.jpeg',
        last_connection: '16:15',
        connection_status: 'offline',
        last_message: "16:03",
        messages: [
            {
                emisor: "otro",
                hora: "15:50",
                id: 1,
                texto: "¿Listo para el partido de Quidditch?",
                status: "visto"
            },
            {
                emisor: "otro",
                hora: "15:51",
                id: 2,
                texto: "No te confíes tanto, Potter.",
                status: "visto"
            },
            {
                emisor: "yo",
                hora: "16:00",
                id: 3,
                texto: "Obvio, Gryffindor va a ganar.",
                status: "visto"
            },
            {
                emisor: "otro",
                hora: "16:03",
                id: 4,
                texto: "Eso está por verse.",
                status: "no-visto"
            }
        ]
    },
    {
        id: 5,
        name: 'Luna Lovegood',
        descripcion: '¡Cuidado con los Nargles!',
        avatar: '/images/luna.jpeg',
        last_connection: '12:00',
        connection_status: 'online',
        last_message: "11:45",
        messages: [
            {
                emisor: "otro",
                hora: "11:20",
                id: 1,
                texto: "¿Quieres buscar criaturas mágicas conmigo?",
                status: "visto"
            },
            {
                emisor: "yo",
                hora: "11:35",
                id: 2,
                texto: "¡Claro, Luna!",
                status: "visto"
            },
            {
                emisor: "yo",
                hora: "11:36",
                id: 3,
                texto: "¿Dónde nos encontramos?",
                status: "visto"
            },
            {
                emisor: "otro",
                hora: "11:45",
                id: 4,
                texto: "En el Bosque Prohibido. No olvides tus Spectrespecs.",
                status: "no-visto"
            }
        ]
    },
    {
        id: 6,
        name: 'Severus Snape',
        descripcion: 'Profesor de Pociones',
        avatar: '/images/snape.webp',
        last_connection: '19:10',
        connection_status: 'offline',
        last_message: "19:03",
        messages: [
            {
                emisor: "otro",
                hora: "18:50",
                id: 1,
                texto: "No olvides entregar tu tarea de Pociones.",
                status: "visto"
            },
            {
                emisor: "otro",
                hora: "18:51",
                id: 2,
                texto: "Espero que no tenga errores.",
                status: "visto"
            },
            {
                emisor: "yo",
                hora: "19:00",
                id: 3,
                texto: "La entregaré a tiempo, profesor.",
                status: "visto"
            },
            {
                emisor: "yo",
                hora: "19:01",
                id: 4,
                texto: "Revisé todo dos veces.",
                status: "visto"
            },
            {
                emisor: "otro",
                hora: "19:03",
                id: 5,
                texto: "Más te vale.",
                status: "no-visto"
            }
        ]
    },
    {
        id: 7,
        name: 'Minerva McGonagall',
        descripcion: 'Directora de Gryffindor',
        avatar: '/images/mcgonagall.jpg',
        last_connection: '08:30',
        connection_status: 'online',
        last_message: "08:10",
        messages: [
            {
                emisor: "otro",
                hora: "07:50",
                id: 1,
                texto: "La puntualidad es importante.",
                status: "visto"
            },
            {
                emisor: "yo",
                hora: "08:05",
                id: 2,
                texto: "¡Sí profesora, ya voy!",
                status: "visto"
            },
            {
                emisor: "yo",
                hora: "08:06",
                id: 3,
                texto: "Solo estoy terminando un trabajo.",
                status: "visto"
            },
            {
                emisor: "otro",
                hora: "08:10",
                id: 4,
                texto: "Te espero en mi despacho.",
                status: "no-visto"
            }
        ]
    },
    {
        id: 8,
        name: 'Sirius Black',
        descripcion: 'Tu padrino favorito',
        avatar: '/images/sirius.jpg',
        last_connection: '23:00',
        connection_status: 'offline',
        last_message: "22:20",
        messages: [
            {
                emisor: "otro",
                hora: "21:45",
                id: 1,
                texto: "¿Listo para una aventura nocturna?",
                status: "visto"
            },
            {
                emisor: "otro",
                hora: "22:00",
                id: 2,
                texto: "Trae el mapa del merodeador.",
                status: "visto"
            },
            {
                emisor: "yo",
                hora: "22:10",
                id: 3,
                texto: "¡Cuenta conmigo!",
                status: "visto"
            },
            {
                emisor: "yo",
                hora: "22:11",
                id: 4,
                texto: "¿Llevo también la capa invisible?",
                status: "visto"
            },
            {
                emisor: "otro",
                hora: "22:20",
                id: 5,
                texto: "Por supuesto, nunca se sabe quién puede estar mirando.",
                status: "no-visto"
            }
        ]
    }
]

export const getContactList = () => {
    return contacts
}

export const getContactById = (contact_id) => {
    for (const contact of contacts){
        if (Number(contact.id) === Number(contact_id)){
            return contact
        }
    }
    return null
}

