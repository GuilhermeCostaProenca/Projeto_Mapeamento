module.exports = {
    development: {
      client: 'pg',
      connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: '050805', // ⚡ coloque sua senha
        database: 'projeto_mapeamento',
      },
      migrations: {
        directory: './src/database/migrations'
      }
    }
  };
  