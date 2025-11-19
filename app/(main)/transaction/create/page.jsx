import {getUserAccounts} from "../../../../actions/dashboard";
import {defaultCategories} from "../../../../data/category";
import AddTransactionForm from "../_components/AddTransactionForm";
import {getTransaction} from "../../../../actions/transaction";

export default async function AddTransactionPage({searchParams}) {
    const accounts = await getUserAccounts()

    const editId = searchParams?.edit;

    let initialData = null;
    if (editId) {
        const transaction = await getTransaction(editId);
        initialData = transaction;
    }

    return (
        <div className="min-h-screen bg-background p-6 space-y-8">
            <h1 className="text-4xl font-bold tracking-tight text-white">
                {editId ? "Edit" : "Add"} Transaction
            </h1>
            <AddTransactionForm accounts={accounts} categories={defaultCategories} editMode={!!editId} initialData={initialData} />
        </div>
    )
}