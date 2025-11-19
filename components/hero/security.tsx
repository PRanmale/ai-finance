import {motion} from "framer-motion";

import {Card} from "@/components/ui/card";
import {security} from "@/constants/data";
import {stringify} from "@/constants/stringify";

export default function Security() {
    return (
        <section className="relative z-10 container mx-auto px-4 py-32">
            <div className="text-center mb-20">
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mb-6"
                >
                    {stringify.enterpriseSecurityGrade}
                </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {security.map((feature, index) => (
                    <motion.div
                        key={feature.title}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                    >
                        <Card className="bg-gray-900/40 border-gray-800/50 p-8 hover:bg-gray-900/60 transition-all duration-300">
                            <div className={`p-4 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6 w-fit`}>
                                <feature.icon className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}