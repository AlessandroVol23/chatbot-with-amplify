# How to develop a Serverless Chatbot with AWS Amplify, Amazon Lex & React

This is the code repository for the blog post https://sandro.volpee.de/how-to-develop-a-serverless-chatbot-with-aws-amplify-amazon-lex-and-react 

For a detailed explanation, have a look at the blog post.

## Amplify 

All backend is declared in the `amplify` folder. If you want to deploy it on your account you have to follow the CLI:

```bash
amplify init
? Do you want to use an existing environment? No
```
Then just follow the CLI and after that:

```zsh
amplify push --yes
```

## Web Server

Install requirements and start the web server with `yarn` (or npm). 

```bash
yarn install
yarn start
```