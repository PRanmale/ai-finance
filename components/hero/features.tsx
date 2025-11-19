import {motion} from "framer-motion";
import {ChevronRight} from "lucide-react";

import {features} from "@/constants/data";
import {Card} from "@/components/ui/card";
import {stringify} from "@/constants/stringify";

export default function Features(){
    return(
        <section className="relative z-10 container mx-auto px-4 py-32">
            <div className="text-center mb-20">
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mb-6"
                >
                    Powerful features for
                    <br />
                    modern finance
                </motion.h2>
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400 text-xl max-w-3xl mx-auto"
                >
                    {stringify.featureSubtext}
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <motion.div
                        key={feature.title}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                    >
                        <Card className="group bg-gray-900/40 hover:bg-gray-900/60 border-gray-800/50 p-8 h-full transition-all duration-300 hover:scale-105">
                            <div className={`p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 w-fit`}>
                                <feature.icon className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                            <p className="text-gray-400 mb-6">{feature.description}</p>
                            <div className="flex items-center text-blue-400 group-hover:text-blue-300">
                                Learn more <ChevronRight className="h-4 w-4 ml-2" />
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}