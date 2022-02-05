import logo from "../logo.svg";
import "./Title.css";

const title = ({ title }) => (
  <div className="title">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="d-block-xl my-4">{title}</h1>
  </div>
);

export default title;
