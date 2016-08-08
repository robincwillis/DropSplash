const services = Meteor.settings ? Meteor.settings.private.oAuth : null;

const configureServices = () => {
  if ( services ) {
    for( let service in services ) {
      ServiceConfiguration.configurations.upsert( { service: service }, {
        $set: services[ service ]
      });
    }
  }
};

export default configureServices();
