import React, { Component } from 'react'
import axios from 'axios';

class Post extends Component {

  state = {
    post: null
  }

//lifecycle hooks to load data
componentDidMount(){
    let id = this.props.match.params.post_id;
    console.log(id)
    axios.get('http://www.omdbapi.com/?apikey=c73f1bde&i=' +id)
      .then(res => {
        console.log(res)
        this.setState({
          post: res.data
        });
        // console.log(res.data);
      });
  }




  render() {
    const divStyle = {
      width: '400px',
      height: '500px'
    };


    const post = this.state.post ? (
        <div className="post">

          <div class="card text-center">
  <div class="card-header">
  {this.state.post.Title}
  </div>
  <div class="card-body">
  <img className="card-img-top img-thumbnail" style={divStyle} src={this.state.post.Poster} alt="Card image cap"/>
    <h5 className="card-title">Director: <small>{this.state.post.Director}</small></h5>
    <h6 className="card-text">Actors: <small>{this.state.post.Actors}</small></h6>

    <h6 className="card-text">Awards: <small>{this.state.post.Awards}</small></h6>
    <h6 className="card-text">BoxOffice: <small>{this.state.post.BoxOffice}</small></h6>
    <h6 className="card-text">Country: <small>{this.state.post.Country}</small></h6>
    <h6 className="card-text">Genre: <small>{this.state.post.Genre}</small></h6>
    <h6 className="card-text">Language: <small>{this.state.post.Language}</small></h6>
    <h6 className="card-text">Metascore: <small>{this.state.post.Metascore}</small></h6>
    <h6 className="card-text">Released: <small>{this.state.post.Released}</small></h6>
    <h6 className="card-text">Runtime: <small>{this.state.post.Runtime}</small></h6>
    <h6 className="card-text">Writer: <small>{this.state.post.Writer}</small></h6>
    <h6 className="card-text">imdbRating: <small>{this.state.post.imdbRating}</small></h6>
    


   
  </div>
  <div className="card-footer text-muted">
    <p className="text-center">Plot:</p>
  <h6 className="card-text"> <small>{this.state.post.Plot}</small></h6>
  </div>
</div>

<a href="/" class="btn btn-primary text-center mt-2">Main Page</a>
        </div>
      
      ) : (
        <div className="center">Loading post...</div>
      );



    return (

      <div className="container">

        <h4>{post}</h4>

      </div>
    )
  }
}

export default Post