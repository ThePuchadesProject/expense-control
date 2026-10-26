import { formatCurrency } from "../helpers";

type AmountDisplayProps = {
  label: string;
  amount: number;
};

export default function AmountDisplay({ label, amount }: AmountDisplayProps) {
  return (
    <p className="text-2xl text-orange-400 font-bold">
      {label}: {""}
      <span className="font-black text-white">{formatCurrency(amount)}</span>
    </p>
  );
}
