import { prisma } from "../src/prisma"


async function main() {
  const user = await prisma.user.create({
    data: {
      name: "Miguel Leite",
      email: "miguelleite200leite@gmail.com",
      avatarUrl: "https://github.com/Miguel-Leite.png"
    }
  })

  const pool = await prisma.pool.create({
    data: {
      title: 'Example Pool',
      code: "BOL123",
      ownerId: user.id,

      participants: {
        create: {
          userId: user.id
        }
      }
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-02T12:19:49.699Z',
      firstTeamCountryCode: 'DE',
      secondTeamCountryCode: 'BR'
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-03T14:50:20.569Z',
      firstTeamCountryCode: 'BR',
      secondTeamCountryCode: 'AR',


      guesses: {
        create: {
          firstTeamPoints: 2,
          secondTeamPoints: 1,
          participant: {
            connect: {
              userId_poolId: {
                userId: user.id,
                poolId: pool.id
              }
            }
          }
        }
      }
    }
  })
}

main()