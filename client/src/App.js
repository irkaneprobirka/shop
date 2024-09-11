import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Layout } from "./components/HOC/Layout";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Layout>
          <AppRouter />
        </Layout>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
