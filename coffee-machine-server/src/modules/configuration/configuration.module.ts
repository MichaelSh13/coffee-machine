import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { config } from 'src/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.cwd()}/envs/${process.env.NODE_ENV}.env`,
      load: [config],
    }),
  ],
})
export class ConfigurationModule {}
