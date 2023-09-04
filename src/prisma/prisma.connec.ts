import { PrismaClient } from '@prisma/client';

let instance: any;
class PrismaConnection {
  constructor() {
    if (instance) {
      throw new Error('Tried to create more than one PrismaConnection');
    }
    instance = new PrismaClient();
  }

  getInstance(): PrismaClient {
    return instance;
  }
}
const prismaConnection: PrismaClient = Object.freeze(new PrismaConnection()).getInstance();

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const prismaDisconnection = async () => {
  await prismaConnection.$disconnect();
};

export { prismaConnection, prismaDisconnection };
