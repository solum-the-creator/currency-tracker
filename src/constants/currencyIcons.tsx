import BTCIcon from '@assets/images/icons/bitcoin.svg';
import BNBIcon from '@assets/images/icons/bnb.svg';
import BRLIcon from '@assets/images/icons/brl.svg';
import CanadianDollarIcon from '@assets/images/icons/canadian-dollar.svg';
import DollarIcon from '@assets/images/icons/dollar.svg';
import ETHIcon from '@assets/images/icons/eth.svg';
import EuroIcon from '@assets/images/icons/euro.svg';
import YenIcon from '@assets/images/icons/yen.svg';
import { CurrenciesCode } from '@customTypes/currency';

export type SVGIcon = React.FC<React.SVGProps<SVGElement>>;

export const currencyIcons: Record<CurrenciesCode, React.ReactElement<SVGIcon>> = {
  USD: <DollarIcon />,
  BRL: <BRLIcon />,
  EUR: <EuroIcon />,
  CAD: <CanadianDollarIcon />,
  BTC: <BTCIcon />,
  JPY: <YenIcon />,
  ETH: <ETHIcon />,
  BNB: <BNBIcon />,
};
