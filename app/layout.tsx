import { Poppins } from 'next/font/google'
import "./globals.css";

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
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
