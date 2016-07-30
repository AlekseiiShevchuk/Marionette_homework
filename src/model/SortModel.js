var SortModel = Backbone.Model.extend({
  defaults: {
    sortBy: null,
    sortOrder: null
  },

  isEmpty: function() {
    return !this.get('sortBy') || !this.get('sortOrder');
  }
});