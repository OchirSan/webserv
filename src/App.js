import React from 'react';
import Loader from './Loader/Loader';
import Table from './Table/Table';
import _ from 'lodash';
import DetailRowView from './DetailRowView/DetailRowView';
 
 
class App extends React.Component{
  state ={
    isLoading: true,
    data: [],
    sort: 'asc',
    sortField: 'id',
    row: null,
  }
  async componentDidMount(){
    const response = await fetch('http://localhost:8080/api/v1/orders')
    const data = await response.json()
    this.setState({
      isLoading: false,
      data: _.orderBy(data, this.state.sortField, this.state.sort)
    })
  }
  onSort = sortField => {
   
    const cloneData = this.state.data.concat();
    const sortType = this.state.sort === 'asc' ? 'desc' : 'asc';
    const orderedData = _.orderBy(cloneData, sortField, sortType);
 
    this.setState({
      data: orderedData,
      sort: sortType,
      sortField
    })
  }
 
  onRowSelect = row =>(
    this.setState({
      row
    })
  )
 
  render(){
    return(
      <div className="container">
       {
         this.state.isLoading
         ? <Loader />
         : <Table
         data={this.state.data}
         onSort={this.onSort}
         sort={this.state.sort}
         sortField={this.state.sortField}
         onRowSelect={this.onRowSelect}
         />
       }
       {
        this.state.row
        ? <DetailRowView order={this.state.row} />
        : null
      }
      <form method="LINK" action="http://localhost:8080/xmldoc">
        <input type="submit" value="Get xml">
        </input>
      </form>
      </div>
    )
  }
}
export default App
