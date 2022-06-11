import logo from "./images/logo.png";
import './styles/Loading.css';

function Loading() {
  return (
    <section>
      <img src={logo} alt="loading"  className="loading"/>
    </section>
  );
}

export default Loading;
