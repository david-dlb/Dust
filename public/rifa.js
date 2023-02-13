const select = document.getElementById("select")

select.addEventListener("submit", async (e) => {
    e.preventDefault()
    const data = {
        name: e.target.name.value,
    }
    console.log(data)
    const res = await getGive(data)
    console.log(res)
    if (res.status != "200") {
        return
    }
    const select = document.getElementById("name")
    const take = document.getElementById("take")
    const reg = document.getElementById("reg")
    select.innerHTML = ""
    take.innerHTML = res.bag
    reg.innerHTML = data.name
    document.getElementById('give').style.display = "block"
})

const integrants = async () => {
    const inn = await getIntegrants()
    console.log(inn.bag)
    const select = document.getElementById("name")
    let html = ""
    for (let i = 0; i < inn.bag.length; i++) {
        const element = inn.bag[i];
        html += ' <option>' + element + '</option>'
    }
    select.innerHTML = html
}
integrants()