import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div>
      <div className='logo'>
        <img src='https://stylo.pk/cdn/shop/files/110x60-Logo_45_140x@2x.png?v=1705411679'/>
    </div>
    <Link to="/signup"><button className='btn btn-primary'>Signup</button></Link>
    </div>
  )
}

export default Logo
