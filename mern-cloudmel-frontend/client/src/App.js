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
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
// import './styles.less';

function App() {
  return (
    <div className="App">
      {/* <h1>Mern CloudMel</h1> */}
      <Navbar></Navbar>
    </div>
  );
}

export default App;
