import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const header = () => {
  const router = useRouter();
  const isMenuItemActive = (path) => {
    return router.pathname === path;
  };
  return (
    <div className="bg-blue-100 w-full">
      <ul className="max-w-5xl my-0 mx-auto flex justify-center">
        <li
          className={`p-5 ml-2 cursor-pointer ${
            isMenuItemActive("/")
              ? "bg-blue-300 hover:none"
              : "hover:bg-blue-200 "
          }`}
        >
          <Link href="/">Employee</Link> 
        </li>
        <li
          className={`p-5 ml-2 cursor-pointer ${
            isMenuItemActive("/edit")
              ? "bg-blue-300 hover:none"
              : "hover:bg-blue-200 "
          }`}
        >
          <Link href="/edit">Edit</Link>
        </li>
        <li
          className={`p-5 ml-2 cursor-pointer ${
            isMenuItemActive("/employee-list-page")
              ? "bg-blue-300 hover:none"
              : "hover:bg-blue-200 "
          }`}
        >
        <Link href="/employee-list-page">Employee List</Link>
          
        </li>
      </ul>
    </div>
  );
};

export default header;
