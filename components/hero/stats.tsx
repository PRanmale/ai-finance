import {motion} from "framer-motion";

import {stats} from "@/constants/data";

export default function Stats(){

    return (
        <section className="relative z-10 container mx-auto px-4 py-32">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-4 gap-8"
            >
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="text-center"
                    >
                        <div className="flex justify-center mb-4">
                            <div className="p-4 rounded-full bg-blue-500/10">
                                <stat.icon className="h-8 w-8 text-blue-400" />
                            </div>
                        </div>
                        <h3 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                            {stat.value}
                        </h3>
                        <p className="text-gray-400">{stat.label}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}