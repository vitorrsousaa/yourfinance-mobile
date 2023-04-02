import { SvgXml } from 'react-native-svg';

interface Props {
  isActive?: boolean;
}

export function ChartBar({ isActive }: Props) {
  const markup = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none"><path fill="${
    isActive ? '#101010' : '#a6a6a6'
  }" d="M21.375 18.75h-.75v-15a.75.75 0 0 0-.75-.75h-5.25a.75.75 0 0 0-.75.75V7.5h-4.5a.75.75 0 0 0-.75.75V12h-3.75a.75.75 0 0 0-.75.75v6h-.75a.75.75 0 1 0 0 1.5h18a.75.75 0 1 0 0-1.5Zm-6-14.25h3.75v14.25h-3.75V4.5ZM10.125 9h3.75v9.75h-3.75V9Zm-4.5 4.5h3v5.25h-3V13.5Z"/></svg>
  `;

  return <SvgXml xml={markup} />;
}
