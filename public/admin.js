const loadAllClients = async () => {
    const clients = await getAllClients()
    const clientsDiv = document.getElementById("clients");
    console.log(clients.bag)
    let html = ''
    for (let i = 0; i < clients.bag.length; i++) {
        let ele = clients.bag[i]
        const inf = await getClientInformation(ele.id)
        console.log(inf)
        html += '<div class="border border-3 p-3 mt-4" ' + ele.id + '>'
        html += '    <div class="d-flex justify-content-between flex-wrap mb-2">'
        html += '        <p class="h2 name">' + ele.name +'</p>'
        html += '        <button type="button" class="btn btn-primary left" data-bs-toggle="collapse" data-bs-target="#inf' + i +'">'
        html += '            Ver mas'
        html += '        </button>'
        html += '        <button type="button" id="' + ele.id + '" class="edit-button btn btn-primary left" data-bs-toggle="modal"'
        html += '            data-bs-target="#EditClient" >'
        html += '            Editar Datos'
        html += '        </button>'
        html += '    </div>'

        html += '    <div id="inf' + i + '" class="collapse">'
        html += '        <div class="d-flex justify-content-between mt-4">'
        html += '            <span class="text-muted">Cantidad de anuncios</span>'
        html += '            <span class="text-primary">' + inf.bag.cantAnnouncements + '</span>'
        html += '        </div>'
        html += '        <hr>'
        html += '        <div class="d-flex justify-content-between">'
        html += '            <span class="text-muted">Ultima activacion</span>'
        html += '            <span class="text-primary">' + ele.time + '</span>'
        html += '        </div>'
        html += '        <hr>'
        html += '        <div class="d-flex justify-content-between">'
        html += '            <span class="text-muted">Estado</span>'
        html += '            <span class="text-primary">' + ele.status + '</span>'
        html += '        </div>'
        html += '    </div>'
        html += '</div>'
    } 
    clientsDiv.innerHTML = html
    addModalEdit()
}

const validatePermition = async () => {
    const user = await validateClient()
    if (user.msg) {
       location.href = "/"
    } 
    loadAllClients()
}

const newClient = async (e) => {
    e.preventDefault()
    const data = {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value
    }
    console.log(data)
    const client = await addClient(data)
    console.log(client.bag)
}

const editClient = async (e) => {
    e.preventDefault()
    const data = {
        name: e.target.name.value,
        status: e.target.status.value,
        id: e.target.id.value
    }
    console.log(data)
    const client = await editDataClient(data)
    console.log(client)
}

const setModalId = (e) => {
    document.getElementById("id-modal").value = e.srcElement.id
    console.log(document.getElementById("id-modal").value)
}

const addModalEdit = () => { 
    const edit = document.getElementsByClassName("edit-button")
    for (let i = 0; i < edit.length; i++) {
        const element = edit[i];
        edit[i].addEventListener("click", setModalId)
    }
}

document.getElementById("form-new-client").addEventListener("submit", newClient)
document.getElementById("form-edit-client").addEventListener("submit", editClient)

validatePermition()