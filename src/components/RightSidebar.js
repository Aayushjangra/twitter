import React from "react";
import { IoIosSearch } from "react-icons/io";
import Avatar from "react-avatar";

const RightSidebar = () => {
  return (
    <div className="w-[25%] bg-gray-100 rounded-2xl">
      <div className=" flex items-center p-2 bg-gray-100 rounded-full outline-none w-full ">
        <IoIosSearch size="20px" />
        <input
          type="text"
          className="bg-transparent outline-none px-2"
          placeholder="Search"
        />
      </div>
      <div>
        <div className="p-4 border-gray-200 my-4">
          <h1 className="font-bold text-lg ">Who to follow</h1>
    
        <div className="flex items-center justify-between my-4">
          <div className="flex">
            <div>
              <Avatar
                src="https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHdpdHRlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                size="40"
                round={true}
              />
            </div>

            <div className="ml-2">
              <h1 className="font-bold"> Aayush Jangra</h1>
              <p className="text-sm"> @aayushjangra90</p>
            </div>
            <div>
              <button className="px-4 py-1 bg-black text-white rounded-full">
                Profile
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between my-4">
          <div className="flex">
            <div>
              <Avatar
                src="https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHdpdHRlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                size="40"
                round={true}
              />
            </div>

            <div className="ml-2">
              <h1 className="font-bold"> Aayush Jangra</h1>
              <p className="text-sm"> @aayushjangra90</p>
            </div>
            <div>
              <button className="px-4 py-1 bg-black text-white rounded-full">
                Profile
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between my-4">
          <div className="flex">
            <div>
              <Avatar
                src="https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHdpdHRlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                size="40"
                round={true}
              />
            </div>

            <div className="ml-2">
              <h1 className="font-bold"> Aayush Jangra</h1>
              <p className="text-sm"> @aayushjangra90</p>
            </div>
            <div>
              <button className="px-4 py-1 bg-black text-white rounded-full">
                Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default RightSidebar;
