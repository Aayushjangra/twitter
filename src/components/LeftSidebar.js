import React from "react";
import { CiHome } from "react-icons/ci";
import { FaHashtag } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <div className='w-[20%]'>
      <div>
        <div>
          <img
          className="ml-5"
            width={"36px"}
            src="https://img.freepik.com/free-vector/twitter-new-2023-x-logo-white-background-vector_1017-45422.jpg?size=338&ext=jpg&ga=GA1.1.1269040533.1710201600&semt=ais"
            alt="twitter logo"
          />
        </div>
             <div className="my-4">
        <Link to="/" className="flex items-center my-3 hover:bg-gray-200 px-4 py-2 rounded-full hover:cursor-pointer">
          <div>
            <CiHome size="24px"  />
          </div>
          <h1 className="font-bold text-lg ml-2">Home</h1>
        </Link>
        <div className="flex items-center my-3 hover:bg-gray-200 px-4 py-2 rounded-full hover:cursor-pointer">
          <div>
            <FaHashtag size="24px"  />
          </div>
          <h1 className="font-bold text-lg ml-2">Explore</h1>
        </div>
        <div className="flex items-center my-3 hover:bg-gray-200 px-4 py-2 rounded-full hover:cursor-pointer">
          <div>
            <IoIosNotificationsOutline size="24px"  />
          </div>
          <h1 className="font-bold text-lg ml-2">Notification</h1>
        </div>
        <Link to="/profile" className="flex items-center my-3 hover:bg-gray-200 px-4 py-2 rounded-full hover:cursor-pointer">
          <div>
            <FaRegUser  size="24px"  />
          </div>
          <h1 className="font-bold text-lg ml-2">Profile</h1>
        </Link>
        <div className="flex items-center my-3 hover:bg-gray-200 px-4 py-2 rounded-full hover:cursor-pointer">
          <div>
            <CiBookmark size="24px"  />
          </div>
          <h1 className="font-bold text-lg ml-2">Bookmarks</h1>
        </div>
        <div className="flex items-center my-3 hover:bg-gray-200 px-4 py-2 rounded-full hover:cursor-pointer">
          <div>
            <MdLogout size="24px"  />
          </div>
          <h1 className="font-bold text-lg ml-2">Logout</h1>
        </div>
        <button className="px-4 py-2 border-nome text-md bg-[#1098F0] w-full rounded-full text-white font-bold">Post</button>
        
        

        
        
        
      </div>
    </div>
    </div>
  );
};

export default LeftSidebar;
