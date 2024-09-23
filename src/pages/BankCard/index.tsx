import { MapContainer } from '@components/ui/MapContainer';
import React from 'react';

export class BankCard extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <h1>Ban1kCard</h1>
        <MapContainer />
      </div>
    );
  }
}
