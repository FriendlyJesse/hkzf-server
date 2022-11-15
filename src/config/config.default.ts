import { MidwayConfig } from '@midwayjs/core'
import { Swiper } from '../entity/swiper'
import { Group } from '../entity/group'
import { News } from '../entity/news'
import { Area } from '../entity/area'

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
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '123456',
        database: 'hk',
        synchronize: true,
        logging: false,
        entities: [Swiper, Group, News, Area]
      }
    }
  },
  cors: {
    credentials: false
  }
} as MidwayConfig
