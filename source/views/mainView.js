enyo.kind({
  name: 'smartView.MainView',
  classes: 'moon enyo-fit',
  components: [{
    kind: 'moon.Panels', classes: 'enyo-fit', components: [{
      kind: 'smartView.SearchPanel'
    }]
  }],
  handlers: {
    onRequestPushPanel: 'pushPanel'
  },
  pushPanel: function(inSender, inEvent) {
    this.$.panels.pushPanel(inEvent.panel);
  }
});
