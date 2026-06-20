import Home from '../views/home';
import Error404 from '../views/404';
import Members from '../views/members';
import Projects from '../views/projects';

export const paths = [
  { path: '/', template: Home },
  { path: '/members', template: Members },
  { path: '/projects', template: Projects },
  { path: '/404', template: Error404 }
]
