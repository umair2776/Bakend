import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const List = () => {
  
  return (
    <>
    <div>
     
      <div className='list'>
        <li><Link className="link"  to={"/"}>Home</Link></li>
        <li> <Link className="link" to={"/summer'24"}>Summer'24</Link></li>
        <li> <Link className="link" to={"/Women Shoes"}>Women Shoes</Link></li>
        <li> <Link className="link" to={"/Women Appearls"}>Women Apparels</Link></li>
        <li> <Link className="link" to={"/bags"}>Bags</Link></li>
        <li> <Link className="link" to={"/kids"}>Kids</Link></li>
        <li> <Link className="link" to={"/aessories"}>Accessories</Link></li>
        <li> <Link className="link" to={"/fragrances"}>Fragrance</Link></li>
        <li> <Link className="link" to={"/add"}>Add Product</Link></li>


      </div>
    </div>
    </>
  )
}

export default List
