export const swaggerOptions = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'Tasks API',
      version: '0.1.0',
      description: 'API para estudo de documentação de API',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        name: 'Nathan Alves',
        url: 'https://github.com/NathanAlv',
        email: 'sidney.sousa@ifms.edu.br',
      },
    },
    servers: [
      {
        url: 'http://localhost:3001',
      },
    ],
  },
  apis: ['**/*.yml'],
}
