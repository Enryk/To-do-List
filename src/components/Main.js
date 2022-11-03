import React, { Component } from "react";
import './Main.css'

export default class Main extends Component {
  state = {
    novatarefa: '',
  };

  handleChange = (event) => {
    this.setState({
      novatarefa: event.target.value,
    });
  }

  render() {
    const { novatarefa } = this.state;

    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>

        <form action="#">
          <input onChange={this.handleChange} type="text" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    )
  }
}
