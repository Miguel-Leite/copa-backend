import { prisma } from "../prisma";

export class GuessCountService {
    async execute() {
        const guess = await prisma.guess.count()
        return guess;
    }
}