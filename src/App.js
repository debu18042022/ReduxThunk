import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./Store";
import ClickApi from "./ClickApi";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ClickApi />
      </div>
    </Provider>
  );
}

export default App;
