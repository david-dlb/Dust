
const loadAllAnnouncement = async () => {
    const announcement = await getMyAnnouncement()
    // const name = document.getElementsByClassName("name");
    // for (let i = 0; i < name.length; i++) {
    //     let ele = name[i] 
    //     ele.innerHTML = announcement.announcement[i].name   
    // }
}

const login = document.getElementById("login")

login.addEventListener("submit", async (e) => {
    e.preventDefault()
    const data = {
        name: e.target.name.value,
        password: e.target.password.value
    }

    const token = await loginClient(data)
    localStorage.setItem("token", token.token)
    location.href = "/"
})