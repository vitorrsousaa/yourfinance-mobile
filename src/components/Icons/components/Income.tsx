import { SvgXml } from 'react-native-svg';

export function Income() {
  const markup = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><path fill="#40DA59" d="m29.707 15.293-12-12A1 1 0 0 0 16 4v5H9a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h7v5a1 1 0 0 0 1.707.707l12-12a1.001 1.001 0 0 0 0-1.415ZM18 25.585V22a1 1 0 0 0-1-1h-7V11h7a1 1 0 0 0 1-1V6.414L27.586 16 18 25.586ZM6 10v12a1 1 0 1 1-2 0V10a1 1 0 0 1 2 0Z"/></svg>
  `;

  return <SvgXml xml={markup} />;
}
