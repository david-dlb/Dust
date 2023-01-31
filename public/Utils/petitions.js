const getAllClients = async (data) => {
    const response = await fetch(`/api/admin`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'token': localStorage.getItem('token') }
    })
    return await response.json();
}

const getClientInformation = async (id) => {
    const response = await fetch(`/api/admin/information/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'token': localStorage.getItem('token') }
    })
    return await response.json();
}

const addClient = async (data) => {
    const response = await fetch(`/api/admin/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'token': localStorage.getItem('token') },
        body: JSON.stringify(data)
    })
    return await response.json();
}

const editDataClient = async (data) => {
    const response = await fetch(`/api/admin/edit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'token': localStorage.getItem('token') },
        body: JSON.stringify(data)
    })
    return await response.json();
}

const getMyAnnouncement = async (data) => {
    const response = await fetch(`/api/client`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'token': localStorage.getItem('token') }
    })
    return await response.json();
}


const addMyAnnouncement = async (data) => {
    const response = await fetch(`/api/client/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'token': localStorage.getItem('token') },
        body: JSON.stringify(data)
    })
    return await response.json();
}

const editMyAnnouncement = async (data) => {
    const response = await fetch(`/api/client/edit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'token': localStorage.getItem('token') },
        body: JSON.stringify(data)
    })
    return await response.json();
}


const editAccountClient = async (data) => {
    const response = await fetch(`/api/client/editAccount`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'token': localStorage.getItem('token') },
        body: JSON.stringify(data)
    })
    return await response.json();
}


const getAllAnnouncement = async () => {
    const response = await fetch(`/api/user`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
    return await response.json();
}

const loginClient = async (data) => {
    const response = await fetch(`/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    return await response.json();
}

const validateClient = async () => {
    const response = await fetch(`/api/auth`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'token': localStorage.getItem('token') }
    })
    return await response.json();
}