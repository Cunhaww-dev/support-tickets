import http from 'node:http';

import { jsonHandler } from './middlewares/jsonHandler.js';
import { routeHandler } from './middlewares/routeHandler.js';

async function listener(request, response) {
  await jsonHandler(request, response);
  routeHandler(request, response);
}

http.createServer(listener).listen(3333);

// Fluxo de recebimento do body:
// Body passa no server, depois no middleware routeHandler que trata a requisição, depois é enviado para a rota tickets, onde é tratado pela função create que é o nosso controller.

/*
1. Server
2. Middlewares
3. Routes
4. Controllers
*/
