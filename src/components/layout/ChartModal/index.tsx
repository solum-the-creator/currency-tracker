import { Modal } from '@components/layout/Modal';
import { Button } from '@components/ui/Button';
import { Input } from '@components/ui/Input';
import { MarketData } from '@customTypes/market';
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
      openPrice: props.openPrice,
      closePrice: props.closePrice,
      highPrice: props.highPrice,
      lowPrice: props.lowPrice,
    };
  }

  handleChange = (field: keyof ChartModalState, value: string) => {
    this.setState({ [field]: parseFloat(value) } as Pick<ChartModalState, keyof ChartModalState>);
  };

  handleSave = () => {
    const { openPrice, closePrice, highPrice, lowPrice } = this.state;
    const { onSave, onClose } = this.props;

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
        <div>
          <p className={styles.date}>{date}</p>
          <div className={styles.price}>
            Open:
            <Input
              name="open_price"
              value={openPrice}
              onChange={(value) => this.handleChange('openPrice', value)}
              type="number"
            />
          </div>
          <div className={styles.price}>
            Close:
            <Input
              name="close_price"
              value={closePrice}
              onChange={(value) => this.handleChange('closePrice', value)}
              type="number"
            />
          </div>
          <div className={styles.price}>
            High:
            <Input
              name="high_price"
              value={highPrice}
              onChange={(value) => this.handleChange('highPrice', value)}
              type="number"
            />
          </div>
          <div className={styles.price}>
            Low:
            <Input
              name="low_price"
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
          <Button type="button" onClick={this.handleSave}>
            Save
          </Button>
        </div>
      </Modal>
    );
  }
}
