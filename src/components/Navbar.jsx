import React from "react";
import { Link } from "react-router-dom";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { SlOptionsVertical } from "react-icons/sl";
import {
  IoBookOutline,
  IoBook,
  IoFootballOutline,
  IoFootball,
  IoBasketOutline,
  IoBasket,
  IoPersonOutline,
  IoPerson,
} from "react-icons/io5";
import logoOffside from "../Images/logo-offside.png";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation().pathname;

  return (
    <div className="w-screen">
      <nav className="w-full bg-white h-12 flex justify-between overflow-hidden">
        <Link className="h-full flex items-center" to="/">
          <img src={logoOffside} alt="" className="md:h-36 h-28" />
        </Link>
        <div className="h-full flex md:w-5/12 w-9/12 items-center justify-between">
          <div className="flex h-full md:w-1/2 items-center justify-evenly">
            <Link to="/album" className="rounded-full hover:bg-zinc-300 p-1">
              {location === "/album" ? (
                <IoBook size="2rem" color="#B02419" />
              ) : (
                <IoBookOutline size="2rem" color="grey" />
              )}
            </Link>
            <Link to="/fantasy" className="rounded-full hover:bg-zinc-300 p-1">
              {location === "/fantasy" ? (
                <IoFootball size="2rem" color="#B02419" />
              ) : (
                <IoFootballOutline size="2rem" color="grey" />
              )}
            </Link>
            <Link to="/market" className="rounded-full hover:bg-zinc-300 p-1">
              {location === "/market" ? (
                <IoBasket size="2rem" color="#B02419" />
              ) : (
                <IoBasketOutline size="2rem" color="grey" />
              )}
            </Link>
            <Link to="/profile" className="rounded-full hover:bg-zinc-300 p-1">
              {location === "/profile" ? (
                <IoPerson size="2rem" color="#B02419" />
              ) : (
                <IoPersonOutline size="2rem" color="grey" />
              )}
            </Link>
          </div>
          <div className="w-0.5 h-full bg-black bg-opacity-30"></div>
          <div className="w-1/2 h-full flex items-center justify-evenly">
            <div className="rounded-full bg-stone-400 md:w-2/5 w-[70%] flex items-center h-4/6 text-xl">
              <RiMoneyDollarCircleFill size="2rem" color="#63130B" />
              <p>50</p>
            </div>
            <button className="hover:cursor-pointer rounded-full hover:bg-zinc-300 p-1">
              <SlOptionsVertical size="1.5rem" color="grey" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
