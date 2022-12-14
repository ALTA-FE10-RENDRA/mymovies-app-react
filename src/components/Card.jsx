import React from "react";

const Card = ({ image, title, date, keys, onClick, actionCard }) => {
  return (
    <div
      key={keys}
      className="grid grid-cols-1 gap-y-4 md:w-64 md:h-auto lg:h-auto lg:w-72 rounded-lg m-auto   z-10 backdrop-blur-2xl shadow-xl"
    >
      <div className="flex justify-center items-center px-2 pt-2 cursor-pointer ">
        <img
          className=" w-full object-cover rounded-lg "
          src={`https://image.tmdb.org/t/p/original${image}`}
          alt={title}
          onClick={onClick}
        />
      </div>
      <div className="flex justify-between items-center px-4 mt-3  dark:text-zinc-200 ">
        <div>
          <h5 className="mb-2 text-xs md:text-sm font-semibold cursor-pointer">
            {title}
          </h5>
          <p className="font-light text-[12px] md:text-xs pb-2">{date}</p>
        </div>
        {actionCard}
      </div>
    </div>
  );
};

export default Card;
