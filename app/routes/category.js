import Ember from 'ember';

export default Ember.Route.extend({
  coffeeList: false,
  model(params){
    return this.store.findRecord('category', params.category_id);
  },
  actions:{
    showCoffees(origin){
      this.set('coffeeList', true);
    }
  }
});
