import 'dotenv/config';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app
    .listen(PORT)
    .then(() => {
      console.log(`[+] Server been started on port: ${PORT}`);
    })
    .catch((err) => {
      console.log(`[-] Erorr: ${err}`);
    });
}
bootstrap();
