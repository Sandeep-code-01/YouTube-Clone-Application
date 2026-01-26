import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import { Provider } from "react-redux";
import store from "./Utils/store";

function App() {
  return (
    <Provider store={store}>
        {/* Main content */}
        <div className="flex-1 flex flex-col">
          <Header />
          <Body />
          
          </div>
    </Provider>
  );
}

export default App;
