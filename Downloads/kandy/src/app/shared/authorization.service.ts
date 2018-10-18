import { Injectable, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import {AuthenticationDetails, CognitoUser, CognitoUserPool, CognitoUserAttribute,CognitoUserSession} from 'amazon-cognito-identity-js';
import { Observable } from 'rxjs';
import { ROUTER_CONFIGURATION } from '@angular/router';
// import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';

import { ChallengeParameters, CognitoCallback, LoggedInCallback,NewPasswordUser} from "../shared/Shared";

 import { environment } from "../../environments/environment";
import { Client } from 'paho-mqtt';


const poolData = {
  UserPoolId: environment.userPoolId, // Your user pool id here
  ClientId: environment.clientId // Your client id here  
};

const userPool = new CognitoUserPool(poolData);

@Injectable()
export class AuthorizationService {
  cognitoUser: any;

  constructor() { }

  register(email, password,name,address,phone_number,Roles,Rights) {
    
alert(Roles)
    const attributeList = [];

    
  //    dataEmail:any = {
  //     Name: 'email',
  //     Value: user.email
  // };

  
  attributeList.push(new CognitoUserAttribute({
    Name: 'email',
    Value: email
}));

attributeList.push(new CognitoUserAttribute({
  Name: 'nickname',
  Value: name
}));
attributeList.push(new CognitoUserAttribute({
  Name: 'name',
  Value: name
}));

      attributeList.push(new CognitoUserAttribute({
      Name: 'phone_number',
      Value:phone_number
  }));

  attributeList.push(new CognitoUserAttribute({
    Name: 'address',
    Value: address
}));

attributeList.push(new CognitoUserAttribute({
  Name: 'given_name',
  Value: 'kandy'
}));

attributeList.push(new CognitoUserAttribute({
  Name: 'family_name',
  Value: 'kuldeep'
}));

attributeList.push(new CognitoUserAttribute({
  Name: 'middle_name',
  Value: 'kumar'
}));

attributeList.push(new CognitoUserAttribute({
  Name: 'website',
  Value: 'kandtydeol.com'
}));

attributeList.push(new CognitoUserAttribute({
  Name: 'gender',
  Value: 'Mal'
}));

attributeList.push(new CognitoUserAttribute({
  Name: 'custom:Roles',
  Value: Roles.toString()
}));

attributeList.push(new CognitoUserAttribute({
  Name: 'custom:Rights',
  Value: Rights.toString()
}));

// attributeList.push(new CognitoUserAttribute({
//   Name: 'website',
//   Value: 'kandtydeol.com'
// }));
    return Observable.create(observer => {
      userPool.signUp(email, password, attributeList, null, (err, result) => {
        if (err) {
         // alert('e')
          console.log("signUp error", err);
          observer.error(err);
        }

        this.cognitoUser = result.user;
        console.log("signUp success", result);
        observer.next(result);
        observer.complete();
      });
    });

  }

  confirmAuthCode(code) {
    const user = {
      Username : this.cognitoUser.username,
      Pool : userPool
    };
    return Observable.create(observer => {
      const cognitoUser = new CognitoUser(user);
      cognitoUser.confirmRegistration(code, true, function(err, result) {
        if (err) {
          console.log(err);
          observer.error(err);
        }
        console.log("confirmAuthCode() success", result);
        observer.next(result);
        observer.complete();
      });
    });
  }

  signIn(email, password) { 

    const authenticationData = {
      Username : email,
      Password : password,
    };
    const authenticationDetails = new AuthenticationDetails(authenticationData);

    const userData = {
      Username : email,
      Pool : userPool
    };
    const cognitoUser = new CognitoUser(userData);
    
    return Observable.create(observer => {

      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
          
          //console.log(result);
          observer.next(result);
          observer.complete();
        },
        onFailure: function(err) {
          console.log(err);
          observer.error(err);
        },
      });
    });
  }

  isLoggedIn() {    
    return userPool.getCurrentUser() != null;
  }

  getAuthenticatedUser() {
    // gets the current user from the local storage
    //ngalert(userPool.getCurrentUser())
    
    return userPool.getCurrentUser();
  }

  logOut() {
    this.getAuthenticatedUser().signOut();
    this.cognitoUser = null;
  }

  forgotPassword(username: string) {
    
    
    let userData = {
        Username: username,
        Pool: userPool
    };

    let cognitoUser = new CognitoUser(userData);

    return Observable.create(observer => { cognitoUser.forgotPassword({
        onSuccess: function (result) {
         
        //   alert(result)
          observer.next(result);
          observer.complete();  
        },
        onFailure: function (err) {
           //alert('e')
           //alert(err.message)
          observer.error(err);
        },
        
    }); });
}


