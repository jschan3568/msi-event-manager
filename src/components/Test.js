import React, { Component } from "react";
import Axios from "axios";

export default class Test extends Component {
  state = {
    image: null
  };

  onChange = e => {
    switch (e.target.name) {
      case "image":
        this.setState({ image: e.target.files[0] });
        break;

      default:
        this.setState({ [e.target.name]: e.target.value });
    }
  };

  onSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    data.append("imgFile", this.state.image);
    console.log(data);

    Axios.post("http://localhost:5000/event/test", data);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input onChange={this.onChange} type="file" name="image" />
          <button>upload</button>
        </form>
      </div>
    );
  }
}
