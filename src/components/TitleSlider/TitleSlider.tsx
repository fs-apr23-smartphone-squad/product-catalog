import { useEffect, useRef, useState } from 'react';
import './TitleSlider.scss';

const images = [
  'https://api.smartphonesquad.shop/img/banner-phones.png',
  'https://api.smartphonesquad.shop/img/banner-tablets.png',
  'https://api.smartphonesquad.shop/img/banner-accessories.png',
];
const delay = 10000;

export const TitleSlider = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<any | null>(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();

    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1),
      delay,
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  const handleBackClick = () => {
    if (index === 0) {
      setIndex(2);

      return;
    }

    setIndex(prevIndex => prevIndex - 1);
  };

  const handleForwardClick = () => {
    if (index === 2) {
      setIndex(0);

      return;
    }

    setIndex(prevIndex => prevIndex + 1);
  };

  return (
    <div className="slideshow">
      <div className="slideshow__container">
        <div className="slideshow__back" onClick={handleBackClick}></div>

        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {images.map((image) => (
            <img src={image} alt="banner image" className="slide"/>
          ))}
        </div>

        <div className="slideshow__forward" onClick={handleForwardClick}></div>
      </div>

      <div className="slideshowDots">
        {images.map((image, idx) => (
          <div
            className="slideshowDots__container"
            onClick={() => {
              setIndex(idx);
            }}
          >
            <div
              key={image}
              className={`slideshowDots__dot${index === idx ? ' active' : ''}`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};
