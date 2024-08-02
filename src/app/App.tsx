import {Route, Routes} from "react-router-dom";
import {routeConfig} from "./router/routerConfig";
import "./styles/index.scss";
import { TrainPage } from "../page/TrainPage";

function App() {
  return (
    // <TrainPage/>
    <Routes>
      {Object.values(routeConfig).map(({path, element}) => (
        <Route element={element} path={path} key={path} />
      ))}
    </Routes>
  );
}

export default App;
