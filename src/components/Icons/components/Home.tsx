import { SvgXml } from 'react-native-svg';

interface Props {
  isActive?: boolean;
}

export function Home({ isActive }: Props) {
  const markup = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none"><path stroke="${
    isActive ? '#101010' : '#a6a6a6'
  }" stroke-width="1.5" d="m19.653 7.986-5.76-4.48a2.88 2.88 0 0 0-3.536 0l-5.76 4.48a2.881 2.881 0 0 0-1.112 2.273v7.04a2.88 2.88 0 0 0 2.88 2.88h11.52a2.88 2.88 0 0 0 2.88-2.88v-7.04a2.88 2.88 0 0 0-1.112-2.273Z" clip-rule="evenodd"/></svg>
  `;

  return <SvgXml xml={markup} />;
}
