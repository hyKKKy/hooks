import logo from './logo.svg';
import './App.css';
import { Restaurant } from './restaurant';
import { Login } from './login';


function App() {
  return (
    <div className='main'>
      {/* <Restaurant name="qeqwe" address="Str.asdqwdq" rating="10" type="Japanesse"></Restaurant> */}
      <Login></Login>
    </div>
  );
}

export default App;
