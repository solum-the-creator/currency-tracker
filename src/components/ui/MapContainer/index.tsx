import { banksData } from '@constants/bankData';
import { Bank } from '@customTypes/bank';
import { CurrenciesCode } from '@customTypes/currency';
import { filterBanksByCurrency } from '@utils/filterData';
import mapboxgl from 'mapbox-gl';
import React from 'react';
import { createRoot } from 'react-dom/client';

import { BankPopup } from '../BankPopup';
import styles from './index.module.scss';

type MapContainerProps = {
  selectedCurrency?: CurrenciesCode;
};

type MapContainerState = {
  lng: number;
  lat: number;
};

export class MapContainer extends React.Component<MapContainerProps, MapContainerState> {
  private mapContainerRef: React.RefObject<HTMLDivElement>;

  private mapInstance: mapboxgl.Map | null = null;

  private markers: mapboxgl.Marker[] = [];

  constructor(props: MapContainerProps) {
    super(props);

    this.state = {
      lng: 27.555,
      lat: 53.906,
    };

    this.mapContainerRef = React.createRef();
  }

  componentDidMount(): void {
    mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN || '';

    if (this.mapContainerRef.current) {
      const { lng, lat } = this.state;

      this.mapInstance = new mapboxgl.Map({
        container: this.mapContainerRef.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [lng, lat],
        zoom: 12,
      });

      this.addBankMarkers();
    }
  }

  componentDidUpdate(prevProps: Readonly<MapContainerProps>): void {
    const { selectedCurrency } = this.props;
    if (prevProps.selectedCurrency !== selectedCurrency) {
      this.clearMarkers();
      this.addBankMarkers();
    }
  }

  componentWillUnmount(): void {
    if (this.mapInstance) {
      this.mapInstance.remove();
    }
  }

  clearMarkers = (): void => {
    this.markers.forEach((marker) => marker.remove());
    this.markers = [];
  };

  addBankMarkers = (): void => {
    if (!this.mapInstance) {
      return;
    }

    const { selectedCurrency } = this.props;

    const filteredBanks = selectedCurrency
      ? filterBanksByCurrency(selectedCurrency, banksData)
      : banksData;

    filteredBanks.forEach((bank) => {
      const popupNode = this.createPopup(bank);

      const marker = new mapboxgl.Marker()
        .setLngLat(bank.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 25 }).setDOMContent(popupNode))
        .addTo(this.mapInstance);

      this.markers.push(marker);
    });
  };

  createPopup = (bank: Bank): HTMLDivElement => {
    const popupNode = document.createElement('div');
    const root = createRoot(popupNode);
    root.render(<BankPopup name={bank.name} currencies={bank.currencies} />);
    return popupNode;
  };

  render(): React.ReactNode {
    return (
      <div
        className={styles.mapContainer}
        style={{ height: '460px', width: '100%' }}
        ref={this.mapContainerRef}
      />
    );
  }
}
