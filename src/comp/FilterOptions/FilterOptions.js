import React from 'react';

class FilterOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {search: '',type: 'all',filter: 'all',};
    
      }
    
      searchChange(event) {
        this.setState({search: event.target.value});
      }
      typeChange(event) {
        this.setState({type: event.target.value});
      }
      filterChange(event) {
        this.setState({filter: event.target.value});
      }
      handleSubmit(event) {
        var searchParams = this.state;
        this.props.handleSearch(searchParams);
        event.preventDefault();
      }

    render(){
    return (
        <div className="filter_options">
            <form onSubmit={(e)=>this.handleSubmit(e)}>
                <label htmlFor="search">Search</label>
                <input type="text" value={this.state.value} onChange={(e)=>this.searchChange(e)} />
                <button type="submit" >Search</button>
            </form>
            <form>
                <label htmlFor="type">Type</label>
                <select value={this.state.type} onChange={(e)=>this.typeChange(e)}>
                    <option value="all">All</option>
                    <option value="books">Books</option>
                    <option value="magazines">Magazines</option>
                </select>
            </form>
            <form>
            <label htmlFor="filter">Filter</label>
                <select value={this.state.filter} onChange={(e)=>this.filterChange(e)}>
                    <option value="all">All</option>
                    <option value="paid-ebooks">Paid</option>
                    <option value="free-ebooks">Free</option>
                </select>
            </form>
        </div>
    )
}
}

export default FilterOptions