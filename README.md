# socialfleet
[2 tier enterprise app Node and Anglular](http://www.pluralsight.com/courses/two-tier-enterprise-app-api-development-angular-sails)
- manually added sails.bat in Windows/System32 to generate sails scaffolding
- Unable to > sails generate api  

## Scaffold and Launch Sails
* > sails new --no-frontend
* > sails lift

- Create Users by hitting endpoints:
- http://localhost:1337/user/create?name=Alex
- http://localhost:1337/user/create?name=Tim&email=a@am.com

- Uncomment /config/models.js   *migrate: 'alter'*   --  avoid sails lift prompt
- Twitter App:  CB URL =  http://127.0.0.1:8000

## Angular Setup
- new `backend` folder move everything into
**Bower** + **Gulp**
- new `frontend` folder  +   > npm init  +  > *npm install bower --save-dev*  
- > bower init    +    > bower install angular --save     
- > npm install gulp --save-dev
- > npm install gulp-webserver --save                 (launches webserver on port 8000)
- > npm install main-bower-files --save-dev        (copies bower files)
- > npm install gulp-inject --save-dev                  (Specify where to include JS/CSS files in index.html)
- Creating `gulp tasks` to inject JS/CSS files and add to */temp* folder
- add *vendorInject:js* and :cs to pull from bower
- setup gulp `watch` task to rebuild on any changes made to directories + *livereload*
- 
