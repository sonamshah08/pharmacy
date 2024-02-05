import { DataSource } from 'typeorm';

export const createDatabaseConnection = async (): Promise<DataSource> => {
  try {
    const connectDB = await new DataSource({
      type: 'sqlite',
      database: ':memory:',
      logging: false,
      synchronize: true,
      entities: ["./src/entities/**/*.ts"],
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
    });

    await connectDB.initialize();
    console.log(`Data Source has been initialized`);
    return connectDB;
  } catch (error) {
    console.error(`Data Source initialization error`, error);
    throw error;
  }
};
