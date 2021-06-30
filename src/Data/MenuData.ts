export interface IPropsMenu {
  title: string;
  image?: string;
  data: {
    name: string;
    path: string;
  }[];
}

export const MenuData: IPropsMenu[] = [
  {
    title: 'teste',
    data: [
      { name: 'teste', path: '/' },
      { name: 'teasdste', path: '/' },
      { name: 'teasdstfsde', path: '/' },
    ],
  },
  {
    title: 'Celulares',
    image:
      'https://s.mlcdn.com.br/banner/campanhas/0704_ADS_Menu_PhilcoTE_.png',
    data: [
      { name: 'Acessórios originais Apple', path: '/' },
      { name: 'Acessórios originais Samsung', path: '/' },
      { name: 'iPhone 12', path: '/' },
      { name: 'iPhone 12 Pro Max', path: '/' },
      { name: 'Galaxy S21 Ultra', path: '/' },
      { name: 'Galaxy S21', path: '/' },
      { name: 'Galaxy S20 FE', path: '/' },
      { name: 'Motorola G9 Plus', path: '/' },
      { name: 'Motorola G9 Play', path: '/' },
      { name: 'Motorola Edge', path: '/' },
    ],
  },
  {
    title: 'Móveis',
    image: 'https://s.mlcdn.com.br/banner/campanhas/bannermenumo.png',
    data: [
      { name: 'Guarda-roupas e Roupeiros', path: '/' },
      { name: 'Cozinhas Compactas', path: '/' },
      { name: 'Racks', path: '/' },
      { name: 'Camas Box e Conjugados', path: '/' },
      { name: 'Colchões', path: '/' },
      { name: 'Sofás', path: '/' },
      { name: 'Painéis para tv', path: '/' },
      { name: 'Mesas para Computador', path: '/' },
      { name: 'e Escrivaninhas', path: '/' },
      { name: 'Mesas de Jantar', path: '/' },
    ],
  },
  {
    title: 'Eletrodomésticos',
    image:
      'https://s.mlcdn.com.br/banner/campanhas/2603_Promo_Menu_LancamentoRefriConsul_03.png',
    data: [
      { name: 'Geladeira', path: '/' },
      { name: 'Micro-ondas', path: '/' },
      { name: 'Lavadora de roupas', path: '/' },
      { name: 'Lava e seca', path: '/' },
      { name: 'Fogão', path: '/' },
      { name: 'Cooktop', path: '/' },
      { name: 'Ar condicionado', path: '/' },
      { name: 'Máquinas de Costura', path: '/' },
    ],
  },
  {
    title: 'TV e Video',
    image:
      'https://s.mlcdn.com.br/banner/campanhas/0904_ADS_Banner-menu_SSGET_.png',
    data: [
      { name: 'Smart Tv', path: '/' },
      { name: 'Tv Led', path: '/' },
      { name: 'Tv 4K', path: '/' },
      { name: 'Monitor TV', path: '/' },
      { name: 'Home Theater', path: '/' },
      { name: 'Soundbar', path: '/' },
      { name: 'Dvd Player', path: '/' },
      { name: 'Projetores', path: '/' },
      { name: 'Chromecast', path: '/' },
    ],
  },
  {
    title: 'Informatica',
    image: 'https://s.mlcdn.com.br/banner/campanhas/2903_ADS_Menu_SSG_V2.png',
    data: [
      { name: 'Notebooks', path: '/' },
      { name: 'Computadores', path: '/' },
      { name: 'All in One', path: '/' },
      { name: 'Monitores', path: '/' },
      { name: 'Macbook', path: '/' },
      { name: 'Impressoras', path: '/' },
      { name: 'Pen Drive', path: '/' },
      { name: 'HD Externo', path: '/' },
      { name: 'Roteador', path: '/' },
      { name: 'Tablets', path: '/' },
    ],
  },
];
