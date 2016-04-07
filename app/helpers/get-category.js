import Ember from 'ember';

export function getCategory(params) {
  if(params[0].get('name') === params[1]){
   return true;
  } else {
   return false;
  }
}

export default Ember.Helper.helper(getCategory);
