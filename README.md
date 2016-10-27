# DropSplash
DropSplash the Real App


````
meteor --settings settings.json
````

https://galaxy.meteor.com/robincwillis

https://mlab.com/databases/dsdb

login - robincwillis@gmail.com


##Notes


DEPLOY_HOSTNAME=us-east-1.galaxy-deploy.meteor.com meteor deploy http://sptdp.us --settings.json

DEPLOY_HOSTNAME=us-east-1.galaxy-deploy.meteor.com meteor deploy www.dropsplash.com --settings.json --owner gaw

DEPLOY_HOSTNAME=us-east-1.galaxy-deploy.meteor.com meteor deploy www.dropsplash.com --settings settings.json --owner gaw


need to point sptdp.us to>> us-east-1.galaxy-ingress.meteor.com



DEPLOY_HOSTNAME=galaxy.meteor.com meteor deploy sptdp.us --settings settings.json


//Add loading stuff in
//build loading component
//you can do cool loading stuff with subscription.ready() and createContainer
//better way to check/add the first section using subscription.ready()


//new meteor is so dope
https://github.com/meteor/todos/tree/react

DropSplash
	√ Facebook Account
	√ Twitter Account
	√ Google Account
	PO Box / Email Account
	kadira account
	meteor / galaxy account

Gordils & Willis
	Medium Account
	Twitter Account
	Facebook Account
	PO Box / Email Accounts
	Slack Account

Sunday
	1. Get Auth (Email / Facebook / Twitter / Google) Wired Up (admin auth through github)
	2. Define all collections (Page, Block, Widget),
	3. Permissions in router (Public / Private Layouts)

DropSplash2016#


 'click .logout': function(event){
    event.preventDefault();
    Meteor.logout();
    Router.go('login');
}

dropsplash.com/MySplashTitle => splash/:id

users/:id/splash/:id

dropsplash.com/MySplashTitle/settings
dropsplash.com/MySplashTitle/edit
dropsplash.com/MySplashTitle/preview

----

-best way to sandbox react components?