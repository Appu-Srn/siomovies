import React, { Component } from 'react';
import axios from 'axios';
import logo from './NightMovie.jpg';





class Home extends Component {

 
    state = {
        posts: [],
        term: '',
        filter: "",
        history: []
    }
    //lifecycle hooks to load data
    componentDidMount(){
     
                            axios.get('http://www.omdbapi.com/?apikey=c73f1bde&s=avenger')
                            .then(res => {
                                console.log(res)
                                                this.setState({
                                                    posts: res.data.Search.slice(0,10)
                                                });
                            })  
    }

    searchHandler(event){
      this.setState({term: event.target.value})

    }


    findMovie = (e) => {
                    e.preventDefault();
                    console.log("state is ",this.state.term)
                    console.log("history is ",this.state.history)
                    let history =  [...this.state.history,  this.state.term]
                    console.log("holais",history)
                    this.setState({
                      history: history
                    })

                    axios.get(`http://www.omdbapi.com/?apikey=c73f1bde&s=${this.state.term}`)
                    .then(res => 
                    {
                      console.log("res.data.searcjh is", res.data.Search)
                      if(res.data.Search)
                      {
                        console.log("hey")
                        this.setState({
                                posts: res.data.Search.slice(0,10)
                                      });
                      }
                      else{
                            console.log("hai")
                          this.setState({
                                            posts: []
                                        });
                              
                                  }

                                })
  }
    


  findMovie1 = (e) => {
    
console.log("movie1",e)
    axios.get(`http://www.omdbapi.com/?apikey=c73f1bde&s=${e}`)
    .then(res => 
    {
      console.log("res.data.searcjh is", res.data.Search)
      if(res.data.Search)
      {
        console.log("hey")
        this.setState({
                posts: res.data.Search.slice(0,10)
                      });
      }

                })
}








    render (){
      const listItems = this.state.history.slice(Math.max(this.state.history.length - 5, 1)).map((link) =>
      <ul><li >
      <a className="dropdown-item" key={link} onClick={() => { this.findMovie1(link);}}   href="#">{link}</a>
      </li> </ul>
  );
console.log("listing",listItems)




const header = (<nav className="navbar navbar-expand-lg navbar-light bg-light pull-right">
<a className="navbar-brand" href="\">
    <img src={logo} width="50" height="50" alt="" />
  </a>

  <a className="navbar-brand" href="\">SioMovies</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Recent Searches
        </a>
     
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">

          {listItems}

        </div>
   
      </li>
      {/* <li className="nav-item ">
        <a className="nav-link " href='/advanced' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Advanced Search
        </a>
 
      </li> */}


    </ul>

  </div>
</nav>);


                      //use of ternary operator to load data
                      const { filter, posts } = this.state

                      const divStyle = {
                        width: '400px',
                        height: '400px',
                        margin: 'auto',
 
  padding: 'auto'
                        
                      };
                      


                      const postList = posts.length ? (
                          posts.map(post => {
                            return (
                             
                              
                              
                              <div className="post card mb-3"  key={post.imdbID}>

<div className="card text-center mb-3">
  <img style={divStyle} className="card-img-top img-thumbnail" src={post.Poster} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{post.Title}</h5>
  <p className="card-text"><small className="text-muted">Year of release is  {post.Year}</small></p>
  </div>
</div>
<form className="mb-3 " action={'/' + post.imdbID} method="get">
                                  <div className="checkbox">
              
              </div>
              <input className="btn btn-outline-info" type="submit" value="View"></input>
              </form>

</div>



                            )
                          })
                        ) : (
                          <div className="center">No Movies Match the search Query</div>
                        );


                  return(
                    <div>
                    {header} 
                    
                      <div className="container">
                      
                      <form onSubmit={this.findMovie}>



                        <input  className="form-control mt-3" name="term" type="text" onChange={this.searchHandler.bind(this)} />

                        <button className="btn btn-primary mt-2 mb-2">Search</button>
                      </form>

                          <h4>{postList}</h4>
                          </div>
                          </div>
                      
                  )
}
}
export default Home