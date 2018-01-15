import { h, Component } from "preact";
import linkState from "linkstate";

export default class LinkedStateSimpleInput extends Component {
  render({}, { text }) {
    return (
      <div>
        <input value={text} onInput={linkState(this, "text")} />
        {text}
      </div>
    );
  }
}
