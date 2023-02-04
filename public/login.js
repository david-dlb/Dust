const login = document.getElementById("login")

login.addEventListener("submit", async (e) => {
    e.preventDefault()
    const data = {
        name: e.target.name.value,
        password: e.target.password.value
    }

    const token = await loginClient(data)
    console.log(token.bag)
    localStorage.setItem("token", token.bag)
    location.href = "/"
})