import BudgetForm from "./components/BudgetForm";

export default function App() {
  return (
    <>
      <header className="bg-orange-400 py-8 max-h-72">
        <h1 className="uppercase text-center font-black text-4xl">
          Expense Control
        </h1>
      </header>

      <div className="max-w-3xl mx-auto bg-black shadow-lg rounded-lg mt-10 p-10">
        <BudgetForm />
      </div>
    </>
  );
}
