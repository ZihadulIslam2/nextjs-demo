"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';

export const Navigation = () => {
    const pathname = usePathname()
  return (
    <nav>
      <Link
        href="/"
        className={pathname == '/' ? 'font-bold mr-4' : ' text-blue-500 mr-4'}
      >
        Home
      </Link>
      <Link
        href="/products/iphon"
        className={
          pathname == '/products/iphon'
            ? 'font-bold mr-4'
            : ' text-blue-500 mr-4'
        }
      >
        Products
      </Link>
      <Link
        href="/about"
        className={
          pathname == '/about' ? 'font-bold mr-4' : ' text-blue-500 mr-4'
        }
      >
        About
      </Link>
    </nav>
  )
};
