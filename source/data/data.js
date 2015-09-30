enyo.kind({
  name: 'smartView.FlickrAPI',
  kind: 'enyo.JsonpSource',
  urlRoot: 'https://api.flickr.com/services/rest/',
  fetch: function(rec, opts) {
    opts.callbackName = 'jsoncallback';
    opts.params = {};
    opts.params.api_key = '2a21b46e58d207e4888e1ece0cb149a5';
    opts.params.format = 'json';
    this.inherited(arguments);
  }
});

new smartView.FlickrAPI({name: 'flickr'});

enyo.kind({
  name: 'smartView.SearchCollection',
  kind: 'enyo.Collection',
  model: 'smartView.ImageModel',

  source: 'flickr',
  options: {parse: true},

  published: {
    searchText: null
  },
  searchTextChanged: function() {
    this.empty({destroy: true});
    this.fetch();
  },
  fetch: function(opts) {
    console.warn('fetch')
    this.params = {
      method: 'flickr.photos.search',
      sort: 'interestingness-desc',
      per_page: 50,
      text: this.searchText
    };
    return this.inherited(arguments);
  },
  parse: function(data) {
    return data && data.photos && data.photos.photo;
  }
});

enyo.kind({
  name: 'smartView.ImageModel',
  kind: 'enyo.Model',
  computed: [
      {method: 'thumbnail', path: ['farm', 'server', 'id', 'secret']},
      {method: 'original', path: ['farm', 'server', 'id', 'secret']}
  ],
  thumbnail: function() {
    return 'https://farm' + this.get('farm') +
        '.static.flickr.com/' + this.get('server') +
        '/' + this.get('id') + '_' + this.get('secret') + '_m.jpg';
  },
  original: function() {
    return 'https://farm' + this.get('farm') +
        '.static.flickr.com/' + this.get('server') +
        '/' + this.get('id') + '_' + this.get('secret') + '.jpg';
  }
});
