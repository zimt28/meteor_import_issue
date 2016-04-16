
# Meteor Import issue?

All relevant files can be found in `/app/lib/models`.
The folder contains all my models. I've added an [`index.js` (`/app/lib/models/index.js`)](app/lib/models/index.js), which exports all models.

The app crashes, because I'm trying to import one model [`Address` (`/app/lib/models/_address.js`)](/app/lib/models/_address.js) in the [`/app/lib/models/_person.js`)](/app/lib/models/_person.js) file via the index file: `import { Address } from './';`.

However, trying the same import in the [`/app/lib/models/_shipment.js`)](/app/lib/models/_shipment.js) file works just fine.

Is it some kind of loading order issue? In [`/app/lib/models/office.js`)](/app/lib/models/office.js) I use both, the `Address` model as well as the `Person` model, while `Person` depends on `Address`. Not using the `Person` model inside of that file fixes the issue as well.
