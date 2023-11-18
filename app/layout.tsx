import { Poppins } from 'next/font/google'
import "./globals.css";
import Link from 'next/link'
import Clock from "./components/Clock";

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
    <html lang="en" className="bg-zinc-900 bg-dotted-spacing-8 bg-dotted-gray-600">
      <body className={poppins.className}>
        <div className="hidden md:flex relative justify-end align-bottom">
          <Clock />
        </div>
        <nav className="flex mx-auto justify-center items-center bg-base-200 px-6 py-3">
          <Link href="/home" className="px-3 text-gray-400 hover:text-white hover:scale-105 transition-all duration-300">Home</Link>
          <Link href="/todos" className="px-3 text-gray-400 hover:text-white hover:scale-105 transition-all duration-300">TO-DOs</Link>
          <Link href="/timers" className="px-3 text-gray-400 hover:text-white hover:scale-105 transition-all duration-300">Timers</Link>
          <Link href="/calendar" className="px-3 text-gray-400 hover:text-white hover:scale-105 transition-all duration-300">Calendar</Link>
        </nav>
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
