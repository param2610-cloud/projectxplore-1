"use client";
import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function MainLayoutPage({
  children,
}: {
  children: React.ReactNode;
}) {


const pathname =usePathname()





  return (
    <>
    {pathname && pathname.includes("/auth") ? (
        children
    ) : (
        <div className='bg-black w-screen h-screen text-white'>
            <Link href="/auth/signin">Sign In</Link>
            <Link href="/auth/signup">Sign Up</Link>
            Landing Page
        </div>
    )}
</>

  );
}
