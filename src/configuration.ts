import { Configuration, App } from '@midwayjs/decorator'
import * as koa from '@midwayjs/koa'
import * as validate from '@midwayjs/validate'
import * as info from '@midwayjs/info'
import * as orm from '@midwayjs/typeorm'
import * as crossDomain from '@midwayjs/cross-domain'
import * as staticFile from '@midwayjs/static-file'
import { join } from 'path'
// import { DefaultErrorFilter } from './filter/default.filter';
// import { NotFoundFilter } from './filter/notfound.filter';
import { ReportMiddleware } from './middleware/report.middleware'
import { FormatMiddleware } from './middleware/format.middleware'
// import { WeatherErrorFilter } from './filter/weather.filter'

@Configuration({
  imports: [
    koa,
    staticFile,
    validate,
    {
      component: info,
      enabledEnvironment: ['local']
    },
    orm,
    crossDomain
  ],
  importConfigs: [join(__dirname, './config')]
})
export class ContainerLifeCycle {
  @App()
  app: koa.Application

  async onReady() {
    // add middleware
    this.app.useMiddleware([ReportMiddleware, FormatMiddleware])
    // add filter
    // this.app.useFilter([WeatherErrorFilter])
    // this.app.useFilter([NotFoundFilter, DefaultErrorFilter]);
  }
}
