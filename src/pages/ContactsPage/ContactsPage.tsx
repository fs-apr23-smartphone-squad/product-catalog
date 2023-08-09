import { useState } from 'react';
import { SocialCard } from '../../components/SocialCard';
import './ContactsPage.scss';
import { Loader } from '../../components/Loader';

const developers = [
  {
    devName: 'Petruliak Volodymyr',
    links: {
      gmail: 'mailto:',
      github: '',
      linkedin: '',
    },
    photo: '',
  },
  {
    devName: 'Balandiukh Iryna',
    links: {
      gmail: 'mailto:',
      github: '',
      linkedin: '',
    },
    photo: '',
  },
  {
    devName: 'Shevtsov Ihor',
    links: {
      gmail: 'mailto:',
      github: '',
      linkedin: '',
    },
    photo: '',
  },
  {
    devName: 'Cherepinec Anton',
    links: {
      gmail: 'mailto:',
      github: '',
      linkedin: '',
    },
    photo: '',
  },
  {
    devName: 'Andrii Mashutikov',
    links: {
      gmail: 'mailto:mashutikov.andrii@gmail.com',
      github: 'https://github.com/amashutikov',
      linkedin: 'https://www.linkedin.com/in/andrii-mashutikov-1b8236284/',
    },
    // eslint-disable-next-line max-len
    photo: 'https://avatars.githubusercontent.com/u/129765597?s=400&u=301000aacc76ba04d64454a3efb67dde566284ec&v=4',
  },
];

export const ContactsPage = () => {
  const [isLoaderVisisble, setIsLoaderVisible] = useState(true);

  setTimeout(() => (setIsLoaderVisible(false)), 500);

  return (
    isLoaderVisisble
      ? <Loader />
      : (
        <>
          <h1 className='contacts__title'>Created by:</h1>

          <div className="contacts__container">
            {developers.map(developer => (
              <SocialCard
                key={developer.devName}
                links={developer.links}
                photo={developer.photo}
                devName={developer.devName}
              />
            ))}
          </div>
        </>
      )
  );
};
