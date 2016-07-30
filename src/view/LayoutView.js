var LayoutView = Marionette.LayoutView.extend({
  el: '#app',

  template: '#LayoutTemplate',

  regions: {
    books: '#books',
    bookForm: '#new-book'
  },

  ui: {
    add: '#add'
  },

  events: {
    'click @ui.add': 'onAddBtnClick'
  },

  enterbookFormMode: function() {
    this.ui.add.hide();
    this.showChildView('bookForm', this.createNewBookView());
  },

  enterBookEditMode: function(view) {
    this.ui.add.hide();
    this.showChildView('bookForm', this.createNewBookView(view.model));
  },

  exitBookEditMode: function() {
    this.ui.add.show();
    this.getRegion('bookForm').empty();
  },

  onAddBtnClick: function(e) {
    e.preventDefault();
    this.enterbookFormMode();
  },

  onAddCancel: function() {
    this.exitBookEditMode();
  },

  onBookSave: function(book) {
    this.collection.create(book.attributes, {
      wait: true,
      success: this.exitBookEditMode.bind(this)
    });
  },

  onRender: function() {
    var view = new BooksView({
      collection: this.collection,
      model: this.options.booksSortModel
    });
    this.showChildView('books', view);

    this.listenTo(view, 'childview:book:edit', this.enterBookEditMode);
  },

  createNewBookView: function(model) {
    var view = new NewBookView({
      model: model || new BookModel()
    });
    this.listenTo(view, 'cancel', this.onAddCancel);
    this.listenTo(view, 'save', this.onBookSave);
    return view;
  }
});