import React,{Component} from 'react';
import ProductList from './../../components/productList/productList';
import ProductItem from './../../components/productItem/productItem';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import{ actFetchProductsApi, actDeleteProductsApi}  from './../../actions/index';
class ProductListPage extends Component {
  componentDidMount(){
    //được gọi sau khi component render lần đầu tiên 

      this.props.fetchAllProducts();
  }
   componentDidUpdate(){
     this.props.fetchAllProducts();
  }
  render(){
    //var products=this.props.product;
    var {products} =this.props;
    
   
 

  return (

    <div className="ProductList container">
    <div className="row">
    <Link to ="/product/add" className="btn btn-info mb-10">Add Product</Link>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      
        <ProductList>
        {this.showProductItem(products)}
        </ProductList>
</div>
  
    
</div>
      
      
    </div>
  
  );
  
}
onDelete=(id)=>{
//console.log(id);

// var {products}=this.state;
// callApi(`products/${id}`,'DELETE',null).then(res =>{
//   if (res.status ===200){
//     var index = this.findIndex (products,id);
//     if(index!== -1){
//       products.splice(index,1);
//       this.setState({
//         products:products
//       });
//     }
//   }

//   });

this.props.DeleteProduct(id);

}
findIndex=(products,id)=>{
  var result = -1;
  products.forEach((product,index) => {
    if(product.id ===id){
      result = index;
    }
    
  });
  return result;
}
showProductItem=(products)=>{
var result=null;
if(products.length >0 ){
  result = products.map((product,index)=>{
return (<ProductItem key ={index} product={product}  index={index} onDelete ={()=>this.onDelete(product.id)}/>);

  });
}
return result;
}
/*onAddProduct = ()=>{
  console.log('abc');
return(
  <Route path='/add-product' exact ={true} component={ProductActionPage} />
)

}*/
}
const mapStateToProps = state =>{
  return {
    products : state.products
  }
}
const mapDispatchToProps = (dispatch,props)=>{
  return {
    fetchAllProducts: ()=>{
      dispatch(actFetchProductsApi());
    },
    DeleteProduct: (id)=>{
      dispatch(actDeleteProductsApi(id));
    }
  }

  
}


export default connect (mapStateToProps,mapDispatchToProps)(ProductListPage);
