import { Poppins } from 'next/font/google'
import "./globals.css";
import Link from 'next/link'
import Clock from "./components/Clock";
import MobileNav from "./components/Navigation/MobileNav"
import { HiMenu } from "react-icons/hi";



const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata = {
  title: "WorkBench v2.0",
  description: "WorkBench v2.0 by nolikaS | Next.JS v13.5.6",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-zinc-900 bg-dotted-spacing-10 bg-dotted-gray-700">
      <body className={poppins.className}>
        <div className="hidden c1:flex relative justify-end align-bottom">
          <Clock />
        </div>
        {/* DESKTOP */}
        <nav className="hidden sm:flex flex-wrap mx-auto justify-center items-center bg-[#0f0f10] bg-opacity-50 px-6 py-3 w-[80%] rounded-xl mt-6 max-w-[580px]">
          <Link href="/" className="px-3 text-gray-400 hover:text-white hover:scale-105 transition-all duration-300">Home</Link>
          <span className="text-gray-500 text-3xl">・</span>
          <Link href="/todos" className="px-3 text-gray-400 hover:text-white hover:scale-105 transition-all duration-300">TODO</Link>
          <span className="text-gray-500 text-3xl">・</span>
          <Link href="/timers" className="px-3 text-gray-400 hover:text-white hover:scale-105 transition-all duration-300">Timers</Link>
          <span className="text-gray-500 text-3xl">・</span>
          <Link href="/calendar" className="px-3 text-gray-400 hover:text-white hover:scale-105 transition-all duration-300">Calendar</Link>
        </nav>
        {/* MOBILE */}
        <MobileNav />
        <div className="text-center my-5 flex flex-col gap-4">
          <div className="flex font-bold justify-center mt-8 mb-4 items-center text-amber-200">
            {/* MOBILE */}
            <div className="flex sm:hidden">
              <span className="text-3xl">✨ WorkBench</span>
              <div className="badge badge-lg ml-3 bg-amber-200 text-gray-950 justify-center items-center">v2.0</div>
            </div>
            {/* DESKTOP */}
            <div className="sm:flex hidden">
              <span className="text-5xl">✨ WorkBench</span>
              <div className="badge badge-lg my-auto ml-3 bg-amber-200 text-gray-950 justify-center items-center align-middle">v2.0</div>
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
