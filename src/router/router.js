import Home from '../views/home';
import Error404 from '../views/404';
import Members from '../views/members';

export const paths = [
  { path: '/', template: Home },
  { path: '/members', template: Members },
  { path: '/404', template: Error404 }
]
