import { SvgXml } from 'react-native-svg';

interface Props {
  color?: string;
}
export function Calendar({ color }: Props) {
  const markup = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="${
    color ? color : '#101010'
  }" d="M19.5 3h-2.25v-.75a.75.75 0 1 0-1.5 0V3h-7.5v-.75a.75.75 0 0 0-1.5 0V3H4.5A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 19.5 3ZM6.75 4.5v.75a.75.75 0 0 0 1.5 0V4.5h7.5v.75a.75.75 0 1 0 1.5 0V4.5h2.25v3h-15v-3h2.25Zm12.75 15h-15V9h15v10.5Z"/></svg>
  `;

  return <SvgXml xml={markup} />;
}
