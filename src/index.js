import React from "react";
import ReactDOM from "react-dom";

import './index.css';
import App from './App';
import { Contextprovider } from './contexts/contextProvider';

ReactDOM.render(
<Contextprovider>
   <App /> 
</Contextprovider>,
 document.getElementById('root'));