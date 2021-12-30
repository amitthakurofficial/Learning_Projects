import logo from './logo.svg';
import './App.css';
import Post from './components/Post'
import  Postform  from "./components/Postform";
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Postform></Postform>
      <Post></Post>
    </Provider>
  );
}

export default App;
