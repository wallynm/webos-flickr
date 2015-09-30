enyo.kind({
  name: 'myapp.IntroView',
  kind: 'moon.Panels',
  classes: 'moon enyo-fit main-view',
  pattern: 'activity',
  components: [{
    kind: 'moon.Panel', title: 'Hello World!', headerComponents: [{
      kind: 'moon.IconButton', src: 'assets/icon-like.png'
    }],
    components: [{
      kind: 'moon.BodyText', content: 'Just a simple test'
    }]
  }]
});
