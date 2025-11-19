import {motion} from "framer-motion";

import {Card} from "@/components/ui/card";
import {testimonials} from "@/constants/data";
import {stringify} from "@/constants/stringify";

export default function Testimonials(){

    return (
        <section className="relative z-10 container mx-auto px-4 py-32">
            <div className="text-center mb-20">
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mb-6"
                >
                    {stringify.testimonials}
                </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={testimonial.name}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                    >
                        <Card className="bg-gray-900/40 border-gray-800/50 p-8 h-full hover:bg-gray-900/60 transition-all duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-full overflow-hidden">
                                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                                    <p className="text-blue-400 text-sm">{testimonial.company}</p>
                                </div>
                            </div>
                            <p className="text-gray-300 italic">{testimonial.content}</p>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}