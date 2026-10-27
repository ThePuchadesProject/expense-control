import { formatCurrency } from "../helpers";

type AmountDisplayProps = {
  label?: string;
  amount: number;
  colorClass?: string;
};

export default function AmountDisplay({
  label,
  amount,
  colorClass = "text-black",
}: AmountDisplayProps) {
  return (
    <p className="text-2xl text-orange-400 font-bold">
      {label && `${label}: `}
      <span className={`font-black ${colorClass}`}>
        {formatCurrency(amount)}
      </span>
    </p>
  );
}
