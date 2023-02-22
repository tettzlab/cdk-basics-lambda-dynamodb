import { StackProps } from 'aws-cdk-lib'
import * as lambda from 'aws-cdk-lib/aws-lambda'
import { Construct } from 'constructs'

interface LambdaDynamoDBProps extends StackProps {
  lambdaProps?: lambda.FunctionProps
}

export class LambdaDynamoDB extends Construct {
  public readonly lambdaFunc: lambda.Function

  public constructor(scope: Construct, id: string, props?: LambdaDynamoDBProps) {
    super(scope, id)

    this.lambdaFunc = new lambda.Function(this, 'Function', {
      architecture: lambda.Architecture.X86_64,
      runtime: lambda.Runtime.NODEJS_18_X,
      code: lambda.Code.fromAsset('./bundle/mylambda'),
      handler: 'index.handler',
      // TODO ...
      ...(props?.lambdaProps ?? {}),
    })

    // TODO ...
  }
}
