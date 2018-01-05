import { h, Component } from "preact";

export default class Foo extends Component {
  updateText = e => {
    this.setState({ text: e.target.value });
  };
  render({}, { text }) {
    return <div>

<input value={text} onInput={this.updateText} />
    {text}
    </div>;
  }
}
