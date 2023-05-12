import { ReactElement } from 'react';

import React from 'react';
import { Arrow } from './components/Arrow';
import { ArrowLeftRight } from './components/ArrowLeftRight';
import { ArrowRight } from './components/ArrowRight';
import { Bell } from './components/Bell';
import { Calendar } from './components/Calendar';
import { Certificate } from './components/Certificate';
import { ChartBar } from './components/ChartBar';
import { Chat } from './components/Chat';
import { Currency } from './components/Currency';
import { DotMenu } from './components/DotMenu';
import { Download } from './components/Download';
import { Home } from './components/Home';
import { Filter } from './components/Filter';
import { Income } from './components/Income';
import { Logo } from './components/Logo';
import { Outcome } from './components/Outcome';
import { Pencil } from './components/Pencil';
import { Plus } from './components/Plus';
import { Repeat } from './components/Repeat';
import { Search } from './components/Search';
import { SmileAngry } from './components/SmileAngry';
import { SmileGood } from './components/SmileGood';
import { SmileMeh } from './components/SmileMeh';
import { Target } from './components/Target';
import { Trash } from './components/Trash';
import { TrendDown } from './components/TrendDown';
import { TrendUp } from './components/TrendUp';
import { Upload } from './components/Upload';
import { User } from './components/User';
import { Wallet } from './components/Wallet';

export type Icons =
  | 'arrow'
  | 'arrowLeftRight'
  | 'arrowRight'
  | 'bell'
  | 'calendar'
  | 'certificate'
  | 'chartBar'
  | 'chat'
  | 'currency'
  | 'dotMenu'
  | 'download'
  | 'filter'
  | 'home'
  | 'income'
  | 'logo'
  | 'outcome'
  | 'pencil'
  | 'plus'
  | 'repeat'
  | 'search'
  | 'smileAngry'
  | 'smileGood'
  | 'smileMeh'
  | 'target'
  | 'trash'
  | 'trendDown'
  | 'trendUp'
  | 'upload'
  | 'user'
  | 'wallet';

type IconMap = {
  [key in Icons]: ReactElement;
};

const iconsList: IconMap = {
  arrow: <Arrow />,
  arrowLeftRight: <ArrowLeftRight />,
  arrowRight: <ArrowRight />,
  bell: <Bell />,
  calendar: <Calendar />,
  certificate: <Certificate />,
  chartBar: <ChartBar />,
  chat: <Chat />,
  currency: <Currency />,
  dotMenu: <DotMenu />,
  download: <Download />,
  filter: <Filter />,
  home: <Home />,
  income: <Income />,
  logo: <Logo />,
  outcome: <Outcome />,
  pencil: <Pencil />,
  plus: <Plus />,
  repeat: <Repeat />,
  search: <Search />,
  smileAngry: <SmileAngry />,
  smileGood: <SmileGood />,
  smileMeh: <SmileMeh />,
  target: <Target />,
  trash: <Trash />,
  trendDown: <TrendDown />,
  trendUp: <TrendUp />,
  upload: <Upload />,
  user: <User />,
  wallet: <Wallet />,
};

export default function Icon(props: {
  name: Icons;
  color?: string;
  testID?: string;
}): ReactElement {
  const { name, ...iconProps } = props;

  const iconSVG = iconsList[name];
  return <>{React.cloneElement(iconSVG, iconProps)}</>;
}
