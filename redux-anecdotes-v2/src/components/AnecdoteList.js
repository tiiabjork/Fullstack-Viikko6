import React from 'react'
import PropTypes from 'prop-types'
import { notificationCreation, notificationClear } from './../reducers/notificationReducer'
import Filter from './Filter'

class AnecdoteList extends React.Component {

  voted = (anecdote) => () => {
    //Anekdootin äänetys ja ilmoituksen näyttäminen.
    this.props.store.dispatch({ type: 'VOTE', id: anecdote.id })

    this.props.store.dispatch(
      notificationCreation(`You voted "${anecdote.content}"`)
    )
    setTimeout(() => {
      this.props.store.dispatch(notificationClear())
    }, 5000)
  }


  render() {
    const anecdotes = this.props.store.getState().anecdotes
    const filter = this.props.store.getState().filter

    const anecdotesToShow = () => {
      if (filter === 'ALL') {
        return anecdotes
      }
      return anecdotes.filter(a => a.content.includes(filter))
    }

    return (
      <div>
        <h2>Anecdotes</h2>

        <Filter store={this.props.store} />

        {anecdotesToShow().sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={this.voted(anecdote)}>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

AnecdoteList.propTypes = {
  store: PropTypes.object
}

export default AnecdoteList
