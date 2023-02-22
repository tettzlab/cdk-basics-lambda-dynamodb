import * as cdk from 'aws-cdk-lib'
import { Template } from 'aws-cdk-lib/assertions'
import * as CdkApp from '../stack/cdk-basics-lambda-dynamodb-stack'

describe('CdkBasicsLambdaDynamoDBStack', () => {
  const app = new cdk.App()
  const stack = new CdkApp.CdkBasicsLambdaDynamoDBStack(app, 'MyTestStack')

  test('should have 1 lambda functions.', () => {
    Template.fromStack(stack).resourceCountIs('AWS::Lambda::Function', 1)
  })
})
