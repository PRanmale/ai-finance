"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

export default function NotFound(){
    return (
        <motion.div
            className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex items-center space-x-3">
                <AlertCircle className="text-red-500 w-10 h-10 animate-bounce" />
                <h1 className="text-6xl font-bold">404</h1>
            </div>
            <p className="text-xl mt-4">The page you are looking for doesn’t exist.</p>
            <p className="text-md text-gray-400 mt-2">
                Maybe it was moved, or you mistyped the URL.
            </p>
            <Link href="/">
                <Button className="mt-6  hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg">
                    Go Back Home
                </Button>
            </Link>
            <motion.div
                className="mt-10 text-gray-400"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ yoyo: Infinity, duration: 1 }}
            >
                <p className="italic">Not all who wander are lost.</p>
            </motion.div>
        </motion.div>
    );
};


