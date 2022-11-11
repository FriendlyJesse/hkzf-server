import { Rule, RuleType } from '@midwayjs/validate'

export class NewsDTO {
  @Rule(RuleType.string().required())
  title: string

  @Rule(RuleType.string())
  description: string

  @Rule(RuleType.string().required())
  img: string

  @Rule(RuleType.string().required())
  from: string
}
