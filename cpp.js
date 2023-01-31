const fs = require("fs")
const archivo = 'db.json'

  if(!fs.existsSync(archivo)){
      return null
  }
  const content = fs.readFileSync(archivo, {encoding: 'utf-8'})
  if(content != ""){
    //console.log(content)
  }  