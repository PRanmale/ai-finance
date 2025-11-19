import React from "react";
import { PenBox, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import {
      SignedIn,
      SignedOut,
      SignInButton,
      SignUpButton,
      UserButton,
} from "@clerk/nextjs";

import { checkUser } from "@/lib/checkUser";
import { Button } from "../ui/button";
import { stringify } from "@/constants/stringify";

const Header = async () => {
      await checkUser();

      return (
            <header className="fixed top-0 w-full bg-transparent text-white backdrop-blur-md z-50">
                  <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
                        <Link
                              href="/"
                              className="h-12 w-auto flex items-center text-2xl font-bold"
                        >
                              <span className="text-blue-300 flex flex-row items-center">
                                    WealthMind.Ai
                              </span>
                        </Link>
                        <div className="flex items-center space-x-4">
                              <SignedIn>
                                    <Link
                                          href="/dashboard"
                                          className="text-white hover:text-blue-600 flex items-center gap-2"
                                    >
                                          <Button variant="outline">
                                                <LayoutDashboard size={18} />
                                                <span className="hidden md:inline">
                                                      {stringify.dashboard}
                                                </span>
                                          </Button>
                                    </Link>
                                    <a href="/transaction/create">
                                          <Button className="flex items-center gap-2">
                                                <PenBox size={18} />
                                                <span className="hidden md:inline">
                                                      {stringify.transactions}
                                                </span>
                                          </Button>
                                    </a>
                              </SignedIn>
                              <SignedOut>
                                    <SignInButton forceRedirectUrl="/dashboard">
                                          <Button variant="outline">
                                                Login
                                          </Button>
                                    </SignInButton>
                              </SignedOut>
                              <SignedOut>
                                    <SignUpButton
                                          forceRedirectUrl={"/dashboard"}
                                    >
                                          <Button>Sign Up</Button>
                                    </SignUpButton>
                              </SignedOut>
                              <SignedIn>
                                    <UserButton
                                          appearance={{
                                                elements: {
                                                      avatarBox: "w-10 h-10",
                                                },
                                          }}
                                    />
                              </SignedIn>
                        </div>
                  </nav>
            </header>
      );
};

export default Header;
