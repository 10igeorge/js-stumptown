import Ember from 'ember';

export default Ember.Component.extend({
  newProductForm: false,
  actions: {
    showProductForm(){
      this.set('newProductForm', true);
    },
    listProduct(){
      var params = {
        name: this.get('name'),
        description: this.get('description'),
        category: this.get('category'),
        price: this.get('price'),
        origin: this.get('origin'),
        notes: this.get('notes'),
        image: this.get('image')
      };
      this.set('newProductForm', false);
      this.sendAction('listProduct', params);
    }
  }

});
