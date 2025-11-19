import CreateAccountDrawer from "@/components/create-account-drawer";
import { PlusCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { getDashboardData, getUserAccounts } from "@/actions/dashboard";
import AccountCard from "@/app/(main)/dashboard/_components/account-card";
import { getCurrentBudget } from "@/actions/budget";
import { BudgetProgress } from "@/app/(main)/dashboard/_components/budget-progress";
import { DashboardOverview } from "@/app/(main)/dashboard/_components/dashboard-overview";

export default async function Dashboard() {
      const [accounts, transactions] = await Promise.all([
            getUserAccounts(),
            getDashboardData(),
      ]);
      const defaultAccount = accounts?.find((account) => account.isDefault);

      let budgetData = null;
      if (defaultAccount) {
            budgetData = await getCurrentBudget(defaultAccount.id);
      }

      return (
            <div className={"space-y-8"}>
                  {/*Budget Progress*/}
                  {defaultAccount && (
                        <BudgetProgress
                              initialBudget={budgetData?.budget}
                              currentExpenses={budgetData?.currentExpenses || 0}
                        />
                  )}
                  {/* Dashboard Overview*/}
                  <DashboardOverview
                        accounts={accounts}
                        transactions={transactions || []}
                  />
                  {/* Account Grid*/}
                  <div className={"grid gap-4 md:grid-cols-2 lg:grid-cols-3"}>
                        <CreateAccountDrawer>
                              <Card className="w-full py-8 flex flex-col items-center justify-center gap-4 cursor-pointer border border-dashed hover:border-primary hover:bg-primary/5 transition-all group">
                                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                          <PlusCircle className="w-6 h-6 text-primary" />
                                    </div>
                                    <p className="text-lg font-medium text-muted-foreground group-hover:text-primary transition-colors">
                                          Add Account
                                    </p>
                              </Card>
                        </CreateAccountDrawer>
                        {accounts.length > 0 &&
                              accounts?.map((account) => {
                                    return (
                                          <AccountCard
                                                key={account.id}
                                                account={account}
                                          />
                                    );
                              })}
                  </div>
            </div>
      );
}
