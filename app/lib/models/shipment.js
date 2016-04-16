import { Model } from '/app/lib/helpers/model';
import { Shipments as collection } from '/app/lib/collections';

/* Importing from `index.js` file works. */
import { Address } from './';

const schema = {
  senderAddress: Address,
  recipientAddress: Address
};

const Shipment = Model.create({
  name: 'Shipment',
  collection,
  schema
});

export { Shipment, schema };
