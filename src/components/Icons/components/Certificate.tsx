import { SvgXml } from 'react-native-svg';

interface Props {
  color?: string;
}
export function Certificate({ color }: Props) {
  const markup = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="${
    color ? color : '#101010'
  }" d="M23.25 12a5.25 5.25 0 1 0-9 3.67V21a.75.75 0 0 0 1.086.671L18 20.338l2.664 1.333A.75.75 0 0 0 21.75 21v-5.33a5.233 5.233 0 0 0 1.5-3.67ZM18 8.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5Zm.336 10.579a.75.75 0 0 0-.672 0l-1.914.958v-3.044a5.245 5.245 0 0 0 4.5 0v3.044l-1.914-.958ZM12.75 18a.75.75 0 0 1-.75.75H3.75a1.5 1.5 0 0 1-1.5-1.5v-12a1.5 1.5 0 0 1 1.5-1.5h16.5a1.5 1.5 0 0 1 1.5 1.5.75.75 0 1 1-1.5 0H3.75v12H12a.75.75 0 0 1 .75.75Zm-1.5-5.25a.75.75 0 0 1-.75.75H6.75a.75.75 0 1 1 0-1.5h3.75a.75.75 0 0 1 .75.75Zm0-3a.75.75 0 0 1-.75.75H6.75a.75.75 0 1 1 0-1.5h3.75a.75.75 0 0 1 .75.75Z"/></svg>
  `;

  return <SvgXml xml={markup} />;
}
