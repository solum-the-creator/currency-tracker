import { currencyIcons } from '@constants/currencyIcons';
import { CurrenciesCode, EnrichedCurrency } from '@customTypes/currency';
import React from 'react';
import { connect } from 'react-redux';

import { RootState } from '@/store';
import { selectCurrencyByCode } from '@/store/currencies-info/selectors';

import syles from './index.module.scss';

type CurrencyDataProps = {
  code: CurrenciesCode;
  selectedData: EnrichedCurrency | null;
};

class CurrencyData extends React.PureComponent<CurrencyDataProps> {
  getIcon = (code: CurrenciesCode): React.ReactNode => {
    return currencyIcons[code];
  };

  render(): React.ReactNode {
    const { code, selectedData } = this.props;

    return (
      <div className={syles.currencyData}>
        <div className={syles.icon}>{this.getIcon(code)}</div>
        <div className={syles.info}>
          {selectedData && <div className={syles.name}>{selectedData.name}</div>}
          <div className={syles.code} data-testid="currency-code">
            {code}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState, ownProps: { code: CurrenciesCode }) => ({
  selectedData: selectCurrencyByCode(ownProps.code)(state),
});

export default connect(mapStateToProps)(CurrencyData);
