import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "mobx-react";

function App() {
  return (
    // <Provider store={store}>
    //   <BrowserRouter>
    //     <Header />
    //     <Switch>
    //       <Route exact={true} path="/">
    //         <Home store={store} />
    //       </Route>
    //       <Route path="/about" component={About} />
    //       <Route path="/order" component={Order} />
    //       <Route path="/contacts" component={Contacts} />
    //     </Switch>
    //   </BrowserRouter>
    // </Provider>

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
