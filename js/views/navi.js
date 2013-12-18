var Navi = Backbone.View.extend({
  el: '#navi',

  template: require('../../templates/navi.hbs'),

  initialize: function () {
    this.listenTo(this.collection, 'add', this.render)
    this.listenTo(this.collection, 'remove', this.render)
  },

  render: function () {
    var self = this;

    this.$el.empty();

    this.collection.each(function (post) {
      var $naviTitle = $(self.template(post.toJSON()));

      $naviTitle.click(function () {
        if(post.get('display') === true) {
          post.set('display', false)
        } else {
          post.set('display', true)
        }
      })
      self.$el.append($naviTitle);
    });

    return this;
  }
})

module.exports = Navi;