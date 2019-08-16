import React from 'react'
import Comentario from '../componentes/comentario/Comentario'
import { getComentarios } from '../service/base'
//Importe de estilo
import './chat.css'

export default class Chat extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      comentarios: undefined
    }
  }

  componentDidMount() {
    setTimeout(getComentarios()
    .then(response => {
      console.log(response)
      this.setState({
        comentarios: response.data
      })
    })
    .catch(error => {
      console.error(error)
    }), 5000)
  }

  render() {
    return (
      <div className='chat'>
        {
          this.state.comentarios 
          ? this.state.comentarios.map((item, index) => 
              <Comentario comentario={item} key={index+'comentario'}/>)
          : <span>Carregando comentários :D</span>
        }
      </div>
    )
  }
}