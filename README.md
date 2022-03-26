# AWS Amplify

This is AWS serverless framework      
It simply adds the Auth service into a React application like this:

<br />

[Sign in/ Sign out](./src/assets/signIn-signOut.png)


<br />

## Install

- `npm install -g @aws-amplify/cli`    // Installs Amplify CLI

Must configure Amplify first (create an account with AWS)

- `amplify configure`   

Then inside of React Application

- `npm install aws-amplify @aws-amplify/ui-react`
- `amplify init`   // app configuration
- `amplify add auth` //adding auth service
- `amplify push`
- `npm start`


<br />

:100%:# aws-auth
