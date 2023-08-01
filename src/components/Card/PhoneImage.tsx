import React from 'react';
/* eslint-disable */
export interface Props {
  src: string;
}
const Base = 'https://api.smartphonesquad.shop/';
export const PhoneImage: React.FC<Props> = ({ src }) => {
  return (
    <img
      src={Base + src}
      alt="Apple iPhone Xs 64GB Silver"
      className="card_image"
    />
  );
};
