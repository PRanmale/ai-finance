import {motion} from "framer-motion";
import {Building2, Globe2, MessageSquare, Rocket, Users} from "lucide-react";

import {Button} from "@/components/ui/button";
import {stringify} from "@/constants/stringify";

export default function CallToAction() {
    return (
        <section className="relative z-10 container mx-auto px-4 py-32">
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="relative rounded-3xl overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 opacity-10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.2),transparent)]" />
                <div className="relative px-8 py-24 text-center">
                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Ready to Transform Your
                        <br />
                        Financial Operations?
                    </motion.h2>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-300 text-xl max-w-3xl mx-auto mb-12"
                    >
                        {stringify.thousands}
                    </motion.p>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex gap-4 justify-center"
                    >
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
                            {stringify.getStarted} <Rocket className="ml-2 h-5 w-5" />
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg px-8">
                            {stringify.learnMore} <MessageSquare className="ml-2 h-5 w-5" />
                        </Button>
                    </motion.div>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-400"
                    >
                        <div className="flex items-center gap-2">
                            <Globe2 className="h-4 w-4" /> {stringify.availableWorldWide}
                        </div>
                        <div className="flex items-center gap-2">
                            <Building2 className="h-4 w-4" /> {stringify.enterpriseReady}
                        </div>
                        <div className="flex items-center gap-2">
                            <Users className="h-4 w-4" /> {stringify.support}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}