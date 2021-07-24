/*
 * @Author: G.F
 * @Date: 2021-07-24 00:08:10
 * @LastEditTime: 2021-07-24 00:14:33
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /MERN-Full-Stack/mern-cloudmel-frontend/client/src/App.js
 */
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Productdes from './screens/Productdes';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <BrowserRouter>
        <Route path="/" component={Homescreen} exact/>
        <Route path="/product/:id" component={Productdes}/>
      </BrowserRouter>
      {/* <Homescreen/> */}
    </div>
  );
}

export default App;
