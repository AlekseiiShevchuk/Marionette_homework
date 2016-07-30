var BookItemView = Marionette.ItemView.extend({
  tagName: 'tr',
  template: '#bookTemplate',
  ui: {
    del_btn: 'a[class="remove btn btn-danger"]',
    edit_btn: 'a[class="edit btn btn-primary"]',
  },

  events: {
    'click @ui.del_btn': 'deleteBook',

  },

  triggers: {
    'click @ui.edit_btn': 'book:edit'
  },

  deleteBook: function () {
 
      this.model.destroy();
    }

});