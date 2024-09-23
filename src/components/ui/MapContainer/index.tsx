import mapboxgl from 'mapbox-gl';
import React from 'react';

import styles from './index.module.scss';

type MapContainerProps = Record<string, never>;

type MapContainerState = {
  lng: number;
  lat: number;
};

export class MapContainer extends React.Component<MapContainerProps, MapContainerState> {
  private mapContainerRef: React.RefObject<HTMLDivElement>;

  private mapInstance: mapboxgl.Map | null = null;

  constructor(props: MapContainerProps) {
    super(props);

    this.state = {
      lng: 27.555,
      lat: 53.906,
    };

    this.mapContainerRef = React.createRef();
  }

  componentDidMount(): void {
    mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN;

    if (this.mapContainerRef.current) {
      const { lng, lat } = this.state;

      this.mapInstance = new mapboxgl.Map({
        container: this.mapContainerRef.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [lng, lat],
        zoom: 12,
      });
    }
  }

  componentWillUnmount(): void {
    if (this.mapInstance) {
      this.mapInstance.remove();
    }
  }

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
