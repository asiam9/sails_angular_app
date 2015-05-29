# socialfleet
[2 tier enterprise app Node and Anglular](http://www.pluralsight.com/courses/two-tier-enterprise-app-api-development-angular-sails)
- manually added sails.bat in Windows/System32 to generate sails scaffolding
- Unable to > sails generate api  

### Running
- /frontend    > gulp
- /backend    > sails lift       (or node app)

## Scaffold and Launch Sails
* > sails new --no-frontend
* > sails lift

- Create Users by hitting endpoints:
- http://localhost:1337/user/create?name=Alex
- http://localhost:1337/user/create?name=Tim&email=a@am.com

- Uncomment /config/models.js   *migrate: 'alter'*   --  avoid sails lift prompt
- Twitter App:  CB URL =  http://127.0.0.1:8000

## Angular Setup
- new `backend` folder, move all files into it
- **Bower** + **Gulp**
- new `frontend` folder  +   > npm init  +  > *npm install bower --save-dev*  
- > bower init    +    > bower install angular --save     
- > npm install gulp --save-dev
- > npm install gulp-webserver --save                 (launches webserver on port 8000)
- > npm install main-bower-files --save-dev        (copies bower files)
- > npm install gulp-inject --save-dev                  (Specify where to include JS/CSS files in index.html)
- Creating `gulp tasks` to inject JS/CSS files and add to */temp* folder
- add *vendorInject:js* and :cs to pull from bower
- setup gulp `watch` task to rebuild on any changes made to directories + *livereload*

# Authorization - Satellizer
- > bower install satellizer --save         
- set up a *PROXY*       (alt to CORS)
- - anything started with /api will trigger proxy so frontend server will bounce request to backend domain
- - set up in gulpfile.js in 'serve' - 'webserver' object
- backend/api/controllers  --  add *login* function to UserController
- paste in satellizer Twitter node auth example
- new *config* file inside /service
- npm install `request jwt-simple moment` --save
- copy over Model attributes and adjust for 'waterline' ORM
- - adjust step 5a in UserController and add *createToken* function
- new *PostController* and 'tweet' function
- npm install twit --save      -> add to tweet function
- add twitterSecret, twitterToken to model and update `UserController` + authenticateUrl
- backend/config/policies - uncomment Line 29 change to false to protect routes
- api/policies/ - jwtAuth.js  -  decrypting JWT and extracting the userId -- add functions to policies

# Styling
- Bootstrap, DateTime, Create a Post, Post List
- using Sandstone from [Bootswatch](http://bootswatch.com) CSS
- add 'message' object to *$scope.tweet* and log this in PostController