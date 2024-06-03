import React,{Component} from 'react';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {actAddProductsApi,actUpdateProductsApi,actGetProductsApi} from './../../actions/index';
class ProductActionPage extends Component {
  constructor(props){
    super(props);
    this.state={
      id :'',
      txtname:'',
      txtprice:'',
      txtcheck: ''
    };
  }
  onChange=(event)=>{
    var target = event.target;
    var name = target.name;
    var value = target.type ==='checkbox'? target.checked: target.value;
    this.setState({
[name]: value
    });
  }
  onSave=(e)=>{
e.preventDefault();
var {id,txtname,txtprice,txtcheck}=this.state;
//var id_match = this.props.match.params.id;
var {history} =this.props;
var product = {
  id: id,
  name: txtname,
  price:txtprice,
  status:txtcheck
};
if (id){// trường hợp update
// callApi(`products/${id_match}`,'PUT',
// {
//   name:txtname,
//   price:txtprice,
//   status:txtcheck
// }).then(res=>{
// history.goBack();
// });
this.props.onUpdateProducts(product);
history.goBack();


// this.props.updateProduct(id_match,product);
// history.goBack();

}else{ //trường hợp add 
  // callApi('products', 'POST',
  // {
  //   name:txtname,
  //   price:txtprice,
  //   status:txtcheck
  // }).then(res=>{
  //   history.push('/product-list');
  
  // });
  
  /*axios.post('https://5e7dad24fa19eb0016519e3d.mockapi.io/api/products', {
    name:txtname,
    price:txtprice,
    status:txtcheck
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });*/

  this.props.addProducts(product);
  history.push('/product-list');
}

  }
  componentDidMount(){
    var {match}= this.props;
if (match){
   var id = match.params.id;
   this.props.onEditProducts(id);
//   callApi(`products/${id}`,'GET',null).then(res=>{
//  this.setState({
//    txtname: res.data.name,
//    txtprice: res.data.price,
//    txtcheck: res.data.status
//  });
//    });
  }
  }
  UNSAFE_componentWillReceiveProps (nextProps){
    //var {id,txtname,txtprice,txtcheck}=this.props.itemEditing;
    if(nextProps && nextProps.itemEditing){
var{itemEditing}=nextProps;
this.setState({
      
  id: itemEditing.id,
  txtname: itemEditing.name,
  txtprice:itemEditing.price,
  txtcheck:itemEditing.status

});
    }
    
  }

  render(){
    var {txtname,txtprice,txtcheck}=this.state;
    
    
  return (
    <div className="ProductActionPage container">

        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
           
           <form  onSubmit={this.onSave}>
                <div className="form-group">

         
                    <label>Product Name </label>
                    
                      <input type="text" className="form-control" name = "txtname"  onChange={this.onChange} value={txtname}/>
                      </div>

                      <div className="form-group">
         
                      <label>Price </label>
                      
                        <input type="number" className="form-control" name ="txtprice" onChange={this.onChange} value={txtprice} />
                        </div>

                        <div className="form-group">
         
                        <label>Status </label>
                  
                          </div>

                          <div className="checkbox">
                        <label>
                          <input type="checkbox" name ="txtcheck" onChange={this.onChange} value={txtcheck} checked ={txtcheck}/>
                          Còn Hàng</label>
                          </div>

                  <span>  <button type="submit" className="btn btn-primary">SAVE</button> &nbsp;
                    <Link  to ="/product-list" className="btn btn-danger">CANCEL</Link> 
                    </span>
           </form>
           
        </div>
      </div>
    
  );
  
}

}
const mapStateToProps=(state)=>{
  return {
    itemEditing : state.itemEditing
  }
}

const mapDispatchToProps=(dispatch,props)=>{
  return{
    addProducts:(product)=>{
      dispatch(actAddProductsApi(product));
    },
    onEditProducts: (id)=>{
      dispatch(actGetProductsApi(id));
    },
    onUpdateProducts : (product)=>{
      dispatch(actUpdateProductsApi(product));
    }
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(ProductActionPage);
