import React from 'react';
import BookList from './comp/BookList/BookList';
import FilterOptions from './comp/FilterOptions/FilterOptions';
import './App.css';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      results:[]
    };
  }

  fetchResults(params) {
    let filter=params.filter==='all'?'':"&filter="+params.filter
    console.log("https://www.googleapis.com/books/v1/volumes?q="+params.search+filter+"&printType="+params.type);
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch("https://www.googleapis.com/books/v1/volumes?q="+params.search+filter+"&printType="+params.type, requestOptions)
      .then(res=>{
        if(!res.ok){
          throw new Error(res.message)
        };
        return res;
      })
      .then(response => response.json())
      //.then(result => console.log(result))
      .then(result => this.mapResults(result))
      .catch(error => console.log('error', error));
  }
  mapResults(res){
    let array = res.items.map(item=>{
      function priceCounter(item) {
        if (item.saleInfo.saleability === 'FREE') {
          return 'Free'
        } else if (item.saleInfo.saleability === 'NOT_FOR_SALE') {
          return 'Not for sale'
        } else {
         return "$"+item.saleInfo.listPrice.amount
        }
      }
      let price = priceCounter(item);
      let singleItem = {
        title:item.volumeInfo.title, 
        author:item.volumeInfo.authors,
        price: price,
        description:item.volumeInfo.description,
        img: item.volumeInfo.imageLinks.thumbnail
      };
      return singleItem;
    })
    this.setResults(array);
  }
  setResults(arr){
    this.setState({results: arr});
    console.log(this.state.results)
  }
  
  render(){
  return (
    <div>
      <header>
          <h1>Google Book Search</h1>
        </header>
      <main>
        <FilterOptions handleSearch={(params)=>this.fetchResults(params)}/>
        <BookList results={this.state.results}/>
      </main>
    </div>
  );
  }
}

export default App;
