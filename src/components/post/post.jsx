import React from 'react'
// import { Link } from 'react-router-dom'

export default function Post() {
  return (
    <div className='post'>

        <div className='postinfo'>
            {/* <Link to={}<span>1</span> */}
            <span>This is where my post will be</span>
        </div>

        <div className='postinfo'>
        <span>2</span>
            <span>This is where my post will be</span>
        </div>

        <div className='postinfo'>
        <span>3</span>
            <span>This is where my post will be</span>
        </div>
    </div>
  )
}
