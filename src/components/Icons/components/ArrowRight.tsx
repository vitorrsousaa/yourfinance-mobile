import { SvgProps, SvgXml } from 'react-native-svg';

interface Props extends SvgProps {
  color?: string;
}

export function ArrowRight({ color, ...props }: Props) {
  const markup = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="${
    color ? color : '#FAFAFA'
  }" d="m20.78 12.53-6.75 6.75a.75.75 0 0 1-1.06-1.06l5.47-5.47H3.75a.75.75 0 1 1 0-1.5h14.69l-5.47-5.47a.75.75 0 1 1 1.06-1.06l6.75 6.75a.75.75 0 0 1 0 1.06Z"/></svg>
  `;

  return <SvgXml xml={markup} {...props} />;
}
