import React from "react";
import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";

const CreatePost = () => {
  return (
    <div className="w-[100%] ">
      <div>
        <div className="flex items-center justify-around border-b border-gray-200">
          <div className="cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3">
            <h1 className="font-semibold text-gray-600 text-lg"> For you</h1>
          </div>
          <div className="cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3">
            <h1 className="font-semibold text-gray-600 text-lg "> Following</h1>
          </div>
        </div>
        <div>
          <div>
            <div className="flex items-center p-4">
              <Avatar
                src="https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHdpdHRlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                size="40"
                round={true}
              />
            </div>
            <input  className='w-full outline-none border-none text-xl ml-2' type="text" placeholder="What is happeining?!"/>
          </div>
          <div className="flex items-center justify-between p-4 border-b border-gray-300">
          <div>
          <CiImageOn size="24px"/>
          </div>
          <button className='bg-[#1098F9] px-4 py-1 text-lg text-white  border-none rounded-full'>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
