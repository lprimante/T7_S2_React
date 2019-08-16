import React, { useState, useEffect } from 'react'
import Comentario from '../componentes/comentario/Comentario'
import { getComentarios } from '../service/base'
//Importe de estilo
import './chat.css'

function Chat() {
  const [ comentarios, setComentarios ] = useState(undefined)

  function handleStatusChange(comentarios){
    setComentarios(comentarios)
  } 
    
  useEffect(() => {
    setTimeout(getComentarios()
    .then(response => {
      console.log(response)
      handleStatusChange(response.data)
    })
    .catch(error => {
      console.error(error)
    }), 5000)
  })

  return (
    <div className='chat'>
      {
        comentarios 
        ? comentarios.map((item, index) => 
            <Comentario comentario={item} key={index+'comentario'}/>)
        : <span>Carregando comentários :D</span>
      }
    </div>
  )
}

export default Chat