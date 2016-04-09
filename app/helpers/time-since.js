import Ember from 'ember';

export function timeSince(params) {
  var eventTime = params[0].get('date');
  var currentTime = Date.now();
  var elapsedTime = currentTime - eventTime;

  if( elapsedTime < 3600000) {
    var minutes = Math.floor(elapsedTime/60000);
    return minutes.toString() + " m ago";
  } else if (elapsedTime < 172800000) {
    var hours = Math.floor(elapsedTime/3600000);
    return hours.toString() + " hr ago";
  } else {
    var days = Math.floor(elapsedTime/172800000);
    return hours.toString() + " days ago";
  }
}

export default Ember.Helper.helper(timeSince);
