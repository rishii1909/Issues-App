import logo from './logo.svg';
import './App.css';
import 'semantic-ui-less/semantic.less'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Downloaded, Header, Home, Profile } from "./components";
// Primary color : #017F3F


function App() {
  
  return (
    <div className="App">
      <Router>
        <Header logo={logo}/>
        <div className='App-Container'>
        
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/profile" exact component={() => <Profile />} />
        </Switch>
        </div>
      </Router>
      
    </div>
  );
}
 
function ShowcaseApp(){
  return(
    <div className="App">
      <Router>
        <Header logo={logo}/>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/profile" exact component={() => <Downloaded />} />
        </Switch>
      </Router>
    </div>
  )
}
export default App;
export const views = ShowcaseApp()
