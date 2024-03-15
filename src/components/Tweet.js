import React from "react";
import Avatar from "react-avatar";

import { FaHeart } from "react-icons/fa";

import { FaCommentAlt } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";


const Tweet = () => {
  return (
    <div className="border-b">
      <div>
        <div className="flex p-4">
          <Avatar
            src="https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHdpdHRlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
            size="40"
            round={true}
          />
          <div className="ml-2 w-full">
            <div className="flex items-center">
              <h1 className="font-bold">Aayush Jangra</h1>
              <p className="text-gray-500 text-sm ml-1">
                @This is aayush jangra .1m
              </p>
            </div>
            <div>
              <p> Hello developers lets connect and grow together</p>
            </div>
            <div className="flex justify-between my-3">
              <div className="flex items-center ">
                <div className="p-2 hover:bg-green-200 rounded-full cursor-pointer">
                <FaCommentAlt size="24px"/>
                </div>
                <p>0</p>
              </div>
              <div className="flex items-center ">
              <div className="p-2 hover:bg-pink-200 rounded-full cursor-pointer">
                <FaHeart size="24px"/>
                </div>
                <p>0</p>
              </div>
              <div className="flex items-center ">
              <div className="p-2 hover:bg-yellow-200 rounded-full cursor-pointer">
                <FaBookmark size="24px"/>
                </div>
                <p>0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
