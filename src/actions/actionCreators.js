export function addClient (clientId, firstname, surname, gender) {
    return {
        type: 'ADD_CLIENT',
        clientId,
        firstname,
        surname,
        gender
    }
}

// remove comment

export function removeClient(clientId, i) {
    return {
        type: 'REMOVE_CLIENT',
        i,
        clientId
    }
}