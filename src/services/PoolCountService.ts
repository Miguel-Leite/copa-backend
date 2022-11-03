import { prisma } from "../prisma";

export class PoolCountService {
    async execute() {
        const pool = await prisma.pool.count()
        return pool;
    }
}