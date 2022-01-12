import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";

function App() {
  return (
      <div>
          <div className={'d-flex'}>
              <Users/>
              <Posts/>
          </div>
          <Comments/>
      </div>
  )
}

export default App;
