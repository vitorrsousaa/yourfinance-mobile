import { SvgProps, SvgXml } from 'react-native-svg';

interface TrendDownProps extends SvgProps {
  color?: string;
}

export function TrendDown({ color, ...props }: TrendDownProps) {
  const markup = `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" fill="none"><path stroke="${
    color ? color : '#DC707F'
  }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.898 12.5-6-6-2.5 2.5-4.5-4.5"/><path stroke="${
    color ? color : '#DC707F'
  }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.898 8.5v4h-4"/></svg>
  `;

  return <SvgXml xml={markup} {...props} />;
}
