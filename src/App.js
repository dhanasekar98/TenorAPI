import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import Header from './Components/Header';
import SearchContainer from './Components/Search';
import React ,{ useState} from 'react';

function App() {
  const [text,setText] = useState('');
  const handleChange = (event) => {
    const { name ,value } = event.target;
    setText(value);
  }
  return (
    <div>
      <Header/>
      <SearchContainer/>
    </div>
  );
}

export default App;
