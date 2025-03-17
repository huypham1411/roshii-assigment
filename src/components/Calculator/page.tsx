"use client";
import React, { ChangeEvent, useMemo, useState } from "react";
import CalculatorInput from "./CalculatorInput";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { currencyFormat } from "./../../util/index";

const Calculator = () => {
  const [moneyAmount, setMoneyAmount] = useState([5000000]);
  const [rentDuration, setRentDuration] = useState([3]);
  const [profit, setProfit] = useState<number>(0);
  const totalPay = useMemo(() => {
    return Number(moneyAmount[0]) + Number(moneyAmount[0]) * (profit * rentDuration[0]);
  }, [moneyAmount, profit, rentDuration]);

  const handleOnchangeMoneyAmount = (e: number[]) => {
    setMoneyAmount(e);
  };

  const handleOnchangeRenDuration = (e: number[]) => {
    setRentDuration(e);
  };

  const handleOnProfitChange = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setProfit(Number(e.target.value));
  };
  return (
    <div className="m-4 flex flex-col space-y-4">
      <CalculatorInput
        amount={moneyAmount}
        handleOnchange={handleOnchangeMoneyAmount}
        highValue={20000000}
        inputLabel="Số tiền càn vay"
        lowValue={5000000}
      />
      <CalculatorInput
        isDuration
        amount={rentDuration}
        handleOnchange={handleOnchangeRenDuration}
        highValue={72}
        inputLabel="Kỳ hạn vay"
        lowValue={3}
      />
      <div>
        <p className="font-[700]">Lãi hàng tháng</p>
        <Input placeholder="Ví dụ 2.85" suffix="%" type="number" onChange={handleOnProfitChange} />
      </div>
      <hr />
      <div className="flex flex-row justify-between">
        <div>
          <p>Tổng tiền thanh toán</p>
          <p className="font-[700]">{currencyFormat(totalPay)}</p>
        </div>
        <div>
          <p>Tổng tiền lãi</p>
          <p className="font-[700]">{currencyFormat(Number(moneyAmount[0]) * (profit * rentDuration[0]))}</p>
        </div>
      </div>
      <div>
        <p>Tổng tiền thanh toán hàng tháng</p>
        <p className="text-xl font-[700] text-purple-900">{currencyFormat(Math.round(totalPay / rentDuration[0]))}</p>
      </div>
      <Button className="w-full">
        Đăng ký ngay{" "}
        <svg fill="none" height="15" viewBox="0 0 15 15" width="15" xmlns="http://www.w3.org/2000/svg">
          <path
            clip-rule="evenodd"
            d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
            fill="currentColor"
            fill-rule="evenodd"
          ></path>
        </svg>
      </Button>
    </div>
  );
};

export default Calculator;
