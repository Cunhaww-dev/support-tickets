# Support Tickets API

📌 **Projeto educacional de API com Node.js puro usando HTTP nativo**

## Descrição

Sistema de gerenciamento de tickets de suporte construído com Node.js usando o módulo `http` nativo. Ideal para estudos iniciais em desenvolvimento backend com JavaScript.

## Requisitos

- Node.js 18+

## Instalação

```bash
npm install
```

## Executar

**Modo desenvolvimento (com watch):**

```bash
npm run dev
```

Servidor rodará em `http://localhost:3333`

## Arquitetura

```
Server → Middlewares → Routes → Controllers
```

- **Server**: Listener HTTP nativo
- **Middlewares**: Processamento de requisições (JSON parsing)
- **Routes**: Mapeamento de endpoints
- **Controllers**: Lógica de negócio
- **Database**: Persistência em JSON

## Endpoints

| Método   | Endpoint             | Ação                    |
| -------- | -------------------- | ----------------------- |
| `POST`   | `/tickets`           | Criar ticket            |
| `GET`    | `/tickets`           | Listar todos os tickets |
| `PUT`    | `/tickets/:id`       | Atualizar ticket        |
| `PATCH`  | `/tickets/:id/close` | Encerrar ticket         |
| `DELETE` | `/tickets/:id`       | Deletar ticket          |

## Estrutura de Diretórios

```
src/
├── server.js              # Entrada da aplicação
├── controllers/           # Lógica de regras de negócio
│   └── tickets/
├── routes/               # Definição de rotas
├── middlewares/          # Processamento de requisições
├── database/             # Persistência de dados
└── utils/                # Funções utilitárias
```

## Exemplo de Uso

**Criar ticket:**

```bash
curl -X POST http://localhost:3333/tickets \
  -H "Content-Type: application/json" \
  -d '{
         "equipament": "PC",
         "description": "Desliga sozinho",
         "user_name": "Lucas da Cunha Fabri"
      }'
```

**Listar tickets:**

```bash
curl http://localhost:3333/tickets
```

**Encerrar ticket:**

```bash
curl -X PATCH http://localhost:3333/:id/close \
  -H "Content-Type: application/json" \
  -d '{
         "solution": "Fonte do PC trocada",
      }'
```

## Notas

- Sem frameworks - HTTP puro com Node.js
- Banco de dados JSON - não use em produção
- Projeto educacional para aprender conceitos fundamentais
