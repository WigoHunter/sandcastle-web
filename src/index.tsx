import ReactDOM from "react-dom";
import "./styles/index.css";
import createRoutes from "./createRoutes";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(createRoutes(), document.getElementById("root"));

serviceWorker.register();
