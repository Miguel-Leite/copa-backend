import { prisma } from "../prisma";

export class PoolListService {
    async execute() {
        const pool = await prisma.pool.findMany()
        return pool;
    }
}