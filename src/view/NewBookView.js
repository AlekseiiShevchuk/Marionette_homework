var NewBookView = Marionette.ItemView.extend({
  template: '#newBookTemplate',

  ui: {
    save: 'button[type="submit"]',
    cancel: 'button[type="reset"]',
    form: 'form'
  },

  events: {
    'click @ui.save': 'onSaveClick'
  },

  triggers: {
    'click @ui.cancel': 'cancel'
  },

  modelEvents: {
    'validated:invalid': 'onValidationFail'
  },

  validationErrors: {},

  templateHelpers: function() {
    return {
      getError: function(name) {
        return this.validationErrors[name];
      }.bind(this)
    };
  },

  initialize: function() {
    Backbone.Validation.bind(this);
  },

  onValidationFail: function(model, errors) {
    this.validationErrors = errors;
    this.render();
  },

  onSaveClick: function(e) {
    e.preventDefault();

    var formData = this.ui.form.serializeArray(),
      modelData = {};

    _(formData).each(function(fieldData) {
      modelData[fieldData.name] = fieldData.value;
    });

    this.model.set(modelData);

    if (this.model.isValid(true)) {
      this.triggerMethod('save', this.model);
    }
  }
});