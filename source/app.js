/**
	Define and instantiate your enyo.Application kind in this file.  Note,
	application rendering should be deferred until DOM is ready by wrapping
	it in a call to enyo.ready().
*/

enyo.kind({
  name: 'smartView.Application',
  kind: 'enyo.Application',
  view: 'smartView.SearchPainel'
});

enyo.ready(function() {
  new smartView.Application({name: 'app'});
});
