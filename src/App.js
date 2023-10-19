import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Details } from "./components/Details";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Details />
    </Provider>
  );
}

export default App;
