import React, { useEffect, useState } from 'react';
import { Header } from '../Header';
import { Cardlist } from '../Cardlist';
import { getPhones } from '../Helpers/fetchClient';
import { Phone } from '../Types/Types';
import './Page.scss';
/* eslint-disable no-console */

export const Page = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  useEffect(() => {
    const fetchPhones = async() => {
      try {
        const fetchedPhones = await getPhones();

        setPhones(fetchedPhones);
      } catch (error) {
        console.error('Error fetching phones:', error);
      }
    };

    fetchPhones();
  }, []);

  return (
    <>
      <Header />
      <Cardlist phones={phones} />
    </>
  );
};
