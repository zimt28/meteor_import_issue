import { Model } from '/app/lib/helpers/model';

/* Importing from `index.js` file doesn't work. */
/* Can be fixed by importing from './_address' */
import { Address } from './';

const schema = {
  address: Address,
};

const Person = Model.create({
  name: 'Person',
  schema
});

export { Person, schema };
