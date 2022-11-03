import { prisma } from "../prisma";

export class UserCountService {
    async execute() {
        const user = await prisma.user.count()
        return user;
    }
}