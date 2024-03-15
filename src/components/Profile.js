import React from 'react'
import { IoMdArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';


const Profile = () => {
  return (
    <div className='w-[50%] border-l border-r border-gray-200'>
    <div>
    <div className='flex items-center py-2'>
    <Link to="/" className='P-2 rounded-full hover: bg-gray-100 hover:cursor-pointer'>
   <IoMdArrowBack size="24px"/>
    
    </Link>
    <div className='ml-2'>
    <h1 className='font-bold text-lg'>Aayush Jangra</h1>
    <p className='text-gray-500 text-sm'> number of post</p>
    
    </div>
    
    </div>
    <img src="https://pbs.twimg.com/profile_banners/1581707412922200067/1693248932/1080x360" alt="banner" />
    <div className='absolute top-52 ml-2 border-4 border-white rounded-full'>
    <Avatar src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg" size="120" round={true} />
    
    </div>
    
    </div>
    </div>
  )
}

export default Profile
