import { useEffect, useState } from "react"

import function App()

  [imagem, setImagem] = useState()


useEffect( ()=> {
  getImagem()
}, [])

const getImagem = async () => {

  const resposta = await fetch ("https://dog.ceo/api/breeds/image/random")

  const data = await resposta.json()

  setImagem(data)

}

  return (
    <div className="App">
    
    { //typeof(imagem) == 'undefined' ?
  <Loade></Loade>

     // :

  //<img src={"data.nome"} alt="" />
  }
    
      </div>

      )
}
export default App 
