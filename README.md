# pl-identity-manage

## Requirements

1. [Node.js >= 12x](https://nodejs.org/en/download/package-manager/)
2. [Serverless](https://www.serverless.com/framework/docs/getting-started)
3. [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
4. [AWS Account](https://aws.amazon.com/console/)

## Quick start

1. Create an User from IAM AWS Account as **AdministratorAccess** to generate your secrect keys
   ![First Draft Draw](/images/iam-console.png)

2. Open your terminar and execute the command below

```bash
#!/bin/bash
serverless config credentials -o --provider aws --key=YOUR_KEY --secret=YOUR_SECERT_KEY
```

3. Now you can exec the command

```bash
#!/bin/bash
npm run deploy
```

4. To get the API url you need to open the Serverless Deploy tab of the pipeline and get the desired urls

![First Draft Draw](/images/urls-serverless-urls.png)

## Hooks workflow

1. [Lint-Staged](https://www.npmjs.com/package/lint-staged)
2. [Prettier](https://www.npmjs.com/package/prettier)
3. [Jest-Test](https://jestjs.io/)
4. [Conventional-Commits](https://www.conventionalcommits.org/en/v1.0.0/)
5. [Husky](https://www.npmjs.com/package/husky)

![First Draft Draw](/images/hooks.png)

## CI/CD Automate workflow

We are using **[GitHub Actions](https://docs.github.com/en/actions)** to continuous integration and continuous delivery **(CI/CD)** platform.
Every time you make **[opened, synchronize, reopened]** or **push** to **master** branch will run some steps processes our pipeline.

![First Draft Draw](/images/ci-cd-pipeline.png)

## REFERENCES

### ARTICLES

- [GIT COMMIT MESSAGES](https://remarkablemark.org/blog/2019/05/29/git-husky-commitlint)
- [TYPESCRIPT SERVERLESS](https://codetain.com/blog/lambda-in-typescript-with-serverless-framework)
- [LINT CONFIG](https://loige.hashnode.dev/configure-eslint-and-standardjs)
- [TEST CONFI](https://swizec.com/blog/how-to-configure-jest-with-typescript)
- [PIPELINE](https://medium.com/craftsmenltd/setting-up-a-nodejs-typescript-ci-cd-pipeline-for-aws-lambda-using-github-action-and-serverless-81f718036b4)
- [PRETTIER](https://prettier.io/docs/en/install.html)
- [RESOURCE-NAME](https://restfulapi.net/resource-naming)
- [CLEAN ARCHITECTURE](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [THE DEPENDENCY RULE](https://khalilstemmler.com/wiki/dependency-rule)
- [AWS-LAMBDA-TYPE-DEFINITIONS](https://serverlessfirst.com/aws-lambda-type-definitions)
