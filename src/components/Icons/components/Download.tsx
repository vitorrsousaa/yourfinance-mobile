import { SvgXml } from 'react-native-svg';

export function Download() {
  const markup = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none"><path fill="#101010" d="M21.75 14.25v5.25a1.5 1.5 0 0 1-1.5 1.5h-15a1.5 1.5 0 0 1-1.5-1.5v-5.25a.75.75 0 1 1 1.5 0v5.25h15v-5.25a.75.75 0 1 1 1.5 0Zm-9.53.53a.747.747 0 0 0 1.06 0l3.75-3.75a.75.75 0 1 0-1.06-1.06l-2.47 2.47V3.75a.75.75 0 1 0-1.5 0v8.69L9.53 9.97a.75.75 0 0 0-1.06 1.06l3.75 3.75Z"/></svg>
  `;

  return <SvgXml xml={markup} />;
}
