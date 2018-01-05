import { h, Component } from "preact";
import ReduceCounter from "./ReduceCounter";
import "./App.css";
import SimpleInput from "./SimpleInput";

const Link = ({ url }) => <a href={url}>{url}</a>;

export default class App extends Component {
  render() {
    return (
      <div>
        <Link url="/hhh" />
        <h1>Hello!11231 World 📦 🚀</h1>
        <ReduceCounter />
        <SimpleInput />
      </div>
    );
  }
}
