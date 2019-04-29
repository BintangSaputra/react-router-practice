import React from "react";
import axios from "axios";

const API_STRING = `https://api.github.com/users/bintangsaputra`;

class GitHub extends React.Component {
  state = {
    profile: {}
  };

  componentDidMount() {
    axios.get(API_STRING).then(res => {
      const profile = res.data;
      this.setState({ profile });
      console.log(profile);
    });
  }

  render() {
    return (
      <div>
        <img src={this.state.profile.avatar_url} alt="" />;
        <table>
          <tbody>
            <tr>
              <td>username</td>
              <td>url</td>
            </tr>
            <tr>
              <td>{this.state.profile.login}</td>
              <td>{this.state.profile.html_url}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default GitHub;
