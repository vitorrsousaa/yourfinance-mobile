import { SvgXml } from 'react-native-svg';

export function DotMenu() {
  const markup = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path fill="#101010" d="M8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/></svg>
  `;

  return <SvgXml xml={markup} />;
}
