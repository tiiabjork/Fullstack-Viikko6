import React from 'react'
import { anecdoteCreation } from './../reducers/anecdoteReducer'
import { notificationCreation, notificationClear } from './../reducers/notificationReducer'
import { connect } from 'react-redux'

class AnecdoteForm extends React.Component {

  handleSubmit = (e) => {
    //Anekdootin lisäys ja ilmoitauksen näyttäminen.
    e.preventDefault()
    const content = e.target.anecdote.value

    this.props.anecdoteCreation(content)
    e.target.anecdote.value = ''

    this.props.notificationCreation(`You created a new anecdote: "${content}"`)
    setTimeout(() => {
      this.props.notificationClear()
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

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes
  }
}

const mapDispatchToProps = {
  anecdoteCreation,
  notificationCreation,
  notificationClear
}

const ConnectedAnecdoteForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteForm)

export default ConnectedAnecdoteForm
