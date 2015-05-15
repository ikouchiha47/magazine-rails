# Angular-Rails Application

### Dependencies

* rails 4.2.0
* rails-api
* jbuilder
* angular-rails-templates

* bower

##v2 (yet to start)

An angular-rails app, using __sprockets__ to serve angular files.

Angular related files are in a separate directory *ngapp/*,

Separate javascript and stylesheet manifest files: `ngapplication.js` and `ngapplication.css` serve the angular specific files, 

`ngapp` directcory is added to `assets.paths` and the the above to files are added to precompile list.

A route under the `ng` namespace redirects all requests to `welcome#index` and Ng::WelcomeController#index renders `ngapplication.html.erb` , which is the entry point for the angular app, containing `ng-app=<app-name>` .
angular-rails-template to serve angular templates.

## Geeting Started

`git clone git@github.com:argentum47/magazine-rails.git`

Modify the database.yml

```
rake db:setup
```
`npm install -g bower` (hah, that's crazy, but i didn't wanna npm init)
```
bower install
rails s
```

Browse to <a href="localhost:3000">localhost</a>

<aside>On a sidenote I took the application from Railscast #154 </aside>
