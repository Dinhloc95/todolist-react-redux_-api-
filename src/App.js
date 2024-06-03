import React,{Component} from 'react';
import './App.css';
import Menu from './components/menu/menu';
import routes from './routers';
import { Switch,Route, BrowserRouter as Router } from 'react-router-dom';




class App extends Component {
  render(){
    
  return (
    <Router>
    <div className="App">
      
    <Menu/>
      
      <div className="container">
      
        {/*<div className="row">
        <button type="button" className="btn btn-info mb-10 ">Add Product</button>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          
            <ProductList/>
  </div>
      
        
  </div>*/
}

  {this.showContentMenu(routes)}
      
      
    </div>
    </div>
    </Router>
  );

}
showContentMenu=(routes)=>{
  var result = null;
  if (routes.length > 0 ){
    result = routes.map((route,index)=>{
return <Route
key={index} path={route.path} exact={route.exact} component = {route.main}
/>

    });
  }

  return <Switch>
  {result}
  </Switch>

}
}

export default App;
