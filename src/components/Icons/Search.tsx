import { SvgXml } from 'react-native-svg';

export function Search() {
  const markup = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="#FAFAFA" d="m21.53 20.47-4.693-4.694a8.26 8.26 0 1 0-1.06 1.06l4.692 4.695a.75.75 0 1 0 1.062-1.062ZM3.75 10.5a6.75 6.75 0 1 1 6.75 6.75 6.758 6.758 0 0 1-6.75-6.75Z"/></svg>
  `;

  return <SvgXml xml={markup} />;
}
