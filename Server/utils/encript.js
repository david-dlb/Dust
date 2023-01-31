const m = 10007, base = 97
const h = [0]
const p = [1]
const sum = (a, b) => ((a + b) % m)
const res = (a, b) => ((a + m - b) % m)
const mul = (a, b) => (((a % m) * (b % m)) % m)

const encriptMyHash = (text) => {
    for (let i = 1; i < text.length; i++) {
        h.push(0)
        p.push(0)
        h[i] = sum(mul(h[i - 1], base), text.charCodeAt(i) - 97)
        p[i] = mul(p[i - 1], base)
        console.log(h[i], p[i])
    }
    return (res(h[text.length - 1], mul(h[1 - 1], p[text.length - 1 - 1 + 1])))
}
const compareEncript = (cript, text) => {
    return true ? cript == encript(text) : false
}

const encript = (name, pass) => {
    const crypto = require('crypto')
    return crypto.createHmac('sha1', name).update(pass).digest('hex')
}


module.exports = {
    encript,
    compareEncript
}