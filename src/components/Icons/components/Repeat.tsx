import { SvgXml } from 'react-native-svg';

interface Props {
  color?: string;
}
export function Repeat({ color }: Props) {
  const markup = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="${
    color ? color : '#101010'
  }" d="M2.25 12A6.757 6.757 0 0 1 9 5.25h10.19l-.97-.97a.75.75 0 1 1 1.06-1.06l2.25 2.25a.748.748 0 0 1 0 1.06l-2.25 2.25a.75.75 0 1 1-1.06-1.06l.97-.97H9A5.256 5.256 0 0 0 3.75 12a.75.75 0 0 1-1.5 0ZM21 11.25a.75.75 0 0 0-.75.75A5.256 5.256 0 0 1 15 17.25H4.81l.97-.97a.75.75 0 0 0-1.06-1.06l-2.25 2.25a.751.751 0 0 0 0 1.06l2.25 2.25a.75.75 0 0 0 1.06-1.06l-.97-.97H15A6.758 6.758 0 0 0 21.75 12a.75.75 0 0 0-.75-.75Z"/></svg>
  `;

  return <SvgXml xml={markup} />;
}
