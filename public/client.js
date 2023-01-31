const loadAllAnnouncement = async () => {
    let announcement = await getMyAnnouncement()
    announcement = announcement.announcement
    console.log(announcement)

    const div = document.getElementById("announcements");
    let html = ""
    for (let i = 0; i < announcement.length; i++) {
        html += '<div class="col cursor w-100" data-bs-toggle="modal"'
        html += '   data-bs-target="#EditPublication">' 
        html += '   <div class="card ">'
        html += '       <div class="card-header">'
        html += '           <div class="d-flex justify-content-between">'
        html += '               <div class="d-flex">'
        html += '                   <img src="image/empty.png" alt="" width="30">'
        html += '                   <div class=" ">'
        html += '                       <p class="name">' + announcement[i].name + '</p>'
        html += '                    <p>Hace ' + announcement[i].time +'</p>'
        html += '                   </div>'
        html += '               </div>'
        html += '               <div>'
        html += '                   <img src="image/empty.png" alt="" width="30">'
        html += '               </div>'
        html += '           </div>'
        html += '       </div>'
        html += '       <img src="' + announcement[i].image + '" style="height: 50vh;">'

        html += '       <div class="card-body">'
        html += '           <div class="divider"></div>'
        html += '           <div class="d-flex justify-content-around">'
        html += '               <img src="image/empty.png" alt="" width="30">'
        html += '               <img src="image/empty.png" alt="" width="30">'
        html += '               <img src="image/empty.png" alt="" width="30">'
        html += '               <img src="image/empty.png" alt="" width="30">'
        html += '           </div>'
        html += '       </div>'
        html += '   </div>'
        html += '</div>'
    }
    div.innerHTML = html
}

const editAnnouncement = async (e) => {
    e.preventDefault()
    const data = {
        name: e.target.name.value,
        description: e.target.description.value,
        category: e.target.category.value,
        contact: e.target.contact.value,
        price: e.target.price.value,
        image: e.target.image.value,
        id: 1
    }
    console.log(data)
    const response = await editMyAnnouncement(data)
    console.log(response)
}

const validatePermition = async () => {
    const user = await validateClient() 
    if (user.msg) {
        location.href = "/"
    }
    loadAllAnnouncement()
}

const addAnnouncement = async (e) => {
    e.preventDefault()
    const data = {
        name: e.target.name.value,
        description: e.target.description.value,
        category: e.target.category.value,
        contact: e.target.contact.value,
        price: e.target.price.value,
        image: e.target.image.value
    }
    console.log(data)
    const response = await addMyAnnouncement(data)
    console.log(response)
}

const editAccount = async (e) => {
    e.preventDefault()
    const data = {
        name: e.target.name.value
    }
    console.log(data)
    const response = await editAccountClient(data)
    console.log(response)
}

document.getElementById("create-announcement").addEventListener('submit', addAnnouncement)
document.getElementById("edit-account").addEventListener("submit", editAccount)
document.getElementById("edit-announcement").addEventListener("submit", editAnnouncement)

validatePermition()
//loadAllAnnouncement()