import cors from "@fastify/cors";

import { fastify } from "./fastify";
import { PoolService } from "./services/PoolService";

async function bootstrap() {

    fastify.register(cors, {
        origin: true
    })
    
    fastify.get('/pools/count', async ()=> {
        
        const service = new PoolService();
        const count = await service.execute();

        return { count: count }
    });

    await fastify.listen({ port: 3333, host: '0.0.0.0'})
}

bootstrap();