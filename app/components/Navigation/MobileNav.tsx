'use client';

import { Dropdown } from 'flowbite-react';
import Link from 'next/link'

function MobileNav() {
  return (
    <div className="navbar bg-[#0f0f10] justify-end sm:hidden">
      <Dropdown label="" className="relative bg-[#0f0f10] p-4 w-full ml-[-8px] text-center">
        <Dropdown.Item className="text-gray-400">
          <Link href="/" className="px-3 text-gray-400 hover:text-white hover:scale-105 transition-all duration-300">Home</Link>
        </Dropdown.Item>
        <Dropdown.Item className="text-gray-400">
          <Link href="/todos" className="px-3 text-gray-400 hover:text-white hover:scale-105 transition-all duration-300">TODO</Link>
        </Dropdown.Item>
        <Dropdown.Item className="text-gray-400">
          <Link href="/timers" className="px-3 text-gray-400 hover:text-white hover:scale-105 transition-all duration-300">Timers</Link>
        </Dropdown.Item>
        <Dropdown.Item className="text-gray-400">
          <Link href="/calendar" className="px-3 text-gray-400 hover:text-white hover:scale-105 transition-all duration-300">Calendar</Link>
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
}

export default MobileNav;