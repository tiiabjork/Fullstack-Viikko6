import React from 'react'
import { filterChange } from './../reducers/filterReducer'

class Filter extends React.Component {
  
  handleChange = (event) => {
    const filter = event.target.value
    this.props.store.dispatch(filterChange(filter))
  }

  render() {
    const style = {
      marginBottom: 10
    }

    return (
      <div style={style}>
        Filter <input onChange={this.handleChange}/>
      </div>
    )
  }
}

export default Filter
