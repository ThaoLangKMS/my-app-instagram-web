import Link from "next/link";
import React from "react";
import { HiOutlineHome } from "@react-icons/all-files/hi/HiOutlineHome";
import { CiSearch, CiUser } from "react-icons/ci";
import { VscDiffAdded } from "react-icons/vsc";
import { RiMessengerLine, RiNotification2Line } from "react-icons/ri";

export default function AppSidebar() {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button ">
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content my-2">
          <li className="">
            <div className="flex ">
              <HiOutlineHome size={20} />
              <Link href="/">Home</Link>
            </div>
          </li>
          <li>
            <div className="flex my-10">
              <CiSearch size={20} />
              <Link href="/search">Search</Link>
            </div>
          </li>
          <li>
            <div className="flex">
              <VscDiffAdded size={20} />
              <Link href="/create">Create</Link>
            </div>
          </li>
          <li>
            <div className="flex">
              <RiMessengerLine size={20} />
              <Link href="/message">Message</Link>
            </div>
          </li>
          <li>
            <div className="flex">
              <RiNotification2Line size={20} />
              <Link href="/notification">Notification</Link>
            </div>
          </li>
          <li>
            <div className="flex">
              <CiUser size={20} />
              <Link href="/profile">Profile</Link>{" "}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
