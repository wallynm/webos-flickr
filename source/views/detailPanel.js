enyo.kind({
  name: 'smartView.DetailPanel',
  kind: 'moon.Panel',
  layoutKind: 'FittableColumnsLayout',
  components: [
    {kind: 'moon.Image', fit: true, sizing: 'contain', name: 'image'}
  ],
  bindings: [
    {from: 'model.title', to: 'title'},
    {from: 'model.original', to: '$.image.src'},
    {from: 'model.username', to: 'titleBelow', transform: function(val) {
      return 'By ' + (val || ' unknown user');
    }},
    {from: 'model.taken', to: 'subTitleBelow', transform: function(val) {
      return val ? 'Taken ' + val : '';
    }}
  ],

  transitionFinished: function(inInfo) {
    console.warn(inInfo.from < inInfo.to)
    if (inInfo.from < inInfo.to) {
      this.model.fetch();
    }
  }
});
