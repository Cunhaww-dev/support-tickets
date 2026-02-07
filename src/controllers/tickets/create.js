// Controllers são responsáveis por executar ações quando uma rota é chamada
// Nesse caso, estamos criando um ticket

import { randomUUID } from 'node:crypto';

export function create({ request, response, database }) {
  const { equipament, description, user_name } = request.body;

  // Objeto que representa o ticket criado, com as informações recebidas do body e outras geradas automaticamente
  const ticket = {
    id: randomUUID(),
    equipament,
    description,
    user_name,
    status: 'open',
    created_at: new Date(),
    updated_at: new Date(),
  };

  database.insert('tickets', ticket);

  return response.writeHead(201).end(JSON.stringify(ticket));
}
