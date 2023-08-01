import React from 'react';
import { Card } from '../Card/Card';
import { Phone } from '../Types/Types';
import './Cardlist.scss';
/* eslint-disable */
interface Props {
  phones: Phone[];
}

export const Cardlist: React.FC<Props> = ({ phones }) => {
  return (
    <div className='grid'>
      {phones.map((phone: Phone) => (
        <div key={phone.id} className="card-container">
          <Card phone={phone} />
        </div>
      ))}
    </div>
  );
};
