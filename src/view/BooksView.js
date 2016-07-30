var BooksView = Marionette.CompositeView.extend({
  template: '#booksTableTemplate',
  childView: BookItemView,
  childViewContainer: 'table tbody',

  ui: {
    sort: 'span[data-sortBy]'
  },

  events: {
    'click @ui.sort': 'onSortLinkClick'
  },

  modelEvents: {
    'change': 'render'
  },

  onSortLinkClick: function(e) {
    var $el = $(e.currentTarget),
      sortBy = this.model.get('sortBy'),
      sortOrder = this.model.get('sortOrder');

    this.model.set({
      sortBy: $el.data('sortby'),
      sortOrder: sortBy == $el.data('sortby') ? -sortOrder || 1 : 1
    });

    this.collection.sort();
  },

  onRender: function() {
    var sortBy = this.model.get('sortBy');
    this.ui.sort.attr('class', 'fa fa-sort');

    if (this.model.isEmpty()) {
      return;
    }
    if (this.model.get('sortOrder') > 0) {
      this.ui.sort.filter('[data-sortBy="'+sortBy+'"]').attr('class', 'fa fa-sort-asc');
    } else {
      this.ui.sort.filter('[data-sortBy="'+sortBy+'"]').attr('class', 'fa fa-sort-desc');
    }
  }
});