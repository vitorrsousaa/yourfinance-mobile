import { SvgXml } from 'react-native-svg';

interface Props {
  color?: string;
}
export function Arrow({ color }: Props) {
  const markup = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="${
    color ? color : '#FAFAFA'
  }" d="M15.53 18.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L8.56 12l6.97 6.97Z"/></svg>
  `;

  return <SvgXml xml={markup} />;
}
