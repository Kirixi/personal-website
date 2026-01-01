# About

This website showcases my work, skills, and projects. It was built using React and 3JS, and hosted using AWS cloud services like CloudFront and S3. You can find my portfolio [here.](https://www.tjonathan.com/)

## Technologies Used

This project was built using the following technologies:

- React
- 3JS
- AWS CloudFront
- AWS S3
- HTML/CSS/JavaScript
- Github Actions

## Deployment

To deploy this project, you'll need to have an AWS account and be familiar with AWS CloudFront and S3. Here are the high-level steps:

1. Create an S3 bucket and upload your project files to it.
2. Certify your domain name with AWS certificate manager.
3. Create a CloudFront distribution for your S3 bucket.
4. Configure your DNS to point to your CloudFront distribution.
5. Verify that your website is accessible through your custom domain name.

_Note: for an in depth process you can look for a tutorial at the end of the readme_

## CI/CD Pipeline

Adding a CI/CD pipeline would decrease the time to deploy a new version of the app as it would automate the deployment process that was discussed previously.
You can find a detailed tutorial to setup a CI/CD pipeline for your own project in the acknowledgement section below.

## Acknowledgement

| Category             | Links                                                                                                                   |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Deployment           | https://www.youtube.com/watch?v=l97zYgiB57k                                                                             |
| CI/CD pipeline setup | https://antonputra.com/amazon/deploy-react-to-s3-and-cloudfront/#setup-cicd-pipeline-for-react-app-using-github-actions |
