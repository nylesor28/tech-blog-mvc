# The Tech Blog MVC

# Description
The Tech Blog allows developers to publish their blog posts and comment on other developers’ posts as well. The site is hosted in Heroku and follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

# Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#test)
* [Contributing](#​contributors)
* [Contact Me](#contact-me)
* [License](#license)


## Installation
````
 1. To create the database for the first time
    a. cd to the project root directory 
    b. mysql -u <username> -p
    c. Enter Password
    d. Run source b/schema.sql
2. Run npm run start
3. To initially load the database, npm run seed
````

## Usage
1. Application is deployed to heroku (https://nylesor28-tech-blog-mvc.herokuapp.com/)
2. On application load, users are presented with list of blogs currently uploaded using the application
3. To create an account, click the register link
4. To login with an exising account, click login
    - Upon Successful login, users can edit/delete posts and comment on posts as well
    - Users session timeout after 5 mins for the purpose of the graders

## ​Contributors
* Starter Code Can Be found at: <https://github.com/coding-boot-camp/fantastic-umbrella>


## Contact Me
For Issues please create a github issue for the repository

 
  ## License
  This  project is currently unlicensed 

