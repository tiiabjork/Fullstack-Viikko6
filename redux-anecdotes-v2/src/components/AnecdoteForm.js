import React from 'react'
import PropTypes from 'prop-types'
import { anecdoteCreation } from './../reducers/anecdoteReducer'
import {notificationCreation, notificationClear} from './../reducers/notificationReducer'

class AnecdoteForm extends React.Component {

  handleSubmit = (e) => {
    //Anekdootin lisäys ja ilmoitauksen näyttäminen.
    e.preventDefault()
    const content = e.target.anecdote.value

    this.props.store.dispatch(
      anecdoteCreation(content)
    )

    e.target.anecdote.value = ''

    this.props.store.dispatch(
      notificationCreation(`You created a new anecdote: "${content}"`)
    )
    setTimeout(() => {
      this.props.store.dispatch(notificationClear())
    }, 5000)

  }
  render() {
    return (
      <div>
        <h2>Create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote'/></div>
          <button>Create</button>
        </form>
      </div>
    )
  }
}

AnecdoteForm.contextTypes = {
  store: PropTypes.object
}

export default AnecdoteForm
