import React,{Component} from 'react';
import callApi from './../../utils/apiCaller';


class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      txt_user:'',
      txt_password: ''
    };
  }
  onChange=(event)=>{
    var target = event.target;
    var name = target.name;
    var value = target.type ==='checkbox'? target.checked: target.value;
  
    this.setState({
[name]: value
    });
    console.log(this.state);
  }
  onSignIn=(e)=>{
    e.preventDefault();
    
    var{txt_user,txt_password}=this.state;
    callApi('products/1','GET',null).then(res=>{
      if( txt_user === res.data.name &&  txt_password === res.data.price){
        this.props.history.push('/product-list');
      }else{
        alert("That's Wrong! Sign in again !");
      }
      
      

    });
  

  }
  render(){
  
  return (
    <div className="Home container">
    <h1 style={{color:"red"}}> Đăng nhập thông tin </h1>  <br/>
  
    <form  onSubmit={this.onSignIn}>
      <div className="form-group">
        <label>User</label>
        <input type="text" className="form-control" name="txt_user" onChange={this.onChange} />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="text" className="form-control" name="txt_password" onChange={this.onChange}/>
      </div>

      <button type="submit" className="btn btn-primary">SIGN IN</button>
    </form>
    
      
      
    </div>
  );
}
}


export default Home;
