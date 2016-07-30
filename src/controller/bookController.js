$(function() {
  var sortModel = new SortModel();

  books = new BookCollection([], {
    comparator: BookCollectionComparator(sortModel)
  });

  var view = new LayoutView({
    collection: books,
    booksSortModel: sortModel
  });
  view.render();

  books.fetch();
});