import './SocialCard.scss';
import { Icon } from '@iconify/react';

/* eslint-disable */
type Props = {
  devName: string;
  links: {
    gmail: string;
    github: string;
    linkedin: string;
  };
  photo: string;
}

export const SocialCard: React.FC<Props> = ({
  devName,
  links,
  photo,
}) => {
  return (
    <div className="social__card">
      <div className="img-bx">
        <img src={photo} alt="developer img" />
      </div>
      <div className="content">
        <div className="detail">
          <h2>{devName}<br /><span>Fullstack developer</span></h2>
          <div className="socialbtns">
            <ul>
              <li><a
                href={links.gmail}
                className="fa fa-lg fa-google-plus"
                target="_blank"
              ></a></li>
              <li><a
                href={links.github}
                className="fa fa-lg fa-github"
                target="_blank"
              ></a></li>
              <li><a
                href={links.linkedin}
                className="fa fa-lg fa-linkedin"
                target="_blank"
              ></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
