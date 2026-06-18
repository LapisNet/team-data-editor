import { resetView } from 'mettle';
import { initRouter, hashChange, linkTo } from 'mettle-router';
import { paths } from './router';

const router = initRouter(
  paths,
  resetView,
  '#router'
);

hashChange(() => {
  if(!paths.map(({path}) => path).includes(location.hash.slice(1))) {
    linkTo('/404')
  }
})

export default router;
