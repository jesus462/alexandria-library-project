import React from 'react';
import ReactDOM from 'react-dom';

//style for the whole app
import "../style/index.scss";

//import your own components
import Layout from "./Layout";
//render your react application
ReactDOM.render(<Layout />, document.querySelector("#root"));