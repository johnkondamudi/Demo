// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  
  region: 'us-east-1',

  identityPoolId: 'us-east-1:fbe0340f-9ffc-4449-a935-bb6a6661fd53',
  userPoolId: 'us-west-2_SYm2XjgIR',
  clientId: '5i9jrfrk8mjrjtamaqa1qe9ig8',

  rekognitionBucket: 'rekognition-pics',
  albumName: "usercontent",
  bucketRegion: 'us-east-1',

  ddbTableName: 'LoginTrail',

  cognito_idp_endpoint: '',
  cognito_identity_endpoint: '',
  sts_endpoint: '',
  dynamodb_endpoint: '',
  s3_endpoint: ''

};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