confirmNewPassword(email: string, verificationCode: string, password: string) {

  // alert(verificationCode)
  // alert(email)
  let userData = {
      Username: email,
      Pool: userPool
  };

  let cognitoUser = new CognitoUser(userData);

  return Observable.create(observer => {  cognitoUser.confirmPassword(verificationCode, password, {
      onSuccess: function () {
        //alert('s')
        observer.next();
        observer.complete();  
      },
      onFailure: function (err) {
        //alert(err.message)
        observer.error(err); 
      }
  });
});
}


servers: any ;

Username() { 
//const authenticationDetails = new AuthenticationDetails(authenticationData);

  const userData = {
    Username : userPool.getCurrentUser(),
    Pool : userPool
  };
  const cognitoUser =userPool.getCurrentUser();
  
  return Observable.create(observer => {

    //cognitoUser.listDevices())) ;
  });
}

authenticate(username: string, password: string, callback: CognitoCallback) {
  console.log("UserLoginService: starting the authentication");
//alert(username)
  let authenticationData = {
      Username: username,
      Password: password,
  };
  let authenticationDetails = new AuthenticationDetails(authenticationData);

  let userData = {
      Username: username,
      Pool: userPool
  };

  console.log("UserLoginService: Params set...Authenticating the user");
  let cognitoUser = new CognitoUser(userData);
  //console.log("UserLoginService: config is " + AWS.config);
  cognitoUser.authenticateUser(authenticationDetails, {
    newPasswordRequired: (userAttributes, requiredAttributes) => callback.cognitoCallback(`User needs to set password.`, null),
   onSuccess: result => this.onLoginSuccess(callback, result),
     onFailure: function (err) {
      //alert(err.message)
      //alert('b')
      callback.cognitoCallback(err.message, username)
     // observer.error(err); 
    },
     mfaRequired: (challengeName, challengeParameters) => {
         callback.handleMFAStep(challengeName, challengeParameters, (confirmationCode: string) => {
             cognitoUser.sendMFACode(confirmationCode, {
                 onSuccess: result => this.onLoginSuccess(callback, result),
                 onFailure: function (err) {
                  alert(err.message)
                  //observer.error(err); 
                }
             });
         });
     }
 });
}


private onLoginSuccess = (callback: CognitoCallback, session: CognitoUserSession) => {

  console.log("In authenticateUser onSuccess callback");

  ///AWS.config.credentials = this.buildCognitoCreds(session.getIdToken().getJwtToken());

  // So, when CognitoIdentity authenticates a user, it doesn't actually hand us the IdentityID,
  // used by many of our other handlers. This is handled by some sly underhanded calls to AWS Cognito
  // API's by the SDK itself, automatically when the first AWS SDK request is made that requires our
  // security credentials. The identity is then injected directly into the credentials object.
  // If the first SDK call we make wants to use our IdentityID, we have a
  // chicken and egg problem on our hands. We resolve this problem by "priming" the AWS SDK by calling a
  // very innocuous API call that forces this behavior.
  let clientParams: any = {};
  if (environment.sts_endpoint) {
      clientParams.endpoint = environment.sts_endpoint;
  }
  //let sts = new STS(clientParams);
  //sts.getCallerIdentity(function (err, data) {
      console.log("UserLoginService: Successfully set the AWS credentials");
      callback.cognitoCallback(null, session);
  //});
}

