import React from 'react'
import {connect} from 'react-redux'
import {filterFunc} from './redux/actions.js'
class Filter extends React.Component{
  render(){
    return <div style={{marginTop: 20}}>
      <a style={{fontWeight: this.props.filter === 'All' ? 'bold' : ''}} 
        onClick={() => this.filterFunc('All')}>ALL</a>{' '}
      <a style={{fontWeight: this.props.filter === 'Done' ? 'bold' : ''}} 
        onClick={() => this.filterFunc('Done')}>DONE</a>{' '}
      <a style={{fontWeight: this.props.filter === 'Undone' ? 'bold' : ''}} onClick={() => this.filterFunc('Undone')}>UNDONE</a>
    </div>
  }
  filterFunc = filterType => {
    this.props.dispatch(filterFunc(filterType))
  }
}
const mapStateToProps = state => {
  return {
    filter: state.filter
  }
}
export default connect(mapStateToProps)(Filter);