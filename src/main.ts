import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const Port = process.env.port
    const app = await NestFactory.create(AppModule, {cors: true})
    app.enableCors();
    
    await app.listen(Port, ()=>{
        console.log(`Server start on ${Port} port`)
    })
}
bootstrap();
