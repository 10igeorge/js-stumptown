import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.belongsTo('category', {async:true}),
  name: DS.attr(),
  description: DS.attr(),
  price: DS.attr(),
  origin: DS.attr(),
  notes: DS.attr()
});
