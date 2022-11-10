import { Rule, RuleType } from '@midwayjs/validate'

export class SwiperDTO {
  @Rule(RuleType.string().required())
  name: string

  @Rule(RuleType.string())
  description?: string

  @Rule(RuleType.string().required())
  img: string
}

export class PatchSwiperDTO {
  @Rule(RuleType.number().required())
  id: number

  @Rule(RuleType.string())
  name?: string

  @Rule(RuleType.string())
  description?: string

  @Rule(RuleType.string())
  img?: string
}
