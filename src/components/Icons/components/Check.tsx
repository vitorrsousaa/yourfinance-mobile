import { SvgXml } from 'react-native-svg';

interface Props {
  color?: string;
}
export function Check({ color }: Props) {
  const markup = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" fill="none"><path fill="${
    color ? color : '#FAFAFA'
  }" d="m11.56 1.247-7 7a.437.437 0 0 1-.62 0L.878 5.185a.438.438 0 1 1 .619-.62L4.25 7.32 10.94.628a.438.438 0 1 1 .62.619Z"/></svg>
  `;

  return <SvgXml xml={markup} />;
}
