import { SvgXml } from 'react-native-svg';

interface Props {
  color?: string;
}
export function Currency({ color }: Props) {
  const markup = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="${
    color ? color : '#101010'
  }" d="M14.25 11.25h-1.5v-6h.75a3 3 0 0 1 3 3 .75.75 0 1 0 1.5 0 4.504 4.504 0 0 0-4.5-4.5h-.75v-1.5a.75.75 0 1 0-1.5 0v1.5h-.75a4.5 4.5 0 0 0 0 9h.75v6h-1.5a3 3 0 0 1-3-3 .75.75 0 1 0-1.5 0 4.505 4.505 0 0 0 4.5 4.5h1.5v1.5a.75.75 0 1 0 1.5 0v-1.5h1.5a4.5 4.5 0 1 0 0-9Zm-3.75 0a3 3 0 0 1 0-6h.75v6h-.75Zm3.75 7.5h-1.5v-6h1.5a3 3 0 0 1 0 6Z"/></svg>
  `;

  return <SvgXml xml={markup} />;
}
