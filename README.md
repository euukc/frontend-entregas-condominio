# Sistema de Gestão de Entregas para Condomínios

## Projeto Integrador – Análise e Desenvolvimento de Sistemas (Senac)
Este projeto é uma solução desenvolvida para otimizar o fluxo de recebimento e retirada de encomendas em condomínios residenciais. A plataforma permite que porteiros registrem entradas e moradores confirmem retiradas, centralizando o controle e evitando extravios.


- Arquitetura e Tecnologias
O projeto está totalmente hospedado na nuvem:

Frontend: React/Next.js (Hospedado na Vercel)

Backend: Node.js/Express (Hospedado no Render)

Banco de Dados: MongoDB Atlas (Cloud NoSQL)

Estilização: TailwindCSS

Segurança: Autenticação JWT (JSON Web Tokens)

- Modelo de Banco de Dados (Modelo Físico)
O sistema utiliza o MongoDB. Abaixo está a definição da estrutura de dados utilizada para atender aos requisitos de persistência:

Coleção: users
Armazena os dados de acesso e perfis do sistema.


{
  "_id": "ObjectId",
  "email": "string (único)",
  "senha": "string (hash)",
  "role": "string (porteiro | morador)",
  "apartamento": "string"
}
Coleção: entregas
Armazena o registro de cada encomenda.


{
  "_id": "ObjectId",
  "destinatario": "string",
  "apartamento": "string",
  "descricao": "string",
  "status": "string (pendente | entregue)",
  "data_recebimento": "timestamp",
  "data_retirada": "timestamp (nulo se pendente)",
  "registrado_por": "ObjectId (ref: users)"
}


- Links do Projeto (Deploy)
Frontend (Vercel): 

Backend API (Render): 
