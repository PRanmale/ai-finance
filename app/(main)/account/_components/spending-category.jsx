"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
    Area,
    AreaChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import { endOfDay, startOfDay, subDays, format } from "date-fns";

const DATE_RANGES = {
    "7D": { label: "Last 7 Days", days: 7 },
    "1M": { label: "Last Month", days: 30 },
    "3M": { label: "Last 3 Months", days: 90 },
    "6M": { label: "Last 6 Months", days: 180 },
    ALL: { label: "All Time", days: null }
};

export default function CashFlow({ transactions }) {
    const [dateRange, setDateRange] = useState("1M");
    const range = DATE_RANGES[dateRange];
    const now = new Date();
    const startDate = range.days ? startOfDay(subDays(now, range.days)) : startOfDay(new Date(0));

    const filtered = transactions.filter((t) => {
        const transactionDate = new Date(t.date); // Ensure it's a Date object
        return transactionDate >= startDate && transactionDate <= endOfDay(now);
    });

    const grouped = filtered.reduce((acc, transaction) => {
        const date = format(new Date(transaction.date), "MMM d");
        if (!acc[date]) {
            acc[date] = { date, income: 0, expenses: 0 };
        }
        if (transaction.type === "INCOME") {
            acc[date].income += transaction.amount;
        } else {
            acc[date].expenses += transaction.amount;
        }
        return acc;
    }, {});

    const data = Object.values(grouped).sort(
        (a, b) => new Date(a.date) - new Date(b.date)
    );

    return (
        <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Cash Flow</h2>
            <ResponsiveContainer width="100%" height={350}>
                <AreaChart data={data}>
                    <XAxis
                        dataKey="date"
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <YAxis
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `₹${value.toFixed(2)}`}
                    />
                    <Tooltip
                        cursor={{ fill: "rgba(255, 255, 255, 0.05)" }}
                        contentStyle={{ background: "#1c1c1c", border: "none" }}
                        labelStyle={{ color: "#fff" }}
                        formatter={(value) => `₹${value.toFixed(2)}`}
                    />
                    <Area
                        type="monotone"
                        dataKey="income"
                        stroke="#22c55e"
                        fill="#22c55e"
                        fillOpacity={0.2}
                        strokeWidth={2}
                    />
                    <Area
                        type="monotone"
                        dataKey="expenses"
                        stroke="#ef4444"
                        fill="#ef4444"
                        fillOpacity={0.2}
                        strokeWidth={2}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </Card>
    );
}
