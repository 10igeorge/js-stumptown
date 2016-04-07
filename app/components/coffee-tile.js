import Ember from 'ember';

export default Ember.Component.extend({
  coffeeList: false,
  actions: {
    showCoffees(origin){
      this.set('coffeeList', true);
    }
  }
});
