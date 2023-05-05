import { SvgXml } from 'react-native-svg';

export function Upload() {
  const markup = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none"><path fill="#101010" d="M21.25 14.25v5.25a1.5 1.5 0 0 1-1.5 1.5h-15a1.5 1.5 0 0 1-1.5-1.5v-5.25a.75.75 0 1 1 1.5 0v5.25h15v-5.25a.75.75 0 1 1 1.5 0ZM9.03 8.03l2.47-2.47v8.69a.75.75 0 1 0 1.5 0V5.56l2.47 2.47a.75.75 0 1 0 1.06-1.06l-3.75-3.75a.749.749 0 0 0-1.06 0L7.97 6.97a.75.75 0 1 0 1.06 1.06Z"/></svg>
  `;

  return <SvgXml xml={markup} />;
}
