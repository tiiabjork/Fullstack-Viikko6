
const filterReducer = (store = 'ALL', action) => {
    switch (action.type) {
    case 'SET_FILTER':
      return action.filter

    default:
      return store
  }
}

export const filterChange = (filter) => {
  return {
    type: 'SET_FILTER',
    filter
  }
}

export default filterReducer


/* Filterin arvon asettavat actionit ovat muotoa:
{
  type: 'SET_FILTER',
  filter: 'IMPORTANT'
}
*/
