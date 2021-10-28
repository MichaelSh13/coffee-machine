import { Module } from "@nestjs/common";
import { CoffeeGateway } from "./gateways/gateway.gateway";

@Module({
  providers: [CoffeeGateway]
})
export class GatewayModule {}