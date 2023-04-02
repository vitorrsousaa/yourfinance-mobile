import { SvgXml } from 'react-native-svg';

interface Props {
  isActive?: boolean;
}

export function Target({ isActive }: Props) {
  const markup = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none"><path fill="${
    isActive ? '#101010' : '#a6a6a6'
  }" d="M21.675 7.796a9.76 9.76 0 1 1-2.456-3.202l2.125-2.126a.75.75 0 1 1 1.062 1.06l-9 9a.75.75 0 0 1-1.062-1.06l2.6-2.6a3.75 3.75 0 1 0 1.674 2.915.752.752 0 0 1 1.5-.084 5.25 5.25 0 1 1-2.098-3.905l2.133-2.132a8.239 8.239 0 1 0 2.169 2.781.75.75 0 1 1 1.353-.647Z"/></svg>
  `;

  return <SvgXml xml={markup} />;
}