newPassword(newPasswordUser: NewPasswordUser, callback: CognitoCallback): void {

  //alert(newPasswordUser)
  console.log(newPasswordUser);
  // Get these details and call
  //cognitoUser.completeNewPasswordChallenge(newPassword, userAttributes, this);
  let authenticationData = {
      Username: newPasswordUser.username,
      Password: newPasswordUser.existingPassword,
  };
  let authenticationDetails = new AuthenticationDetails(authenticationData);

  let userData = {
      Username: newPasswordUser.username,
      Pool: userPool
  };

  console.log("UserLoginService: Params set...Authenticating the user");
  let cognitoUser = new CognitoUser(userData);
  //console.log("UserLoginService: config is " + AWS.config);
  cognitoUser.authenticateUser(authenticationDetails, {
      newPasswordRequired: function (userAttributes, requiredAttributes) {
          // User was signed up by an admin and must provide new
          // password and required attributes, if any, to complete
          // authentication.

          // the api doesn't accept this field back
          delete userAttributes.email_verified;
          cognitoUser.completeNewPasswordChallenge(newPasswordUser.password, requiredAttributes, {
              onSuccess: function (result) {
                  callback.cognitoCallback(null, userAttributes);
              },
              onFailure: function (err) {
                  callback.cognitoCallback(err, null);
              }
          });
      },
      onSuccess: function (result) {
          callback.cognitoCallback(null, result);
      },
      onFailure: function (err) {
          callback.cognitoCallback(err, null);
      }
  });
}


confirmRegistration(username: string, confirmationCode: string, callback: CognitoCallback): void {
//alert(username)
  let userData = {
      Username: username,
      Pool: userPool
  };

  let cognitoUser = new CognitoUser(userData);

  cognitoUser.confirmRegistration(confirmationCode, true, function (err, result) {
      if (err) {
          callback.cognitoCallback(err.message, null);
      } else {
          callback.cognitoCallback(null, result);
      }
  });
}


resendCode(username: string, callback: CognitoCallback): void {
  let userData = {
      Username: username,
      Pool: userPool
  };

  let cognitoUser = new CognitoUser(userData);

  cognitoUser.resendConfirmationCode(function (err, result) {
      if (err) {
          callback.cognitoCallback(err.message, null);
      } else {
          callback.cognitoCallback(null, result);
      }
  });
}

chnagePAssword(oldPassword,newPassword, callback: CognitoCallback): void
{
 
const poolData = {
  UserPoolId: environment.userPoolId, // Your user pool id here
  ClientId:  environment.clientId // Your client id here  
};

const userPool = new CognitoUserPool(poolData);
 let cognitoUser = userPool.getCurrentUser();
if (cognitoUser != null) {
    cognitoUser.getSession(function (err, session) {
      //alert('1')
        if (err)
            console.log("UserParametersService: Couldn't retrieve the user");
        else {
            cognitoUser.changePassword(  oldPassword,newPassword, function(err, result) {
            //  alert('2')
                if (err) {
                    console.log("UserParametersService: in getParameters: " + err);
                    callback.cognitoCallback(err.message,result);
                } else {
                    callback.cognitoCallback(null,result);
                }
            });
        }

    });
} else {
  callback.cognitoCallback(null,null);
}


}

