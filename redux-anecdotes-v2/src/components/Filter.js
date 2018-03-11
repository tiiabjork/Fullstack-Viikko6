import React from 'react'
import { filterChange } from './../reducers/filterReducer'
import { connect } from 'react-redux'

class Filter extends React.Component {

  handleChange = (event) => {
    const filter = event.target.value
    this.props.filterChange(filter)
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

const mapStateToProps = (state) => {
  return {
    filter: state.filter
  }
}

const mapDispatchToProps = {
  filterChange
}

const ConnectedFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)

export default ConnectedFilter
