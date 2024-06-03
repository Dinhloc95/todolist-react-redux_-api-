import React,{Component} from 'react';
import {Route,Link} from 'react-router-dom';

const Menus =[
  {
  name:'HomePage',
  to:'/',
  exact:true
  },
  {
      name:'Product Management',
      to:'/product-list',
      exact:false
  }


];


const MenuLink = ({label,to, activeOnlyWhenExact, index})=>{
  return (
    <Route path ={to} exact={activeOnlyWhenExact} children={({match})=>{
      var active = match ? "active abc":'';
      return (
        <li   className={`my-li ${active}`}>
        <Link to ={to} className="link" >{label}</Link>
        
        </li>
      )
    }}/>
  )

}
class Menu extends Component {
  render(){
  return (
    <div className="Menu">
      
      <div className="navbar navbar-default">
       <p className="navbar-brand" >Call api</p>
        <ul className="nav navbar-nav">
        {this.showMenu(Menus)}
        </ul>
      </div>
      
    </div>
  );
}
showMenu=(Menus)=>{
  var result = null;
  if( Menus.length > 0){
result =  Menus.map((menu,index)=>{
    return (
     <MenuLink  label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} key ={index}/>
    );
              });
            }
              return result ;
}
}

export default Menu;
