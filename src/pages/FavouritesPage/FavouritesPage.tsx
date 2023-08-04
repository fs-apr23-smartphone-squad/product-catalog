import React, { useEffect, useState } from 'react';
import { Card } from '../../components/Card';
import { getPhonesByIds } from '../../components/Helpers/fetchClient';
import { Phone } from '../../components/Types/Types';
import '../../components/Cardlist/Cardlist.scss';
import './FavouritesPage.scss';

interface Props {
  phoneIdsInFavourites: number[];
  removeFromFavourites: (id: number) => void;
  phoneIdsInCart: number[];
  handleAddToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  handleAddToFavourites: (id: number) => void;
}

export const FavouritesPage: React.FC<Props> = ({
  phoneIdsInFavourites,
  removeFromFavourites,
  phoneIdsInCart,
  handleAddToCart,
  removeFromCart,
  handleAddToFavourites,
}) => {

  const [
    favPhones, setFavPhones,
  ] = useState<Phone[]>([]);

  useEffect(() => {
    async function getPhonesFromServer(ids: number[]) {
      if (ids.length === 0) {
        setFavPhones([]);

        return;
      }

      try {
        const phonesFromServer = await getPhonesByIds(
          ids.map((id) => String(id)),
        );

        setFavPhones(phonesFromServer);
      } catch {
        throw new Error('Unable to load data');
      }
    }

    getPhonesFromServer(phoneIdsInFavourites);
  }, [phoneIdsInFavourites]);

  useEffect(() => {
    localStorage.setItem('phoneIdsInFavourites', JSON.stringify(phoneIdsInFavourites));
  }, [phoneIdsInFavourites]);

  return (
    <>
      <h1 className='fav_text'>Favourites</h1>
      {phoneIdsInFavourites.length ? (
        <h3 className='fav_text--items'>{`${phoneIdsInFavourites.length} items`}</h3>
      ) : (
        <h3 className='fav_text--items'>No favourite products</h3>
      )}

      <div className='grid'>
        {favPhones.map(phone => (
          <Card
            phone={phone}
            phoneIdsInFavourites={phoneIdsInFavourites}
            removeFromFavourites={removeFromFavourites}
            phoneIdsInCart={phoneIdsInCart}
            handleAddToCart={handleAddToCart}
            removeFromCart={removeFromCart}
            handleAddToFavourites={handleAddToFavourites}
          />
        ))}
      </div>
    </>
  );
};
