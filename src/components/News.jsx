import React, { Component } from 'react';
import Newsitem from './Newsitem';
import Spinner from './spinner'; // Import your custom spinner component
//import InfiniteScroll from "react-infinite-scroll-component";
import propTypes from'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {

 static defaultProps = {
        q:"Technology",
        pagesize:20,
        
   }

   static propTypes ={
        q: propTypes.string,
        pagesize:propTypes.number,
       

   }
        
        
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0

    };
  }
     async updateNews(){
      const url =`https://newsapi.org/v2/everything?q=${this.props.q}&apiKey=8438af28f9244044a58dc826ee1fc3e7&page=${this.state.page}&pagesize=${this.props.pagesize}`; 
    let data = await fetch(url);
    this.setState({ loading: true });
    let parseData = await data.json();
    console.log(parseData.totalResults);
    
    
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
    

       }

       

       
 
  async componentDidMount() {
  
  //  let url =`https://newsapi.org/v2/everything?q=${this.props.q}&apiKey=8438af28f9244044a58dc826ee1fc3e7&page=${this.state.page}&pagesize=${this.props.pagesize}&totalResult=${this.props.totalResults}`; 
  //  this.setState({ loading: true });
  //   let data = await fetch(url);
  //   let parseData = await data.json();
  //   this.setState({
  //     articles: parseData.articles,
  //     totalResults: parseData.totalResults,
  //     loading: false,
  //   });
    
    
     this.updateNews();
  }

  handleprevclick = async () => {
   
  //   let url =`https://newsapi.org/v2/everything?q=${this.props.q}&apiKey=8438af28f9244044a58dc826ee1fc3e7&page=${this.state.page}&pagesize=${this.props.pagesize}&totalResult=${this.props.totalResults}`; 
  //   let data = await fetch(url);
  //   let parseData = await data.json();
  //  this.setState({ loading: true });
  //   this.setState({
  //     page: this.state.page - 1,
  //     articles: parseData.articles,
  //     loading: false,
  //   });
    
  

    this.setState({page: this.state.page - 1})
   this.updateNews();
  };

  handlenextclick = async () => {
    // if (! this.state.page + 1 > Math.ceil(this.state.totalResults /this.props.pagesize)) {
      
    // } else {
      
    //  let url = `https://newsapi.org/v2/everything?q=${this.props.q}&apiKey=de33ea3d435f4653b8083d8528b4f8be&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
    //  this.setState({ loading: true });
    //  let data = await fetch(url);
    //   let parseData = await data.json();
    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parseData.articles,
    //    loading: false,
    //   });
    // }
      
      

   this.setState({page:this.state.page + 1 })
      this.updateNews();
  };

  


  fetchMoreData = async() =>{
    this.setState({page: this.state.page +1})
    let url = `https://newsapi.org/v2/everything?q=${this.props.q}&apiKey=de33ea3d435f4653b8083d8528b4f8be&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
    this.setState({loading :true})
    let data = await fetch(url); 
    let parseData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults:parseData.totalResults,
      loading:false
    })
  }





 


  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center " style={{margin: '30px 0px'}} >NEWS APP TOP HEADLINES</h2>
    
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}    // this.state.totalResults
          loader={<Spinner/>}
        >
        {/* {this.state.loading && <Spinner />}*/}
        {/* !this.state.loading&& */}
        <div className="container">
        <div className="row">

          {this.state.articles.map((element) => (
              <div className="col md-4" key={element.url}>
                <Newsitem title={element.title  }description={element.description} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date = {element.publishedAt} source= {element.source.name}/>
              </div>
            ))}



        </div>

        </div>
        </InfiniteScroll>
       {/* </InfiniteScroll> */}
        

        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1}className="btn btn-dark" onClick={this.handleprevclick}>
            &larr; Previous
          </button>
           <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults /this.props.pagesize)} type ="button"className="btn btn-dark"onClick={this.handlenextclick}>
             Next &rarr;
          </button> 
 
        </div> */}
      </div>
    );
  }
}
