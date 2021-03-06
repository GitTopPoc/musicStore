import React from "react";
import {Switch, Route} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import InstrumentList from "./components/InstrumentList";
import RecordList from "./components/RecordList";
import AccessoriesList from "./components/AccessoriesList";
import Details from "./components/Details";
import Cart from "./components/Cart/Cart";
import Error from "./components/Error";
import Modal from './components/Modal';
import Footer from "./components/Footer/Footer";
import style from "./components/Footer/style.module.css"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import axios from "axios";


const instance = axios.create({
    baseURL: 'http://localhost:5000/api',

})

function App() {
    const itemsAPI = {

        async getItems() {

             try {
                 return instance.get('/items/get-items')
             } catch (e) {console.log(e)}

        }
    }

    itemsAPI.getItems();
    const firebaseConfig = {
        apiKey: "AIzaSyBotBYBI7CqvLtEFgWJp0Qp15bx_bV9Eik",
        authDomain: "music-store-ae8ca.firebaseapp.com",
        projectId: "music-store-ae8ca",
        storageBucket: "music-store-ae8ca.appspot.com",
        messagingSenderId: "997050763561",
        appId: "1:997050763561:web:753f491ee89a8675b9cf38",
        measurementId: "G-RQQN4DQSCB"
    };

    

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    return (
        <React.Fragment>
            <Navbar/>
           <div className={style.main_content}>
               <Switch>
                   <Route path="/" exact component={InstrumentList}/>
                   <Route path="/records" component={RecordList}/>
                   <Route path="/accessories" component={AccessoriesList}/>
                   <Route path="/details" component={Details}/>
                   <Route path="/cart" component={Cart}/>
                   <Route component={Error}/>
               </Switch>
           </div>
            <Footer/>
            <Modal/>
        </React.Fragment>
    );
}

export default App;
