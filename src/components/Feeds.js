import React from 'react'
import CreatePost from './CreatePost'
import Tweet from './Tweet'


const Feeds = () => {
  return (
    <div className='w-[50%] border-l border-r border-gray-200'>
      <div>
      <CreatePost/>
      <Tweet/>
      <Tweet/>
      
      
      </div>
    </div>
  )
}

export default Feeds
