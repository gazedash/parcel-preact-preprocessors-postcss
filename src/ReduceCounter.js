import { h, Component } from "preact";

const reducer = (state = 0, action = null) => {
  console.log(state, action);

  switch (action) {
    case "INC":
      console.log(state + 1);

      return state + 1;
    case "DEC":
      return state - 1;
    default:
      return state;
  }
};

export default class ReduceCounter extends Component {
  state = { count: reducer() };
  update = action =>
    this.setState(state => ({ count: reducer(state.count, action) }));
  render(_, { count }) {
    return (
      <div>
        <button onClick={() => this.update("INC")}>Inc</button>
        <button onClick={() => this.update("DEC")}>Dec</button>
        {`${count}`}
      </div>
    );
  }
}
