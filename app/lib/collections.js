import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Offices   = new Mongo.Collection('offices');
export const Shipments = new Mongo.Collection('shipments');
export const Users     = Meteor.users;

Object.keys(exports).forEach(collection => {
  if (!exports[collection].deny) {
    return;
  }

  exports[collection].deny({
    insert: () => true,
    update: () => true,
    remove: () => true
  });
});
