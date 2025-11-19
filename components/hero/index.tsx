"use client";

import BannerSection from "@/components/hero/banner-section";
import Statistics from "@/components/hero/statistics";
import Features from "@/components/hero/features";
import Stats from "@/components/hero/stats";
import HowItWorks from "@/components/hero/how-it-works";
import Testimonials from "@/components/hero/testimonials";
import Security from "@/components/hero/security";
import CallToAction from "@/components/hero/call-to-action";

export default function Hero() {
    return (
        <div className="min-h-screen bg-gradient-to-b dark:from-black dark:via-gray-900 dark:to-black from-white via-white to white text-white overflow-hidden">
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 dark:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),rgba(0,0,0,0))]" />
                <div className="absolute inset-0 dark:bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.1),rgba(0,0,0,0))]" />
            </div>
            <BannerSection/>
            <Statistics/>
            <Features/>
            <Stats/>
            <HowItWorks/>
            <Testimonials/>
            <Security/>
            <CallToAction/>
        </div>
    );
}

