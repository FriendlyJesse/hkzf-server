import { MidwayConfig } from '@midwayjs/core'
import { Photo } from '@/entity/photo'
import { Swiper } from '@/entity/swiper'

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1667972012973_8495',
  koa: {
    port: 7001,
    globalPrefix: '/api'
  },
  typeorm: {
    dataSource: {
      default: {
        type: 'mysql',
        host: '192.168.0.141',
        port: 3307,
        username: 'root',
        password: '123456',
        database: 'hk',
        synchronize: true,
        logging: false,
        entities: [Photo, Swiper]
      }
    }
  }
} as MidwayConfig
