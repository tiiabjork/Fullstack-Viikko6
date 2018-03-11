const notificationAtStart = 'Welcome to use Programming anecdotes!'

const notificationReducer = (store = notificationAtStart, action) => {
  switch (action.type) {
    case 'NEW':
      store = action.content
      return store

    case 'CLEAR':
      store = ''
      return store

    default:
      return store
  }
}

export const notificationCreation = (content) => {
  return {
    type: 'NEW',
    content
  }
}

export const notificationClear = () => {
  return {
    type: 'CLEAR'
  }
}

export default notificationReducer
