import cors from "@fastify/cors";
import { z } from 'zod';

import { fastify } from "./fastify";
import { GuessCountService } from "./services/GuessCountService";
import { PoolCountService } from "./services/PoolCountService";
import { PoolCreateService } from "./services/PoolCreateService";
import { UserCountService } from "./services/UserCountService";


async function bootstrap() {

  fastify.register(cors, {
    origin: true
  })

  fastify.get('/pools/count', async () => {

    const service = new PoolCountService();
    const count = await service.execute();

    return { count: count }
  });

  fastify.get('/users/count', async () => {

    const service = new UserCountService();
    const count = await service.execute();

    return { count: count }
  });

  fastify.get('/guesses/count', async () => {

    const service = new GuessCountService();
    const count = await service.execute();

    return { count: count }
  });

  fastify.post('/pools', async (request, reply) => {
    const createPoolBody = z.object({
      title: z.string()
    })
    const { title } = createPoolBody.parse(request.body)

    const service = new PoolCreateService();

    
    const result = await service.execute({title})

    reply.status(201).send(result)
  });

  await fastify.listen({ port: 3333, host: '0.0.0.0' })
}

bootstrap();