import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <div className="shadow w-full">
      <div className="container mx-auto p-4 flex items-center justify-between">
        {/* logo */}
        <div>
          <Link className="text-xl font-semibold font-serif shadow-" href="/">
            Nexail
          </Link>
        </div>
        {/* navigation */}
        <div className="space-x-6">
          <Link className="hover:underline" href="/">
            Home
          </Link>
          <Link className="hover:underline" href="/about">
            About
          </Link>
          <Link className="hover:underline" href="/contact">
            Contact
          </Link>
        </div>
        {/* Auth */}
        <div className="space-x-6">
          <Link className="hover:underline" href="/auth/login">
            Login
          </Link>
          <Link className="hover:underline" href="/auth/signup">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};
