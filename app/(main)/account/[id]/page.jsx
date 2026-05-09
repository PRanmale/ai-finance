import {getAccountWithTransactions} from "../../../../actions/accounts";
import {notFound} from "next/navigation";
import {Card, CardContent, CardHeader, CardTitle} from "../../../../components/ui/card";
import {CircleDollarSign, Receipt, WalletCards} from "lucide-react";
import FinanceTable from "../_components/finace-table";
import {Suspense} from "react";
import {BarLoader} from "react-spinners";
import Accountchart from "../_components/accountcharts";
import SpendingByCategory from "../_components/spending-category";

export default async function AccountsPage({params}) {

    const accountData = await getAccountWithTransactions(params.id);

    if (!accountData) {
        notFound()
    }

    const {transactions, ...account} = accountData;
    return (
        <div className="min-h-screen bg-background p-6 space-y-8">
            {/* Header Section */}
            <div className="flex flex-col space-y-2">
                <h1 className="text-4xl font-bold tracking-tight text-white">
                    {account.name}
                </h1>
                <p className="text-muted-foreground">
                    {account.type.charAt(0) + account.type.slice(1).toLowerCase()} Account
                </p>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-card hover:bg-accent/50 transition-colors">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                            Current Balance
                        </CardTitle>
                        <CircleDollarSign className="h-4 w-4 text-muted-foreground"/>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-white">
                            ₹{parseFloat(account.balance).toFixed(2)}
                        </div>
                        <p className="text-xs text-muted-foreground">
                            Available for withdrawal
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-card hover:bg-accent/50 transition-colors">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                            Recent Activity
                        </CardTitle>
                        <Receipt className="h-4 w-4 text-muted-foreground"/>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-white">
                            {account._count.transactions}
                        </div>
                        <p className="text-xs text-muted-foreground">
                            Transactions this month
                        </p>
                    </CardContent>
                </Card>

                <Card className="bg-card hover:bg-accent/50 transition-colors">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                            Account Type
                        </CardTitle>
                        <WalletCards className="h-4 w-4 text-muted-foreground"/>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-white">
                            {account.type.charAt(0) + account.type.slice(1).toLowerCase()}
                        </div>

                    </CardContent>
                </Card>


            </div>

            <Suspense fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea"/>}>
                <Accountchart transactions={transactions}/>
            </Suspense>

            <Suspense fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea"/>}>
                <SpendingByCategory transactions={transactions}/>
            </Suspense>

            <Suspense fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea"/>}>
                <FinanceTable transactions={transactions}/>
            </Suspense>
        </div>
    )
}