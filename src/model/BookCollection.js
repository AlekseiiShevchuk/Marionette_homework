var BookCollection = Backbone.Collection.extend({
  url: 'http://laravelrestapi/api/books',
  model: BookModel
});