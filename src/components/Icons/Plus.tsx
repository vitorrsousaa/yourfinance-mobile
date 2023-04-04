import { SvgXml } from 'react-native-svg';

export function Plus() {
  const markup = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" fill="none"><path fill="#fff" d="M6.829 14.76V8.648H.717V6.296h6.112V.2H9.18v6.096h6.096v2.352H9.18v6.112H6.829Z"/></svg>
  `;

  return <SvgXml xml={markup} />;
}
