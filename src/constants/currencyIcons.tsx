import BRLIcon from '@assets/images/icons/brl.svg';
import BYNIcon from '@assets/images/icons/byn.svg';
import CanadianDollarIcon from '@assets/images/icons/canadian-dollar.svg';
import DollarIcon from '@assets/images/icons/dollar.svg';
import EuroIcon from '@assets/images/icons/euro.svg';
import RUBIcon from '@assets/images/icons/rub.svg';
import YuanIcon from '@assets/images/icons/won.svg';
import YenIcon from '@assets/images/icons/yen.svg';
import { CurrenciesCode } from '@customTypes/currency';

export type SVGIcon = React.FC<React.SVGProps<SVGElement>>;

export const currencyIcons: Record<CurrenciesCode, React.ReactElement<SVGIcon>> = {
  USD: <DollarIcon />,
  BRL: <BRLIcon />,
  EUR: <EuroIcon />,
  CAD: <CanadianDollarIcon />,
  CNY: <YuanIcon />,
  JPY: <YenIcon />,
  BYN: <BYNIcon />,
  RUB: <RUBIcon />,
};
