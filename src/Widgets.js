/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'

function Widgets() {
  return (
    <div className="widgets">
      <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F&tabs=timeline&width=0&height=0&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="110" height="100%" 
      style={{border:"none",overflow:"hidden" }}
       frameborder="0" allowfullscreen="true" 
       allowTransparancy="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
      
    </div>
  )
}

export default Widgets