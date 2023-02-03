import Link from "next/link";
import React from "react";

interface Props {
  isAuthenticated: boolean | void;
}

export const Header: React.FC<Props> = ({ isAuthenticated }) => {
  return (
    <header className="w-full py-8 max-w-4xl flex justify-between items-center">
      <Link
        href="/"
        className="font-mono transition font-bold uppercase duration-700"
      >
        Newsly
      </Link>
      <nav className="flex gap-5">
        <Link href="/articles" className="hover:underline">
          Articles
        </Link>
        {isAuthenticated ? (
          <Link href="/profile" className="hover:underline">
            Profile
          </Link>
        ) : (
          <Link href="/login" className="hover:underline">
            Log in
          </Link>
        )}
      </nav>
    </header>
  );
};
