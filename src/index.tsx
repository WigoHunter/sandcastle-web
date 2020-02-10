import ReactDOM from "react-dom";
import "./index.css";
import createRoutes from "./routes";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(createRoutes(), document.getElementById("root"));

serviceWorker.register();
