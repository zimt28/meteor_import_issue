import { Astro } from 'meteor/jagi:astronomy';
import { _ } from 'underscore';

const Model = {
  create(model) {
    const astroModel = _.omit(model, 'schema');
    astroModel.fields = model.schema;

    return Astro.Class.create(astroModel);
  }
};

export { Model };
