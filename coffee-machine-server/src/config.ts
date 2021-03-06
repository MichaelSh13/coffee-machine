export const config = () => {
  return ({
    jwt: {
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: process.env.JWT_EXPIRES_IN,
      },
    },
    createIn: 10*60*1000,
    redis: {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
    },
    database: {
      type: 'postgres',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE_NAME,
      synchronize: true,
      autoLoadEntities: true,
      logging: false,
      entities: ['dist/**/*.entity.js'],
      migrations: ["migration/*.js"],
      subscribers: ['subscriber/*.ts'],
      cli: {
        migrationsDir: "migration",
      },
    },
  })
};
