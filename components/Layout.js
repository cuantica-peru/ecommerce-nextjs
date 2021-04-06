import Next from  'next/head';
import Header from './Header';

const Layout =(props) => {
return(
<div>
    <head>
    <title>Cuantica Ecommerce</title>
  
    
    <link rel="stylesheet" href="https://bootswatch.com/4/materia/bootstrap.min.css"/>
"/>
    </head>
    <Header/>
    { props.children }
</div>

);

};
export default Layout;