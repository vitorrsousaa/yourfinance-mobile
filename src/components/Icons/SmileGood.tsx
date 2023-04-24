import { SvgXml } from 'react-native-svg';

interface Props {
  color?: string;
}

export function SmileGood({ color }: Props) {
  const markup = `<svg xmlns="http://www.w3.org/2000/svg" width="65" height="64" fill="none"><path fill="${
    color ? color : '#737373'
  }" d="M32.5 6a26 26 0 1 0 26 26 26.027 26.027 0 0 0-26-26Zm0 48a22 22 0 1 1 22-22 22.025 22.025 0 0 1-22 22Zm-12-27a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm26 0a2 2 0 0 1-2 2h-6a2 2 0 0 1 0-4h6a2 2 0 0 1 2 2Zm-2.27 12c-2.572 4.447-6.847 7-11.73 7s-9.157-2.55-11.733-7a2.002 2.002 0 0 1 2.95-2.587c.21.16.384.36.516.587 1.864 3.227 4.8 5 8.267 5 3.468 0 6.403-1.775 8.27-5a1.998 1.998 0 0 1 3.372-.273A2 2 0 0 1 44.23 39Z"/></svg>
  `;

  return <SvgXml xml={markup} />;
}
