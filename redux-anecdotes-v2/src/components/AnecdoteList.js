import React from 'react'
import { notificationCreation, notificationClear } from './../reducers/notificationReducer'
import { anecdoteVote } from './../reducers/anecdoteReducer'
import Filter from './Filter'
import { connect } from 'react-redux'

class AnecdoteList extends React.Component {

  voted = (anecdote) => () => {
    //Anekdootin äänetys ja ilmoituksen näyttäminen.
    this.props.anecdoteVote(anecdote.id)

    this.props.notificationCreation(`You voted "${anecdote.content}"`)
    setTimeout(() => {
      this.props.notificationClear()
    }, 5000)
  }


  render() {
    return (
      <div>
        <h2>Anecdotes</h2>

        <Filter store={this.props.store} />

        {this.props.anecdotesToShow.sort((a, b) => b.votes - a.votes).map(anecdote =>
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

const anecdotesToShow = (anecdotes, filtter) => {
  if (filtter === 'ALL') {
    return anecdotes
  }
  return anecdotes.filter(a => a.content.includes(filtter))
}

const mapStateToProps = (state) => {
  return {
    anecdotesToShow: anecdotesToShow(state.anecdotes, state.filter)
  }
}

const mapDispatchProps = {
  notificationCreation,
  notificationClear,
  anecdoteVote
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchProps
)(AnecdoteList)

export default ConnectedAnecdoteList
