import {Route, Switch } from 'react-router-dom';
import Home from './containers/Home';  //to import the home page
import Blog from './containers/Blog';  //to import the blog page


function App() {
  return (
    <main>
             <Switch>                      
             {/*  using Switch and route to render differnt page according to url */ }
            <Route path="/" exact component={Home} />
            <Route path="/blog/:blogId/:userId" component={Blog} />
            </Switch>
        </main>
  );
}

export default App;
