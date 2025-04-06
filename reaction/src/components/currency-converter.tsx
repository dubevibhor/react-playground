import React, { useCallback, useEffect, useState } from "react";

type CurrencyDataType = {
  result: string;
  time_last_update_unix: number;
  time_last_update_utc: string;
  time_next_update_unix: number;
  time_next_update_utc: string;
  base_code: string;
  conversion_rates: Record<string, number>;
};

export const CurrencyConverter = () => {
  const [sourceCurrency, setSourceCurrency] = useState<string>("");
  const [targetCurrency, setTargetCurrency] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [convertedAmount, setConvertedAmount] = useState<number>(0);
  const [currencyData, setCurrencyData] = useState<CurrencyDataType | null>(
    null
  );

  useEffect(() => {
    // console.log(data);
    fetchCurrencies().then((data) => {
      setCurrencyData(data);
    });
  }, []);

  useEffect(() => {
    if (!currencyData?.conversion_rates) {
      console.log("error");
      return;
    }
    const targetAmount = currencyCalculator(
      currencyData?.conversion_rates[sourceCurrency],
      currencyData?.conversion_rates[targetCurrency],
      amount
    );
    setConvertedAmount(targetAmount);
  }, [amount]);
  const fetchCurrencies = async () => {
    try {
      const res = await fetch(
        "https://v6.exchangerate-api.com/v6/640293ac91797ffe7646a03e/latest/USD"
      );
      if (!res.ok) {
        throw new Error("API Fetch Didn't Work");
      }
      const jsonResponse = await res.json();
      return jsonResponse;
    } catch (err) {
      console.error(err);
      return null;
    }
  };
  const calculateConversion: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(currencyData?.conversion_rates[sourceCurrency]);
    if (!currencyData?.conversion_rates) {
      console.log("error");
      return;
    }
    const targetAmount = currencyCalculator(
      currencyData?.conversion_rates[sourceCurrency],
      currencyData?.conversion_rates[targetCurrency],
      amount
    );
    setConvertedAmount(targetAmount);
  };
  const handleTargetCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTargetCurrency(e.target.value);
  };
  const handleSourceCurrencyChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSourceCurrency(e.target.value);
  };
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };
  const currencyCalculator = useCallback((
    source: number,
    target: number,
    userInput: number
  ) => {
    return source * target * userInput;
  },[]);
  return (
    <main>
      <form onSubmit={calculateConversion}>
        <select value={sourceCurrency} onChange={handleSourceCurrencyChange}>
          <option value="">Select Source Currency</option>
          {currencyData?.conversion_rates &&
            Object.keys(currencyData?.conversion_rates).map((countryCode) => {
              return (
                <option key={countryCode} value={countryCode}>
                  {countryCode}
                </option>
              );
            })}
        </select>
        <br />
        <select value={targetCurrency} onChange={handleTargetCurrencyChange}>
          <option value="">Select Target Currency</option>
          {currencyData?.conversion_rates &&
            Object.keys(currencyData?.conversion_rates).map((countryCode) => {
              return (
                <option key={countryCode} value={countryCode}>
                  {countryCode}
                </option>
              );
            })}
        </select>
        <br />

        <div>
          <label htmlFor="inputAmount">
            Please enter the Amount in Source Currency
          </label>
          <input
            id="inputAmount"
            type="number"
            onChange={handleAmountChange}
            value={amount}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <h3>
        Source Currency: {sourceCurrency} =&gt; {amount}
      </h3>
      <h3>
        Target Currency: {targetCurrency} =&gt; {convertedAmount}
      </h3>
    </main>
  );
};
