import { SvgXml } from 'react-native-svg';

interface Props {
  color?: string;
}

export function SmileAngry({ color }: Props) {
  const markup = `<svg xmlns="http://www.w3.org/2000/svg" width="65" height="64" fill="none"><path fill="${
    color ? color : '#737373'
  }" d="M23.5 38a3 3 0 1 1 0-5.999 3 3 0 0 1 0 5.999Zm18-6a3 3 0 1 0 0 5.999 3 3 0 0 0 0-5.999Zm17 0a26 26 0 1 1-26-26 26.027 26.027 0 0 1 26 26Zm-4 0a22 22 0 1 0-22 22 22.025 22.025 0 0 0 22-22ZM43.39 20.335 32.5 27.597l-10.89-7.25a2 2 0 1 0-2.22 3.33l12 8a2 2 0 0 0 2.22 0l12-8a2 2 0 1 0-2.22-3.33v-.012Zm-3.782 24C37.5 42.932 35.485 42 32.5 42c-2.985 0-5 .932-7.108 2.335a2 2 0 0 0 2.216 3.33C29.233 46.585 30.5 46 32.5 46c2 0 3.267.585 4.892 1.665a2 2 0 1 0 2.215-3.33Z"/></svg>
  `;

  return <SvgXml xml={markup} />;
}
