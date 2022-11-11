import { Rule, RuleType } from '@midwayjs/validate'

export class getAreaDTO {
  @Rule(RuleType.string())
  city_name?: string
}
