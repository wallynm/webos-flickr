enyo.kind({
  name: 'smartView.SearchPanel',
  kind: 'moon.Panel',
  title: 'Search Flickr',
  titleBelow: 'Enter search term above',
  headerOptions: {inputMode: true, dismissOnEnter: true},

  components: [{
    kind: 'moon.DataGridList', fit: true, name: 'SearchPanelGrid', minWidth: 250, minHeight: 300, ontap: 'itemSelected', components: [{
      kind: 'moon.GridListImageItem', imageSizing: 'cover', useSubCaption: false, centered: false, bindings: [
        {from: 'model.title', to: 'caption'},
        {from: 'model.thumbnail', to: 'source'}
      ]
    }]
  }],

  events: {
    onRequestPushPanel: ''
  },

  handlers: {
    onInputHeaderChange: 'search'
  },

  headerComponents: [
    {kind: 'moon.Spinner', content: 'Loading...', name: 'spinner'}
  ],

  bindings: [{
      from: 'photos', to: '$.SearchPanelGrid.collection'
    }, {
      from: 'photos.status', to: '$.spinner.showing', transform: function() {
      return this.photos.isBusy();
    }}
  ],

  pushPanel: function(inSender, inEvent) {
    this.$.panels.pushPanel(inEvent.panel);
  },

  create: function() {
    this.inherited(arguments);
    this.set('photos', new smartView.SearchCollection());
  },

  itemSelected: function(inSender, inEvent) {
    this.doRequestPushPanel({panel: {kind: 'smartView.DetailPanel', model: inEvent.model}});
  },

  search: function(inSender, inEvent) {
    this.$.SearchPanelGrid.collection.set('searchText', inEvent.originator.get('value'));
  }
});
