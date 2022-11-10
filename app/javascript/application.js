import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from "./components/App";
import store from "./components/redux/configureStore";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
);

// import _ from 'lodash';
// import "./controllers";
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import App from "./components/App";
// import store from "./components/redux/configureStore";
// import SideNav from "./components/shared/side_nav";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );
