import React from "react";

import Router from "./components/navigation/Router";

import Amplify from "aws-amplify";
import config from './aws-exports'
import { Provider } from "react-redux";
import { store } from "./redux/store/store";



Amplify.configure(config);

const App = () => {
         // Provider component makes the Redux store available to any nested components that need to access the Redux store.
 
    return <Provider store ={store} ><Router /></Provider>
        
    

}


export default App;
