import { SvgProps, SvgXml } from 'react-native-svg';

interface TrendUpProps extends SvgProps {
  color?: string;
}

export function TrendUp({ color, ...props }: TrendUpProps) {
  const markup = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="${
    color ? color : '#28C140'
  }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.398 3.5-6 6-2.5-2.5-4.5 4.5"/><path stroke="${
    color ? color : '#28C140'
  }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.398 7.5v-4h-4"/></svg>
  `;

  return <SvgXml xml={markup} {...props} />;
}
