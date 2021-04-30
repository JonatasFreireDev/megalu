import React from 'react';
import Banner, { BannerContent } from '../../components/Banner';

import * as S from './styles';

const bannerContent: BannerContent[] = [
  {
    path: '/',
    backgroundColor: '#0086FF',
    imagem: {
      url: 'https://s.mlcdn.com.br/banner/campanhas/2904deskppdiadasmaes.png',
      alt: 'img',
    },
  },
  {
    path: '/',
    backgroundColor: '#0086FF',
    imagem: {
      url:
        'https://s.mlcdn.com.br/banner/campanhas/destacao_cartaomagalu_v3.png',
      alt: 'img',
    },
  },
  {
    path: '/',
    backgroundColor: '#0086FF',
    imagem: {
      url:
        'https://s.mlcdn.com.br/banner/campanhas/0104deskparceiromagaluselv2.png',
      alt: 'img',
    },
  },
  {
    path: '/',
    backgroundColor: '#0086FF',
    imagem: {
      url: 'https://s.mlcdn.com.br/banner/campanhas/2704desk3presentes.png',
      alt: 'img',
    },
  },
  {
    path: '/',
    backgroundColor: '#0086FF',
    imagem: {
      url: 'https://s.mlcdn.com.br/banner/campanhas/2704desk3presentes.png',
      alt: 'img',
    },
  },
  {
    path: '/',
    backgroundColor: '#0086FF',
    imagem: {
      url: 'https://s.mlcdn.com.br/banner/campanhas/2704desk3presentes.png',
      alt: 'img',
    },
  },
  {
    path: '/',
    backgroundColor: '#fff',
    imagem: {
      url:
        'https://s.mlcdn.com.br/banner/campanhas/2604_ADS_Desk_Dell_KV360K.png',
      alt: 'img',
    },
  },
];

const Home: React.FC = () => {
  return (
    <>
      <S.Container>
        <Banner content={bannerContent} />
        <h1>aew</h1>
      </S.Container>
    </>
  );
};

export default Home;
