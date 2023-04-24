import { SvgXml } from 'react-native-svg';

interface Props {
  color?: string;
}

export function SmileMeh({ color }: Props) {
  const markup = `<svg xmlns="http://www.w3.org/2000/svg" width="65" height="64" fill="none"><path fill="${
    color ? color : '#737373'
  }" d="M32.5 6a26 26 0 1 0 26 26 26.027 26.027 0 0 0-26-26Zm0 48a22 22 0 1 1 22-22 22.025 22.025 0 0 1-22 22Zm12-14a2 2 0 0 1-2 2h-20a2 2 0 0 1 0-4h20a2 2 0 0 1 2 2Zm-24-13a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm24 0a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"/></svg>
  `;

  return <SvgXml xml={markup} />;
}
