/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useCallback, useEffect, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import { usePageConfig } from '../../store/PageConfig';
import * as S from './styles';

interface IBannerProps {
  content: BannerContent[];
}

export interface BannerContent {
  path: string;
  backgroundColor: string;
  imagem: {
    url: string;
    alt: string;
  };
}

const Banner: React.FC<IBannerProps> = ({ content }) => {
  const { getHeaderIsVisible } = usePageConfig();

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
  };

  return (
    <S.Container HeaderIsVisible={getHeaderIsVisible}>
      <span>.</span>
      <Slider {...settings}>
        {content.map(item => (
          <a href={item.path} key={item.imagem.url}>
            <div style={{ background: `${item.backgroundColor}` }}>
              <img src={item.imagem.url} alt={item.imagem.alt} />
            </div>
          </a>
        ))}
      </Slider>
    </S.Container>
  );
};

export default Banner;
