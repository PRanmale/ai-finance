import {motion} from "framer-motion";

import {Card} from "@/components/ui/card";
import {howitworks} from "@/constants/data";
import {stringify} from "@/constants/stringify";

export default function HowItWorks() {
    return (
        <section className="relative z-10 container mx-auto px-4 py-32">
            <div className="text-center mb-20">
                <motion.h2
                    initial={{y: 20, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    viewport={{once: true}}
                    className="text-4xl md:text-6xl font-bold mb-6"
                >
                    {stringify.howItWorks}
                </motion.h2>
                <motion.p
                    initial={{y: 20, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    viewport={{once: true}}
                    transition={{delay: 0.2}}
                    className="text-gray-400 text-xl max-w-3xl mx-auto"
                >
                    {stringify.howItWorksSubtext}
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {howitworks.map((step, index) => (
                    <motion.div
                        key={step.title}
                        initial={{y: 20, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        viewport={{once: true}}
                        transition={{delay: 0.2 + index * 0.1}}
                        className="relative"
                    >

                        <Card className="bg-gray-900/40 border-gray-800/50 p-8">
                            <div className={`p-4 rounded-xl bg-${step.color}-500/10 w-fit mb-6`}>
                                <step.icon className={`h-8 w-8 text-${step.color}-400`}/>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                            <p className="text-gray-400">{step.description}</p>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>

    )
}