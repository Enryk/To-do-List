import React, { Component } from "react";

// Form
import { FaPlus } from 'react-icons/fa';

// Tarefas
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {
  state = {
    novatarefa: '',
    tarefas: [
      'Fazer café',
      'Beber água',
      'Estudar',
    ]
  };

  handleChange = (event) => {
    this.setState({
      novatarefa: event.target.value,
    });
  }

  render() {
    const { novatarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>

        <form action="#" className="form">
          <input
            onChange={this.handleChange}
            type="text"
            value={novatarefa}
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map((tarefa) => (
            <li key={tarefa}>
              {tarefa}
              <div>
              <FaEdit className="edit" />
              <FaWindowClose className="delete" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
