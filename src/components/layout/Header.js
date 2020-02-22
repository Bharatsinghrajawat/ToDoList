import React from 'react' ;
import {Link} from 'react-router-dom';
function Header (){
     return (
         <header style={headerStyle}>
             <h1>TodoList</h1>
             <Link to="/" style={{color:'white' , textDecoration:'none'}}>Home</Link> | <Link to="/about" style={{color:'white' , textDecoration:'none'}}>About</Link>
         </header>
     )
}

const headerStyle = {
    background : 'black',
    color : 'white',
    textAlign : 'center',
    padding : '10px'
}

export default Header ;