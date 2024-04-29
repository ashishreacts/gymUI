import Btc from "./icons/Btc.svg";
import { CurrencyCode } from "./types";

const getIconByCurrencyCode = (code: CurrencyCode) => {
  switch (code) {
    case CurrencyCode.BTC:
      return <Btc />;
    // Add cases for other currency codes as needed
    default:
      // Default to Btc if no match is found
      throw new Error("Invalid currency code");
  }
};

type CryptoIconProps = {
  currencyCode: CurrencyCode;
};

export const CryptoIcon: React.FC<CryptoIconProps> = ({
  currencyCode,
}: CryptoIconProps) => {
  return getIconByCurrencyCode(currencyCode);
};
