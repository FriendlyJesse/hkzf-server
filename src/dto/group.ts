import { Rule, RuleType } from '@midwayjs/validate'

export class GroupDTO {
  @Rule(RuleType.string().required())
  title: string

  @Rule(RuleType.string().required())
  description: string

  @Rule(RuleType.string().required())
  img: string
}
