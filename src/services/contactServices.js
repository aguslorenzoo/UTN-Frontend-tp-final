const contacts = [
    {
        id: 1,
        name: 'Harry Potter',
        descripcion: 'El niño que vivió',
        avatar: '/images/harry.jpg',
        last_connection: '10:05',
        connection_status: 'online',
        last_message: "09:45",
        phone: "+54 11 2345-6789",
        messages: [
            { emisor: "otro", hora: "08:15", id: 1, texto: "¡Hola! ¿Ya desayunaste?", status: "visto" },
            { emisor: "otro", hora: "08:16", id: 2, texto: "Ron está buscando sus calcetines otra vez", status: "visto" },
            { emisor: "yo", hora: "08:30", id: 3, texto: "Jajaja, sí, ya desayuné.", status: "visto" },
            { emisor: "yo", hora: "08:31", id: 4, texto: "Decile a Ron que revise bajo la cama.", status: "visto" },
            { emisor: "otro", hora: "08:45", id: 5, texto: "¡Lo encontró! Nos vemos en la sala común.", status: "visto" },
            { emisor: "yo", hora: "08:50", id: 6, texto: "¿Trajiste el Mapa del Merodeador?", status: "visto" },
            { emisor: "otro", hora: "08:52", id: 7, texto: "Sí, lo tengo en la mochila.", status: "visto" },
            { emisor: "yo", hora: "08:55", id: 8, texto: "Genial. Lo vamos a necesitar hoy.", status: "visto" },
            { emisor: "otro", hora: "09:00", id: 9, texto: "¿Otra aventura secreta?", status: "visto" },
            { emisor: "yo", hora: "09:05", id: 10, texto: "Digamos que Snape no puede vernos esta vez.", status: "visto" },
            { emisor: "otro", hora: "09:07", id: 11, texto: "¿Y Hermione lo sabe?", status: "visto" },
            { emisor: "yo", hora: "09:08", id: 12, texto: "Mejor que no. Nos daría un sermón.", status: "visto" },
            { emisor: "otro", hora: "09:10", id: 13, texto: "Entonces, ¿nos encontramos en la torre de astronomía?", status: "visto" },
            { emisor: "yo", hora: "09:12", id: 14, texto: "Sí, pero llevá la Capa de Invisibilidad.", status: "visto" },
            { emisor: "otro", hora: "09:15", id: 15, texto: "Hecho. Nos vemos allá.", status: "no-visto" }
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
        phone: "+54 11 4567-1234",
        messages: [
            { emisor: "otro", hora: "12:30", id: 1, texto: "¿Terminaste el deber de Pociones?", status: "visto" },
            { emisor: "yo", hora: "12:35", id: 2, texto: "Sí, lo terminé anoche.", status: "visto" },
            { emisor: "yo", hora: "12:36", id: 3, texto: "Usé referencias del libro de Snape.", status: "visto" },
            { emisor: "otro", hora: "12:37", id: 4, texto: "¿La edición antigua?", status: "visto" },
            { emisor: "yo", hora: "12:40", id: 5, texto: "Sí, tiene notas manuscritas muy interesantes.", status: "visto" },
            { emisor: "otro", hora: "12:45", id: 6, texto: "¿Y Transfiguración?", status: "visto" },
            { emisor: "yo", hora: "12:46", id: 7, texto: "Lo haré esta tarde, ya organicé mi tiempo.", status: "visto" },
            { emisor: "otro", hora: "12:50", id: 8, texto: "Eres increíble, Hermione.", status: "visto" },
            { emisor: "yo", hora: "12:51", id: 9, texto: "Gracias, pero todos pueden si se organizan.", status: "visto" },
            { emisor: "otro", hora: "12:52", id: 10, texto: "¿Podrías ayudarme con Encantamientos?", status: "visto" },
            { emisor: "yo", hora: "13:00", id: 11, texto: "Por supuesto. ¿A las 5 en la biblioteca?", status: "visto" },
            { emisor: "otro", hora: "13:01", id: 12, texto: "Hecho. Llevo las plumas y pergaminos.", status: "visto" },
            { emisor: "yo", hora: "13:10", id: 13, texto: "No olvides las varitas. Practicaremos Lumos.", status: "visto" },
            { emisor: "otro", hora: "13:11", id: 14, texto: "¡Perfecto! Gracias.", status: "visto" },
            { emisor: "yo", hora: "13:15", id: 15, texto: "Nos vemos a la tarde. No llegues tarde.", status: "no-visto" }
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
        phone: "+54 11 6789-4321",
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
        phone: "+54 11 3456-9876",
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
                texto: "No te confíes tanto.",
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
        phone: "+54 11 7890-1234",
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
        phone: "+54 11 1234-5678",
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
        phone: "+54 11 9123-4567",
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
        phone: "+54 11 8345-6789",
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
    },
    {
        id: 12,
        name: 'Albus Dumbledore',
        descripcion: 'Director de Hogwarts',
        avatar: '/images/dumbledore.jpg',
        last_connection: '22:15',
        connection_status: 'online',
        last_message: "22:10",
        phone: "+54 11 7512-3345",
        messages: [
            { emisor: "otro", hora: "20:00", id: 1, texto: "La felicidad puede hallarse hasta en los más oscuros momentos.", status: "visto" },
            { emisor: "yo", hora: "20:05", id: 2, texto: "Siempre que uno recuerde encender la luz, ¿verdad?", status: "visto" },
            { emisor: "otro", hora: "20:10", id: 3, texto: "Exactamente. Tienes buena memoria.", status: "visto" },
            { emisor: "yo", hora: "21:00", id: 4, texto: "¿Qué hacemos con la profecía?", status: "visto" },
            { emisor: "otro", hora: "21:15", id: 5, texto: "Debemos mantenerla segura. Voldemort la busca.", status: "visto" },
            { emisor: "yo", hora: "21:30", id: 6, texto: "Estoy listo para lo que venga.", status: "visto" },
            { emisor: "otro", hora: "22:10", id: 7, texto: "Y yo estaré contigo hasta el final.", status: "no-visto" }
        ]
    },
    {
        id: 13,
        name: 'Rubeus Hagrid',
        descripcion: 'Guardián de las Llaves y los Terrenos',
        avatar: '/images/hagrid.jpg',
        last_connection: '18:45',
        connection_status: 'offline',
        last_message: "18:40",
        phone: "+54 11 7624-8890",
        messages: [
            { emisor: "otro", hora: "16:10", id: 1, texto: "¡Cuidé a un dragón otra vez!", status: "visto" },
            { emisor: "yo", hora: "16:12", id: 2, texto: "¿Hagrid, otra vez con eso?", status: "visto" },
            { emisor: "otro", hora: "16:20", id: 3, texto: "Era un chiquitito, no haría daño a nadie...", status: "visto" },
            { emisor: "yo", hora: "17:00", id: 4, texto: "¿Y cómo está Buckbeak?", status: "visto" },
            { emisor: "otro", hora: "17:05", id: 5, texto: "Volando feliz por los cielos, como siempre.", status: "visto" },
            { emisor: "yo", hora: "18:00", id: 6, texto: "Sos un alma noble, Hagrid.", status: "visto" },
            { emisor: "otro", hora: "18:40", id: 7, texto: "Gracias. Siempre podés contar conmigo, amigo.", status: "no-visto" }
        ]
    },
    {
        id: 14,
        name: 'Lord Voldemort',
        descripcion: 'El que no debe ser nombrado',
        avatar: '/images/voldemort.jpg',
        last_connection: '03:00',
        connection_status: 'online',
        last_message: "02:55",
        phone: "+54 11 7111-6666",
        messages: [
            { emisor: "otro", hora: "01:00", id: 1, texto: "¿Estás listo para servir al Señor Tenebroso?", status: "visto" },
            { emisor: "yo", hora: "01:10", id: 2, texto: "Siempre, mi Lord.", status: "visto" },
            { emisor: "otro", hora: "01:30", id: 3, texto: "Hay traidores en nuestras filas. Ocúpate de ellos.", status: "visto" },
            { emisor: "yo", hora: "01:45", id: 4, texto: "¿Quiénes son?", status: "visto" },
            { emisor: "otro", hora: "02:00", id: 5, texto: "Snape duda. Bella está inquieta.", status: "visto" },
            { emisor: "yo", hora: "02:30", id: 6, texto: "Lo vigilaré de cerca.", status: "visto" },
            { emisor: "otro", hora: "02:55", id: 7, texto: "No falles. Yo no perdono errores.", status: "no-visto" }
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