UpdateloggedinUser(){

const attributeList = [];

attributeList.push(new CognitoUserAttribute({
Name: 'nickname',
Value: 'name1'
}));
attributeList.push(new CognitoUserAttribute({
Name: 'name',
Value: 'name1'
}));

  
attributeList.push(new CognitoUserAttribute({
  Name: 'address',
  Value: 'address1'
}));

attributeList.push(new CognitoUserAttribute({
Name: 'given_name',
Value: 'sam1'
}));

attributeList.push(new CognitoUserAttribute({
  Name: 'email',
  Value: 'kandy_deol2000@yahoo.com'
  }));

/////////////Test
// let userData = {
//   Username: 'kandydeol2gmail.com',
//   Pool: userPool
// };

// let cognitoUser = new CognitoUser(userData);
////////


const poolData = {
  UserPoolId: environment.userPoolId, // Your user pool id here
  ClientId:  environment.clientId // Your client id here  
};

const userPool = new CognitoUserPool(poolData);
 let cognitoUser = userPool.getCurrentUser();
if (cognitoUser != null) {
    cognitoUser.getSession(function (err, session) {
      //alert('1')
        if (err)
            console.log("UserParametersService: Couldn't retrieve the user");
        else {
            cognitoUser.updateAttributes(attributeList, function(err, result) {
            //  alert('2')
                if (err) {
                    console.log("UserParametersService: in getParameters: " + err);
             //       alert(err.message)
                    //callback.cognitoCallback(err.message,result);
                } else {
           //       alert(result)  
                  //callback.cognitoCallback(null,result);
                }
            });
        }

    });
} else {
  //alert('3')
  //callback.cognitoCallback(null,null);
}
}

DeviceList()
{

  
const poolData = {
  UserPoolId: environment.userPoolId, // Your user pool id here
  ClientId:  environment.clientId // Your client id here  
};

const userPool = new CognitoUserPool(poolData);
 let cognitoUser = userPool.getCurrentUser();
if (cognitoUser != null) {
    cognitoUser.getSession(function (err, session) {
      //alert('1')
        if (err)
            console.log("UserParametersService: Couldn't retrieve the user");
        else {
            cognitoUser.listDevices(10, "0", {
                  onSuccess: function (result) {
        // alert(result)
                    console.log('call result: ' + result);
                  },
                  onFailure: function(err) {
          //            alert(err.message);
                  }
              });
        }

    });
} else {
  //alert('3')
  //callback.cognitoCallback(null,null);
}
}


isAuthenticated(callback: LoggedInCallback) {
  if (callback == null)
      throw("UserLoginService: Callback in isAuthenticated() cannot be null");

  let cognitoUser = userPool.getCurrentUser();

  if (cognitoUser != null) {
      cognitoUser.getSession(function (err, session) {
          if (err) {
              console.log("UserLoginService: Couldn't get the session: " + err, err.stack);
              callback.isLoggedIn(err, false);
          }
          else {
              console.log("UserLoginService: Session is " + session.isValid());
              callback.isLoggedIn(err, session.isValid());
          }
      });
  } else {
      console.log("UserLoginService: can't retrieve the current user");
      callback.isLoggedIn("Can't retrieve the CurrentUser", false);
  }
}


getAccessToken(callback: Callback): void {
  if (callback == null) {
      throw("CognitoUtil: callback in getAccessToken is null...returning");
  }
  if (userPool.getCurrentUser() != null) {
    userPool.getCurrentUser().getSession(function (err, session) {
          if (err) {
              console.log("CognitoUtil: Can't set the credentials:" + err);
              callback.callbackWithParam(null);
          }
          else {
              if (session.isValid()) {
                  callback.callbackWithParam(session.getAccessToken().getJwtToken());
              }
          }
      });
  }
  else {
      callback.callbackWithParam(null);
  }
}

getIdToken(callback: Callback): void {
  if (callback == null) {
      throw("CognitoUtil: callback in getIdToken is null...returning");
  }
  if (userPool.getCurrentUser() != null)
  userPool.getCurrentUser().getSession(function (err, session) {
          if (err) {
              console.log("CognitoUtil: Can't set the credentials:" + err);
              callback.callbackWithParam(null);
          }
          else {
              if (session.isValid()) {
                  callback.callbackWithParam(session.getIdToken().getJwtToken());
              } else {
                  console.log("CognitoUtil: Got the id token, but the session isn't valid");
              }
          }
      });
  else
      callback.callbackWithParam(null);
}


}

export interface Callback {
  callback(): void;

  callbackWithParam(result: any): void;
}

 