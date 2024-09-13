import AustralianDollarIcon from '@assets/images/icons/australian-dollar.svg';
import BitcoinIcon from '@assets/images/icons/bitcoin.svg';
import BovespaIcon from '@assets/images/icons/bovespa.svg';
import CanadianDollarIcon from '@assets/images/icons/canadian-dollar.svg';
import DollarIcon from '@assets/images/icons/dollar.svg';
import EuroIcon from '@assets/images/icons/euro.svg';
import IfixIcon from '@assets/images/icons/ifix.svg';
import LibraIcon from '@assets/images/icons/libra.svg';
import PesoIcon from '@assets/images/icons/peso-argentino.svg';
import YuanIcon from '@assets/images/icons/won.svg';
import YenIcon from '@assets/images/icons/yen.svg';

export type SVGIcon = React.FC<React.SVGProps<SVGElement>>;

export type Currency = {
  id: string;
  name: string;
  value: string;
  icon?: React.ReactNode;
};

export const currencyListCurrencies: Currency[] = [
  {
    id: '1',
    name: 'Commercial Dollar',
    value: 'R$ 5,13',
    icon: <DollarIcon />,
  },
  {
    id: '2',
    name: 'Argentine Peso',
    value: 'R$ 0,02',
    icon: <PesoIcon />,
  },
  {
    id: '3',
    name: 'Canadian Dollar',
    value: 'R$ 5,13',
    icon: <CanadianDollarIcon />,
  },
  {
    id: '4',
    name: 'Yen',
    value: 'R$ 5,13',
    icon: <YenIcon />,
  },
  {
    id: '5',
    name: 'Australian Dollar',
    value: 'R$ 5,13',
    icon: <AustralianDollarIcon />,
  },
  {
    id: '6',
    name: 'Yuan',
    value: 'R$ 5,13',
    icon: <YuanIcon />,
  },
  {
    id: '7',
    name: 'Euro',
    value: 'R$ 5,13',
    icon: <EuroIcon />,
  },
  {
    id: '8',
    name: 'Bitcoin',
    value: 'R$ 122.148,71',
    icon: <BitcoinIcon />,
  },
  {
    id: '9',
    name: 'Libra',
    value: 'R$ 6,16',
    icon: <LibraIcon />,
  },
];

export const currencyListStocks: Currency[] = [
  {
    id: '1',
    name: 'Bovespa Index',
    value: '0.15%',
    icon: <BovespaIcon />,
  },
  {
    id: '2',
    name: 'IFIX',
    value: '0.15%',
    icon: <IfixIcon />,
  },
];
