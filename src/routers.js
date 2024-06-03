import React from 'react';
//cấu hình với route tương ứng sẽ load component tương ứng 
import Home from './pages/HomePage/HomePage';
import NotFound from './pages/NotFoundPage/NotFound';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';


const routes = [
{
    path:'/',
    exact:true,
    main:({history})=><Home history={history} />
},

{
    path:'/product-list',
    exact:false,
    main: ()=>< ProductListPage/>
},
{
    path:'/product/add',
    exact:false,
    main: ({history}) =><ProductActionPage history={history} />
},
{
    path:'/product/:id/edit',
    exact:false,
    main: ({match,history}) =><ProductActionPage match={match} history={history} />
},

{
    path:'',
    exact:false,
    main: ()=>< NotFound/>
}

];
export default routes;