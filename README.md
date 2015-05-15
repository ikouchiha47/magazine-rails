# Angular-Rails Application

### Dependencies

* rails 4.2.0
* purecss
* rails-api
* jbuilder

* bower
* grunt

##v3 

* Using __grunt__ as a replacement for __sprockets__
* Serve static pre-compiled assets with apache/unix
* and rails server for api
* No idea what I said up there.

## Geeting Started

`git clone git@github.com:argentum47/magazine-rails.git`

Modify the database.yml

```
rake db:setup
```
`npm install -g bower`
```
bower install
rails s
```

Browse to <a href="localhost:9000">localhost</a>

The api requests are proxy-ed from :9000 to :3000 via grunt-proxy

<aside>On a sidenote I took the application from Railscast #154 </aside>
