
const load = async () => {
    let ann = await getAllAnnouncement()
    ann = ann.announcements
    const div = document.getElementById("announcements")
    let html = ""
    for (let i = 0; i < ann.length; i++) {
        const element = ann[i];
        html += '<div class="col cursor w-100" data-bs-toggle="modal"'
        html += '   data-bs-target="#EditPublication">' 
        html += '   <div class="card ">'
        html += '       <div class="card-header">'
        html += '           <div class="d-flex justify-content-between">'
        html += '               <div class="d-flex">'
        html += '                   <img src="image/empty.png" alt="" width="30">'
        html += '                   <div class=" ">'
        html += '                       <p class="name">' + element.name + '</p>'
        html += '                    <p>Hace ' + element.time +'</p>'
        html += '                   </div>'
        html += '               </div>'
        html += '               <div>'
        html += '                   <img src="image/empty.png" alt="" width="30">'
        html += '               </div>'
        html += '           </div>'
        html += '       </div>'
        html += '       <img src="' + element.image + '" style="height: 50vh;">'

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
const validateUser = async () => {
    const user = await validateClient()
    if (!user.msg) {
        document.getElementById("to-login").innerHTML = ""
        document.getElementById("account").style.display = "block"
    }
}

load()
validateUser()

//console.log(localStorage.getItem("token"))