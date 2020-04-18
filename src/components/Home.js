import React from "react";
import {Link} from 'react-router-dom';
import Header from "./Header";

const Signin = (props) => {
  console.log(props);
  return (
    <div>
      <h3>home</h3>

      <div>Lists</div>
      <Link to='/lists' className='lists'>
         lists
      </Link>      
      
      <Link to='/items' className='lists'>
         item
      </Link>

      <Header />
    </div>
  );
};

export default Signin;
