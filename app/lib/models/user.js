import { Model } from '/app/lib/helpers/model';
import { Users as collection } from '/app/lib/collections';

const schema = {};

const User = Model.create({
  name: 'User',
  collection,
  schema
});

export { User, schema };
