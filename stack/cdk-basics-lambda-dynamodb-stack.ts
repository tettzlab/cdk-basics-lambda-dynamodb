import { Stack, StackProps, CfnOutput } from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { LambdaDynamoDB } from '../lib/lambda-dynamodb'

export class CdkBasicsLambdaDynamoDBStack extends Stack {
  public constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    const lambdaDynamoDB = new LambdaDynamoDB(this, 'LambdaDynamoDB', {})

    // TODO ...
  }
}
