import { h, Component } from "preact";
import "./App.css";

const Link = ({ url }) => <a href={url}>{url}</a>;

export default class App extends Component {
  render() {
    return (
      <div>
        <Link url="/hhh" />
        <h1>Hello World 📦 🚀</h1>
      </div>
    );
  }
}
