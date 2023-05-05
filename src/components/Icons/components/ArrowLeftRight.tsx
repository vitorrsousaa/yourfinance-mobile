import { SvgXml } from 'react-native-svg';

interface Props {
  isActive?: boolean;
}

export function ArrowLeftRight({ isActive }: Props) {
  const markup = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none"><path fill="${
    isActive ? '#101010' : '#a6a6a6'
  }" d="m20.656 17.03-3 3a.75.75 0 0 1-1.062-1.06l1.72-1.72H5.126a.75.75 0 1 1 0-1.5h13.19l-1.72-1.72a.75.75 0 1 1 1.06-1.06l3 3a.747.747 0 0 1 0 1.06Zm-13.062-6a.75.75 0 0 0 1.062-1.06l-1.72-1.72h13.189a.75.75 0 1 0 0-1.5H6.935l1.72-1.72a.75.75 0 1 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06l3 3Z"/></svg>
  `;

  return <SvgXml xml={markup} />;
}
