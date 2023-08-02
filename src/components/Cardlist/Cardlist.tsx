import React, { useEffect, useState } from 'react';
import { Card } from '../Card/Card';
import { Phone } from '../Types/Types';
import './Cardlist.scss';
/* eslint-disable */
interface Props {
  phones: Phone[];
}

export const Cardlist: React.FC<Props> = ({ phones }) => {
  const [phoneIdsInCart, setPhoneIdsInCart] = useState<number[]>(() => {
    const storedIds = localStorage.getItem('phoneIds');
    return storedIds ? JSON.parse(storedIds) : []
  });

  const handleAddToCart = (id: number) => {
    setPhoneIdsInCart(prevIds => [...prevIds, id])
  }

  useEffect(() => {
    localStorage.setItem('phoneIds', JSON.stringify(phoneIdsInCart))
  }, [phoneIdsInCart])

  return (
    <div className='grid'>
      {phones.map((phone: Phone) => (
        <div key={phone.id} className="card-container">
          <Card
            phone={phone}
            onAddToCart={handleAddToCart}
            phoneIdsInCart={phoneIdsInCart}
          />
        </div>
      ))}
    </div>
  );
};