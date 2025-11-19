"use client";

import {
      Card,
      CardContent,
      CardDescription,
      CardFooter,
      CardHeader,
      CardTitle,
} from "@/components/ui/card";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Switch } from "@/components/ui/switch";
import useFetch from "@/hooks/use-fetch";
import { updateDefaultAccount } from "@/actions/accounts";
import { useEffect } from "react";
import { toast } from "sonner";

export default function AccountCard({ account }) {
      const { name, type, balance, id, isDefault } = account;

      const {
            data: updatedAccount,
            error,
            fn: updateDefaultFn,
            loading: updateDefaultLoading,
      } = useFetch(updateDefaultAccount);

      const handleDefaultChange = async (event) => {
            event.preventDefault();

            if (isDefault) {
                  toast.warning("Please select a default account.");
                  return;
            }

            await updateDefaultFn(id);
      };

      useEffect(() => {
            if (updatedAccount?.success) {
                  toast.success("Account updated successfully.");
            }
      }, [updatedAccount, updateDefaultLoading]);

      useEffect(() => {
            if (error) {
                  toast.error("Account creation failed." || error.message);
            }
      }, [error]);

      return (
            <>
                  <Card className="hover:bg-gray-900 transition-shadow group  relative">
                        <Link href={`/account/${id}`}>
                              <CardHeader
                                    className={
                                          "flex flex-row items-center justify-between space-y-0 pb-2"
                                    }
                              >
                                    <CardTitle
                                          className={
                                                "text-sm font-medium capitalize"
                                          }
                                    >
                                          {name}
                                    </CardTitle>
                                    <Switch
                                          checked={isDefault}
                                          onClick={handleDefaultChange}
                                          disabled={updateDefaultLoading}
                                    />
                              </CardHeader>
                              <CardContent className="text 2xl font-bold">
                                    <div>₹{parseFloat(balance).toFixed(2)}</div>
                                    <p
                                          className={
                                                "text-xs text-muted-foreground capitalize"
                                          }
                                    >
                                          {type.charAt(0) +
                                                type.slice(1).toLowerCase()}
                                    </p>
                              </CardContent>

                              <CardFooter className="flex justify-between text-sm text-muted-foreground">
                                    <div className="flex items-center">
                                          <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
                                          Income
                                    </div>
                                    <div className="flex items-center">
                                          <ArrowDownRight className="mr-1 h-4 w-4 text-red-500" />
                                          Expense
                                    </div>
                              </CardFooter>
                        </Link>
                  </Card>
            </>
      );
}
