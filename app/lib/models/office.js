import { Model } from '/app/lib/helpers/model';
import { Offices as collection } from '/app/lib/collections';
import { Address } from './_address';
import { Person } from './_person';

const schema = {
  address: Address,

  // Commenting out the following line (= not using `Person`) also fixes the issue.
  manager: Person,
};

const Office = Model.create({
  name: 'Office',
  collection,
  schema
});

export { Office, schema };
