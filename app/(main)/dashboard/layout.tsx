import React, {Suspense} from "react";
import Dashboard from "@/app/(main)/dashboard/page";
import {BarLoader} from "react-spinners"
import {stringify} from "@/constants/stringify";

export default function DashboardLayout() {
    return (
        <div className={"px-5"}>
            <h1 className={"text-4xl font-bold gradient-title mb-5"}>{stringify.dashboard}</h1>
            <Suspense fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea"/>}>
                <Dashboard/>
            </Suspense>
        </div>
    );
}
