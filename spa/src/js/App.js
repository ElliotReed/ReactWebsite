import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      url: "https://demo.wp-api.org/wp-json/wp/v2"
    };
  }

  render() {
    return (
      <ul className="posts post__list">
        {this.state.posts.map((item, index) => (
          <li className="post post__list-item" key={index}>
            <div className="card">
              <div className="title">
                <span>{item.title.rendered}</span>
              </div>
              <div
                className="hidden content"
                dangerouslySetInnerHTML={{ __html: item.content.rendered }}
              />
            </div>
          </li>
        ))}
      </ul>
    );
  }

  async componentDidMount() {
    var request = new Request(this.state.url + "/posts");
    return fetch(request)
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
