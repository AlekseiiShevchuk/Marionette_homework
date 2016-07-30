var BookModel = Backbone.Model.extend({
  defaults: {
    id: null,
    title: null,
    author: null,
    year: null,
    genre: null,
    user_id: null
  },

  validation: {
    title: {
      required: true
    },
    author: {
      required: true
    },
    year: {
      required: true
    },
    genre: {
      required: true
      // pattern: 'some pattern'
    }
  }
});