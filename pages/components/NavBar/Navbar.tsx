import CSS from 'csstype';
import Link from 'next/link';
import React from "react";
const navBarStyle: CSS.Properties = {
  backgroundColor:'white',
  paddingButtom:500
};
const PrimaryNavbar = () => (
  <>
<nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3 relative flex flex-wrap items-center justify-between px-2 py-1 mb-3 shadow text-base" style={navBarStyle}>
  <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
    <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
      <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black" href="#home">
        Fair&Fast
      </a>
      <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
        <span className="block relative w-6 h-px rounded-sm bg-white"></span>
        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
      </button>
    </div>
    <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
      <ul className="flex flex-col lg:flex-row list-none ml-auto">
          <li className="nav-item">
            <Link href="/">
              <a className="px-3 py-2 flex items-center  uppercase font-bold leading-snug text-black hover:opacity-75">
                หน้าหลัก
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <a className="px-3 py-2 flex items-center  uppercase font-bold leading-snug text-black hover:opacity-75">
              ติดตามสถานะขนส่ง
            </a>
          </li>
          <li className="nav-item">
            <a className="px-3 py-2 flex items-center  uppercase font-bold leading-snug text-black hover:opacity-75">
              ติดต่อเรา
            </a>
          </li>
          <li className="nav-item">
            <Link href="/login">
              <a className="px-3 py-2 flex items-center  uppercase font-bold leading-snug text-black hover:opacity-75">
                เข้าสู่ระบบ
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/register">
              <a className="px-3 py-2 flex items-center  uppercase font-bold leading-snug text-white hover:opacity-75" style={{backgroundColor: "black"}} href="#pablo">
                สมัครสมาชิก
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <a className="px-3 py-2 flex items-center  uppercase font-bold leading-snug text-black hover:opacity-75"  href="#language">
              ไทย/Eng
            </a>
          </li>
      </ul>
    </div>
  </div>
</nav>
</>
)

export default PrimaryNavbar
