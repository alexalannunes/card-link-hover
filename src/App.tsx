import { LuUser2 } from 'react-icons/lu';
import { FaLink } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';
import { useState } from 'react';
import clx from 'classnames';
import './App.css';

type IconLabelType = 'user' | 'site' | 'email' | 'instagram';

interface Icon {
  iconLabel: IconLabelType;
  icon: JSX.Element;
  link: string
}

const icons: Icon[] = [
  {
    iconLabel: 'user',
    icon: <LuUser2 />,
    link: '/',
  },
  {
    iconLabel: 'site',
    icon: <FaLink />,
    link: 'https://alexalannunes.vercel.app/?ref=repository'
  },
  {
    iconLabel: 'email',
    icon: <MdOutlineEmail />,
    link: 'mailto:alexalannunes@gmail.com'
  },
  {
    iconLabel: 'instagram',
    icon: <FaInstagram />,
    link: 'https://www.instagram.com/alexalannunes'
  },
];

function App() {
  const [currentHover, setCurrentHover] = useState<IconLabelType | string>('');
  return (
    <div className="card">
      <div className="card__title roboto-medium relative">
        <div className="card__title__item">
          <span
            className={clx({
              'card__title--active': ['user', 'email'].includes(currentHover),
              'card__title--disabled':
                currentHover && !['user', 'email'].includes(currentHover),
            })}
          >
            alexalannunes
          </span>
          <div
            className={clx('card__title__item__hover', {
              'card__title__item__hover--active': currentHover === 'user',
            })}
            data-title="Name"
          />
        </div>
        <div className="card__title__item">
          <div className="relative">
            <span
              className={clx({
                'card__title--active': ['email', 'instagram'].includes(
                  currentHover
                ),
                'card__title--disabled':
                  currentHover &&
                  !['email', 'instagram'].includes(currentHover),
              })}
            >
              @
            </span>
          </div>
          <div className="relative">
            <span
              className={clx({
                'card__title--active': ['site', 'email', 'instagram'].includes(
                  currentHover
                ),
                'card__title--disabled':
                  currentHover &&
                  !['site', 'email', 'instagram'].includes(currentHover),
              })}
            >
              vercel.app
            </span>
            <div
              className={clx('card__title__item__hover', {
                'card__title__item__hover--active': currentHover === 'site',
              })}
              data-title="Website"
            />
          </div>
          <div
            className={clx('card__title__item__hover', {
              'card__title__item__hover--active': currentHover === 'instagram',
            })}
            data-title="Instagram"
          />
        </div>
        <div
          className={clx('card__title__item__hover', {
            'card__title__item__hover--active': currentHover === 'email',
          })}
          data-title="Email"
        />
      </div>
      <div className="card__icons">
        {icons.map((el) => (
          <a
            href={el.link}
            rel='noreferrer noopener'
            target='_blank'
            key={el.iconLabel}
            className="card__icons__button"
            onMouseOver={() => setCurrentHover(el.iconLabel)}
            onMouseLeave={() => setCurrentHover('')}
          >
            {el.icon}
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;