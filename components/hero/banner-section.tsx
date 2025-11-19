import {motion} from "framer-motion";
import Link from "next/link";
import {ArrowRight, ChevronRight, IndianRupee, Shield, Zap} from "lucide-react";

import {Button} from "@/components/ui/button";
import {stringify} from "@/constants/stringify";

export default function BannerSection() {
    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
            className="relative z-10 container mx-auto px-4 pt-32 pb-40"
        >
            <div className="text-center max-w-5xl mx-auto">
                <motion.div
                    initial={{scale: 0.8, opacity: 0}}
                    animate={{scale: 1, opacity: 1}}
                    transition={{duration: 0.8, type: "spring"}}
                    className="inline-block mb-4 px-4 py-1.5 bg-gradient-to-r from-blue-600/10 to-teal-600/10 rounded-full border border-blue-500/20"
                >
                    <span className="text-blue-400 font-medium">{stringify.banner}</span>
                </motion.div>

                <motion.h1
                    initial={{y: 20, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{delay: 0.4}}
                    className="text-6xl md:text-8xl py-2 font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-400 to-emerald-500"
                >
                    The Future of
                    <br/>
                    Financial Intelligence
                </motion.h1>

                <motion.p
                    initial={{y: 20, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{delay: 0.5}}
                    className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto mb-12"
                >
                    {stringify.bannerSubtitle}
                </motion.p>

                <motion.div
                    initial={{y: 20, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{delay: 0.6}}
                    className="flex gap-4 justify-center mb-20"
                >
                    <Link href={"/dashboard"}>
                        <Button size="lg" className=" hover:bg-blue-700 text-lg px-8">
                            {stringify.getStarted} <ArrowRight className="ml-2"/>
                        </Button>
                    </Link>
                    <Button size="lg" variant="outline" className="bg-transparent text-lg px-8">
                        {stringify.learnMore} <ChevronRight className="ml-2"/>
                    </Button>
                </motion.div>

                <motion.div
                    initial={{y: 20, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{delay: 0.7}}
                    className="text-sm text-gray-500 flex items-center justify-center gap-8"
                >
                    <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4"/> {stringify.secured}
                    </div>
                    <div className="flex items-center gap-2">
                        <Zap className="h-4 w-4"/> {stringify.realTimeAnalytics}
                    </div>
                    <div className="flex items-center gap-2">
                        <IndianRupee className="h-4 w-4"/> {stringify.noHiddenFees}
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
}