Package.describe({
  name: 'planifica:wizard',
  summary: "A wizard component for AutoForm.",
  version: '0.0.6',
  git: 'https://github.com/Planifica/meteor-wizard.git'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');
  api.use([
	'underscore', 
	'deps', 
	'templating', 
	'ui', 
	'session',
  ], 'client');
  api.use('aldeed:autoform');
  api.use('aldeed:simple-schema', ['client', 'server']);
  api.use('u2622:persistent-session');
  api.imply(['aldeed:simple-schema']);
  
  api.addFiles([
    'wizard.html',
    'wizard.js',
    'wizard.css'
  ], 'client');
});

// Package.onTest(function(api) {
//   api.use('tinytest');
//   api.use('philippspo:wizard');
//   api.addFiles('philippspo:wizard-tests.js');
// });
