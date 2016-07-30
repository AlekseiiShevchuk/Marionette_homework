var BookCollectionComparator = function(sortModel) {
  return function(book1, book2) {
    var sortBy = sortModel.get('sortBy'),
      sortOrder = sortModel.get('sortOrder');

    switch (true) {
      case sortModel.isEmpty():
        return 0;
      case book1.get(sortBy) > book2.get(sortBy):
        return sortOrder;
      case book1.get(sortBy) < book2.get(sortBy):
        return -sortOrder;
      default:
        return 0;
    }
  };
};