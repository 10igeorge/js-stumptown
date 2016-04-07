import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('category');
  },
  listProduct(params){
    var newProduct = this.store.createRecord('product', params);
    newProduct.save();
    this.transitionTo('products');
  }
});
