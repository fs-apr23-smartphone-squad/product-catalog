import { useState } from 'react';
import { SocialCard } from '../../components/SocialCard';
import './ContactsPage.scss';
import { Loader } from '../../components/Loader';

const developers = [
  {
    devName: 'Petruliak Volodymyr',
    links: {
      gmail: 'mailto:petruliak.v@gmail.com',
      github: 'https://github.com/snuber-w',
      linkedin: 'https://www.linkedin.com/in/volodymyr-petruliak/',
    },
    photo: 'https://avatars.githubusercontent.com/u/106393188?v=4',
  },
  {
    devName: 'Balandiukh Iryna',
    links: {
      gmail: 'mailto:iryna.balandiukh@gmail.com',
      github: 'https://github.com/IrynaBalandiukh',
      linkedin: 'https://www.linkedin.com/in/iryna-balandiukh-1064b6283/',
    },
    photo: 'https://avatars.githubusercontent.com/u/73065167?s=400&u=240c03c7e60f7984b93027ffc09b249435b61c72&v=4',
  },
  {
    devName: 'Shevtsov Ihor',
    links: {
      gmail: 'mailto:contact.shevtsov@gmail.com',
      github: 'https://github.com/Shevtsooov',
      linkedin: 'https://www.linkedin.com/in/ihor--shevtsov',
    },
    photo: 'https://avatars.githubusercontent.com/u/97849888?v=4',
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
