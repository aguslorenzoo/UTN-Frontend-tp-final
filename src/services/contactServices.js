const contacts = [
    {
        id: 1,
        name: 'Pedro',
        descripcion: 'Solo vives una vez, pero no te olvides de mi',
        avatar: 'https://nupciasmagazine.com/wp-content/uploads/2024/07/la-pantera-rosa-celebra-60-anos.jpg',
        last_connection: '15:23',
        connection_status: 'offline',
        last_message: "19:20",
        messages: [
            {
                emisor: "yo",
                hora: "18:30",
                id: 1,
                texto: "hola, como estas?",
                status: "visto"
            },
            {
                emisor: "otro",
                hora: "19:15",
                id: 2,
                texto: "hola, bien y vos?",
                status: "visto"
            },
            {
                emisor: "yo",
                hora: "19:20",
                id: 3,
                texto: "todo bien",
                status: "visto"
            }
        ]
    },
    {
        id: 2,
        name: 'Juan',
        descripcion: 'rie ama y sueña',
        avatar: 'https://nupciasmagazine.com/wp-content/uploads/2024/07/la-pantera-rosa-celebra-60-anos.jpg',
        last_connection: 'ahora',
        connection_status: 'online',
        last_message: "23:30",
        messages: [
            {
                emisor: "yo",
                hora: "23:20",
                id: 1,
                texto: "HOLAAA",
                status: "visto"
            },
            {
                emisor: "otro",
                hora: "23:25",
                id: 2,
                texto: "hola, bien y vos?",
                status: "visto"
            },
            {
                emisor: "yo",
                hora: "23:30",
                id: 3,
                texto: "todo bien",
                status: "visto"
            }
        ]
    },
    {
        id: 1,
        name: 'Pedro',
        descripcion: 'Solo vives una vez, pero no te olvides de mi',
        avatar: 'https://nupciasmagazine.com/wp-content/uploads/2024/07/la-pantera-rosa-celebra-60-anos.jpg',
        last_connection: '15:23',
        connection_status: 'offline',
        last_message: "19:20",
        messages: [
            {
                emisor: "yo",
                hora: "18:30",
                id: 1,
                texto: "hola, como estas?",
                status: "visto"
            },
            {
                emisor: "otro",
                hora: "19:15",
                id: 2,
                texto: "hola, bien y vos?",
                status: "visto"
            },
            {
                emisor: "yo",
                hora: "19:20",
                id: 3,
                texto: "todo bien",
                status: "visto"
            }
        ]
    },
    {
        id: 2,
        name: 'Juan',
        descripcion: 'rie ama y sueña',
        avatar: 'https://nupciasmagazine.com/wp-content/uploads/2024/07/la-pantera-rosa-celebra-60-anos.jpg',
        last_connection: 'ahora',
        connection_status: 'online',
        last_message: "23:30",
        messages: [
            {
                emisor: "yo",
                hora: "23:20",
                id: 1,
                texto: "HOLAAA",
                status: "visto"
            },
            {
                emisor: "otro",
                hora: "23:25",
                id: 2,
                texto: "hola, bien y vos?",
                status: "visto"
            },
            {
                emisor: "yo",
                hora: "23:30",
                id: 3,
                texto: "todo bien",
                status: "visto"
            }
        ]
    },
    {
        id: 1,
        name: 'Pedro',
        descripcion: 'Solo vives una vez, pero no te olvides de mi',
        avatar: 'https://nupciasmagazine.com/wp-content/uploads/2024/07/la-pantera-rosa-celebra-60-anos.jpg',
        last_connection: '15:23',
        connection_status: 'offline',
        last_message: "19:20",
        messages: [
            {
                emisor: "yo",
                hora: "18:30",
                id: 1,
                texto: "hola, como estas?",
                status: "visto"
            },
            {
                emisor: "otro",
                hora: "19:15",
                id: 2,
                texto: "hola, bien y vos?",
                status: "visto"
            },
            {
                emisor: "yo",
                hora: "19:20",
                id: 3,
                texto: "todo bien",
                status: "visto"
            }
        ]
    },
    {
        id: 2,
        name: 'Juan',
        descripcion: 'rie ama y sueña',
        avatar: 'https://nupciasmagazine.com/wp-content/uploads/2024/07/la-pantera-rosa-celebra-60-anos.jpg',
        last_connection: 'ahora',
        connection_status: 'online',
        last_message: "23:30",
        messages: [
            {
                emisor: "yo",
                hora: "23:20",
                id: 1,
                texto: "HOLAAA",
                status: "visto"
            },
            {
                emisor: "otro",
                hora: "23:25",
                id: 2,
                texto: "hola, bien y vos?",
                status: "visto"
            },
            {
                emisor: "yo",
                hora: "23:30",
                id: 3,
                texto: "todo bien",
                status: "visto"
            }
        ]
    },
    {
        id: 1,
        name: 'Pedro',
        descripcion: 'Solo vives una vez, pero no te olvides de mi',
        avatar: 'https://nupciasmagazine.com/wp-content/uploads/2024/07/la-pantera-rosa-celebra-60-anos.jpg',
        last_connection: '15:23',
        connection_status: 'offline',
        last_message: "19:20",
        messages: [
            {
                emisor: "yo",
                hora: "18:30",
                id: 1,
                texto: "hola, como estas?",
                status: "visto"
            },
            {
                emisor: "otro",
                hora: "19:15",
                id: 2,
                texto: "hola, bien y vos?",
                status: "visto"
            },
            {
                emisor: "yo",
                hora: "19:20",
                id: 3,
                texto: "todo bien",
                status: "visto"
            }
        ]
    },
    {
        id: 2,
        name: 'Juan',
        descripcion: 'rie ama y sueña',
        avatar: 'https://nupciasmagazine.com/wp-content/uploads/2024/07/la-pantera-rosa-celebra-60-anos.jpg',
        last_connection: 'ahora',
        connection_status: 'online',
        last_message: "23:30",
        messages: [
            {
                emisor: "yo",
                hora: "23:20",
                id: 1,
                texto: "HOLAAA",
                status: "visto"
            },
            {
                emisor: "otro",
                hora: "23:25",
                id: 2,
                texto: "hola, bien y vos?",
                status: "visto"
            },
            {
                emisor: "yo",
                hora: "23:30",
                id: 3,
                texto: "todo bien",
                status: "visto"
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

