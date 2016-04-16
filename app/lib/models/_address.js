import { Model } from '/app/lib/helpers/model';

const schema = {};

const Address = Model.create({
  name: 'Address',
  schema
});

export { Address, schema };
