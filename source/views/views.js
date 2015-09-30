enyo.kind({
  name: 'smartView.MainView',
  classes: 'moon enyo-fit',
  components: [{
    kind: 'moon.Panels', classes: 'enyo-fit', pattern: 'alwaysviewing', popOnBack: true, components: [{
      kind: 'smartView.SearchPanel'
    }]
  }]
});

enyo.kind({
  name: 'smartView.SearchPanel',
  kind: 'moon.Panel',
  title: 'Search Flickr',
  titleBelow: 'Enter search term above',
  headerOptions: {inputMode: true, dismissOnEnter: true},
  handlers: {
    onInputHeaderChange: 'search'
  },

  bindings: [
    {from: 'photos', to: '$.resultList.collection'}
  ],

  create: function() {
    this.inherited(arguments);
    this.set('photos', new smartView.SearchCollection());
  },

  components: [{
    kind: 'moon.DataGridList', fit: true, name: 'resultList', minWidth: 250, minHeight: 300, components: [{
      kind: 'moon.GridListImageItem', imageSizing: 'cover', useSubCaption: false, centered: false, bindings: [
        {from: 'model.title', to: 'caption'},
        {from: 'model.thumbnail', to: 'source'}
      ]
    }]
  }],
  search: function(inSender, inEvent) {
    this.$.resultList.collection.set('searchText', inEvent.originator.get('value'));
  }
});
