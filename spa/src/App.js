import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  render() {
    return (
      <div>
        {this.state.posts.map((item, index) => (
          <div key={index}>
            <div className="row">
              <div className="leftcolumn">
                <div className="card">
                  <div classNameName="title">
                    <h1>{item.title.rendered}</h1>
                  </div>
                  <div
                    classNameName="content"
                    dangerouslySetInnerHTML={{ __html: item.content.rendered }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  componentDidMount() {
    return fetch(`https://bastiaanjacobs.nl/wp-json/wp/v2/posts/`)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          posts: responseJson
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
}

export default App;
