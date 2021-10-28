import { ConfigService } from '@nestjs/config';
import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Socket } from 'dgram';
import { Server } from 'ws';

@WebSocketGateway()
export class CoffeeGateway {

  constructor(
    private readonly configService: ConfigService,
  ) {}
  
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('coffee')
  async handleCoffee(
    @MessageBody() body: any,
    @ConnectedSocket() client: Socket
  ): Promise<any> {
    console.log('hello 1')
    await new Promise((res) => {
      setTimeout(() => res(''), 4000)
    })
    console.log('hello 2')

    return 'Hello alll';
  }
}
