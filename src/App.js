import { h, Component } from "preact";
import ReduceCounter from "./ReduceCounter";
// test css modules
import styles from "./App.css";
import lessStyles from "./index.less";
import stylStyles from "./index.styl";
import SimpleInput from "./SimpleInput";
import LinkedStateSimpleInput from "./LinkedStateSimpleInput";

const Link = ({ url }) => <a href={url}>{url}</a>;

export default class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Link url="/hhh" />
        <div className={lessStyles.box}>
          Hello!11231 World 📦 🚀 <div>21334</div>
        </div>
        <a className={stylStyles.button}>1</a>
        <ReduceCounter />
        <SimpleInput />
        <LinkedStateSimpleInput />
      </div>
    );
  }
}
