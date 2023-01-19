import React from 'react'
import {Avatar} from '@mui/material'
import './Post.css'

function Post({username,caption,imageUrl}) {

  return (
    <div className='post'>
     <div className="post_header">
     <Avatar className='post_avatar'
       alt="Remy Sharp"
       src='https://pngimg.com/uploads/instagram/small/instagram_PNG10.png'
       
     />
     <h3>{username}</h3>
     </div>
        
        <img className='post_image' src={imageUrl} alt="" />
        <h4 className='post_text'><strong>{username}</strong> {caption}</h4>
    </div>
  )
}

export default Post