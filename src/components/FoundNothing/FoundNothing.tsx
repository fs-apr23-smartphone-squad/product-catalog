import React from 'react';
import './FoundNothing.scss';

/* eslint-disable */
interface Props {
  appliedQuery: string;
}

export const FoundNothing: React.FC<Props> = ({ appliedQuery }) => (
  <div className='nothing'>
    <h2 className='nothing__text'>
      No results for
      <span className='nothing__query'>{` ${appliedQuery}`}</span>
      .😟
    </h2>
    <h3 className='nothing__text'>
      Try checking your spelling or use more general terms
    </h3>
  </div>
);
