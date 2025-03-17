import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { currencyFormat } from "@/util";
import React from "react";

type CalculatorInputProps = {
  inputLabel: string;
  amount: number[];
  lowValue: number;
  highValue: number;
  handleOnchange: (e: number[]) => void;
  isDuration?: boolean;
};

const CalculatorInput = (props: CalculatorInputProps) => {
  const { inputLabel, amount, highValue, lowValue, handleOnchange, isDuration } = props;

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between">
        <p className="font-[700]">{inputLabel}</p>
        <Input value={isDuration ? amount[0] + " tháng" : currencyFormat(amount[0])} />
      </div>
      <div>
        <Slider max={highValue} min={lowValue} value={amount} onValueChange={handleOnchange} />
        <div className="flex flex-row justify-between text-gray-500">
          <p>{isDuration ? `${lowValue} tháng` : currencyFormat(lowValue)}</p>
          <p>{isDuration ? `${highValue} tháng` : currencyFormat(highValue)}</p>
        </div>
      </div>
    </div>
  );
};

export default CalculatorInput;
