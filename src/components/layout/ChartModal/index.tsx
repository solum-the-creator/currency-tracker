import { Modal } from '@components/layout/Modal';
import { Button } from '@components/ui/Button';
import { Input } from '@components/ui/Input';
import { MarketData } from '@customTypes/market';
import { convertToShortPrice } from '@utils/convertUtils';
import { formatDate } from '@utils/dateUtils';
import React from 'react';

import styles from './index.module.scss';

type MarketDataWithoutTime = Omit<MarketData, 'time_open' | 'time_close'>;

type ChartModalProps = {
  date: string;
  openPrice: number;
  closePrice: number;
  highPrice: number;
  lowPrice: number;
  onSave: (data: MarketDataWithoutTime) => void;
  onClose?: () => void;
};

type ChartModalState = {
  openPrice: number;
  closePrice: number;
  highPrice: number;
  lowPrice: number;
};

export class ChartModal extends React.Component<ChartModalProps, ChartModalState> {
  constructor(props: ChartModalProps) {
    super(props);
    this.state = {
      openPrice: convertToShortPrice(props.openPrice),
      closePrice: convertToShortPrice(props.closePrice),
      highPrice: convertToShortPrice(props.highPrice),
      lowPrice: convertToShortPrice(props.lowPrice),
    };
  }

  handleChange = (field: keyof ChartModalState, value: string) => {
    this.setState({ [field]: parseFloat(value) } as Pick<ChartModalState, keyof ChartModalState>);
  };

  handleSave = () => {
    const { openPrice, closePrice, highPrice, lowPrice } = this.state;
    const { onSave, onClose } = this.props;

    if (openPrice < 0 || closePrice < 0 || highPrice < 0 || lowPrice < 0) {
      return;
    }

    onSave({
      rate_open: openPrice,
      rate_close: closePrice,
      rate_high: highPrice,
      rate_low: lowPrice,
    });

    onClose();
  };

  render(): React.ReactNode {
    const { date, onClose } = this.props;
    const { openPrice, closePrice, highPrice, lowPrice } = this.state;

    return (
      <Modal onClose={onClose}>
        <h3 className={styles.title}>Change currency price</h3>
        <div className={styles.content}>
          <p className={styles.date}>Date: {formatDate(date)}</p>
          <div className={styles.prices}>
            <Input
              name="open_price"
              label="Open price:"
              value={openPrice}
              onChange={(value) => this.handleChange('openPrice', value)}
              type="number"
            />

            <Input
              name="close_price"
              label="Close price:"
              value={closePrice}
              onChange={(value) => this.handleChange('closePrice', value)}
              type="number"
            />

            <Input
              name="high_price"
              label="High price:"
              value={highPrice}
              onChange={(value) => this.handleChange('highPrice', value)}
              type="number"
            />

            <Input
              name="low_price"
              label="Low price:"
              value={lowPrice}
              onChange={(value) => this.handleChange('lowPrice', value)}
              type="number"
            />
          </div>
        </div>
        <div className={styles.buttons}>
          <Button type="button" onClick={onClose}>
            Cancel
          </Button>
          <Button type="button" onClick={this.handleSave} className={styles.saveButton}>
            Save
          </Button>
        </div>
      </Modal>
    );
  }
}
