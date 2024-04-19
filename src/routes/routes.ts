import { RouteNamesEnum } from '@/localConstants';
import { Home, NFTsPage } from '@/pages';
import { RouteType } from '@/types';

interface RouteWithTitleType extends RouteType {
  title: string;
}

export const routes: RouteWithTitleType[] = [
  {
    path: RouteNamesEnum.home,
    title: 'Home',
    component: Home
  },
  {
    path: RouteNamesEnum.nfts,
    title: 'NFTs',
    component: NFTsPage
  }
];
