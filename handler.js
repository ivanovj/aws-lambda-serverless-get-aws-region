'use strict';

module.exports.getAwsRegion = (event, context, callback) => {

  // AWS Region is the 4th element in the function ARN
  var awsRegion = context.invokedFunctionArn.split(":")[3];

  // AWS Account ID is the 5th element in the function ARN
  var awsAccountId = context.invokedFunctionArn.split(":")[4];

  callback(null, { message: 'AWS Region= ' + awsRegion});
}