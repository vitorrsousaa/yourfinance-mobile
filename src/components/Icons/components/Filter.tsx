import { SvgXml } from 'react-native-svg';

export function Filter() {
  const markup = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path fill="#404040" d="M14.412 3.096A.989.989 0 0 0 13.5 2.5h-11a1 1 0 0 0-.738 1.673l.005.005L6 8.698V13.5a1 1 0 0 0 1.554.832l2-1.333a1 1 0 0 0 .446-.833V8.698l4.234-4.52.005-.005a.987.987 0 0 0 .173-1.077Zm-5.14 4.922a.995.995 0 0 0-.272.68v3.468L7 13.5V8.698a.995.995 0 0 0-.27-.684L2.5 3.5h11L9.271 8.018Z"/></svg>
  `;

  return <SvgXml xml={markup} />;
}
