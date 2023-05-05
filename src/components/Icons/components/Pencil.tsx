import { SvgXml } from 'react-native-svg';

interface Props {
  color?: string;
}
export function Pencil({ color }: Props) {
  const markup = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="${
    color ? color : '#101010'
  }" d="m21.31 6.878-4.188-4.19a1.5 1.5 0 0 0-2.122 0L3.44 14.25A1.487 1.487 0 0 0 3 15.31v4.19A1.5 1.5 0 0 0 4.5 21h4.19a1.487 1.487 0 0 0 1.06-.44L21.31 9a1.5 1.5 0 0 0 0-2.122ZM4.81 15l7.94-7.94 1.565 1.565-7.94 7.939L4.81 15Zm-.31 1.81 2.69 2.69H4.5v-2.69ZM9 19.19l-1.565-1.565 7.94-7.94 1.565 1.565L9 19.19Zm9-9L13.81 6l2.25-2.25 4.19 4.189-2.25 2.25Z"/></svg>
  `;

  return <SvgXml xml={markup} />;
}
