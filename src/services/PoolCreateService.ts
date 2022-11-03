import { IPoolService } from "../interfaces/IPoolService";
import { prisma } from "../prisma";
import ShortUniqueId from "short-unique-id";


class PoolCreateService {
  async execute({ title }:IPoolService) {
    const generator = new ShortUniqueId({ length: 6 })
    const code = String(generator()).toUpperCase()

    const pool = await prisma.pool.create({
      data: {
        title,
        code
      }
    });

    return {code};
  }
}

export {PoolCreateService}