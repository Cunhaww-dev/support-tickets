// Responsável por juntar as rotas da aplicação
import { tickets } from './tickets.js';
import { parseRoutePath } from '../utils/parseRoutePath.js';

export const routes = [...tickets].map((route) => ({
  ...route,
  path: parseRoutePath(route.path),
}));
