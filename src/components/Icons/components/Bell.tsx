import { SvgXml } from 'react-native-svg';

export function Bell() {
  const markup = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 13.278V9a6 6 0 0 1 6-6v0a6 6 0 0 1 6 6v4.278l1.634 1.634c.234.234.366.552.366.883v.455c0 .69-.56 1.25-1.25 1.25H5.25c-.69 0-1.25-.56-1.25-1.25v-.454c0-.332.132-.65.366-.884L6 13.278Z" clip-rule="evenodd"/><path stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 20.25c-1.146 1-2.854 1-4 0"/></svg>
  `;

  return <SvgXml xml={markup} />;
}
