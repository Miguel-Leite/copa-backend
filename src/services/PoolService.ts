import { prisma } from "../prisma";

export class PoolService {
    async execute() {
        const pool = await prisma.pool.count()
        return pool;
    }
}