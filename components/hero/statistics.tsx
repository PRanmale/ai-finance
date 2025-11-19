import {ArrowUpRight} from "lucide-react";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import {useRef} from "react";

import {Card} from "@/components/ui/card";
import {statistics} from "@/constants/data";

export default function Statistics() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
    const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
    const scaleSpring = useSpring(scale, springConfig);

    return(
        <motion.section
            ref={targetRef}
            style={{ opacity, scale: scaleSpring }}
            className="relative z-10 container mx-auto px-4 -mt-20"
        >
            <Card className="bg-gray-900/40 border-gray-800/50 backdrop-blur-xl p-8 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-teal-500/5" />

                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {statistics.map((metric, i) => (
                            <Card
                                key={i}
                                className="bg-gray-800/50 border-gray-700/50 backdrop-blur p-6 overflow-hidden relative group"
                            >
                                {/* Animated Background */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-800/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                <div className="flex items-center gap-4">
                                    {/* Icon Section */}
                                    <div className={`p-3 bg-${metric.color}-500/10 rounded-xl`}>
                                        <metric.icon className={`h-8 w-8 text-${metric.color}-500`} />
                                    </div>
                                    {/* Metric Details */}
                                    <div className="flex-1">
                                        <p className="text-gray-400 text-sm font-medium mb-1">{metric.title}</p>
                                        <div className="flex items-center gap-3">
                                            <p className="text-3xl font-bold">{metric.value}</p>
                                            <span className="text-green-400 text-sm font-medium flex items-center">
                  {metric.change} <ArrowUpRight className="h-4 w-4 ml-1" />
                </span>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Card key={i} className="bg-gray-800/30 border-gray-700/30 p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                    <span className="text-xs text-gray-500">LIVE</span>
                                </div>
                                <div className="space-y-1">
                                    <div className="h-2 bg-gray-700/50 rounded w-3/4" />
                                    <div className="h-2 bg-gray-700/50 rounded w-1/2" />
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </Card>
        </motion.section>
    )
}