import { SvgProps, SvgXml } from 'react-native-svg';

interface Props extends SvgProps {}

export function Outcome(props: Props) {
  const markup = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path fill="#D1495B" d="m2.292 16.707 12 12A1 1 0 0 0 16 28v-5h7a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1h-7V4a1 1 0 0 0-1.707-.708l-12 12a1 1 0 0 0 0 1.415ZM14 6.415V10a1 1 0 0 0 1 1h7v10h-7a1 1 0 0 0-1 1v3.586L4.414 16 14 6.414ZM26 22V10a1 1 0 0 1 2 0v12a1 1 0 0 1-2 0Z"/></svg>
  `;

  return <SvgXml xml={markup} {...props} />;
}
