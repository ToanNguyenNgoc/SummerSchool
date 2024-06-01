import { factories } from '@strapi/strapi';
import { sendResponseDetail } from '../../../utils';
import { omit } from 'lodash';


export default factories.createCoreController('api::object-user.object-user', ({ strapi }) => ({
  async register(ctx) {
    try {
      const requestBody = ctx.request.body;
      const objectUser = await strapi.entityService.findOne('api::object-user.object-user', requestBody.objectUserId)
      if (!objectUser) {
        ctx.throw(400, "Object user not found");
      }
      const newCustomer = await strapi.entityService.create('plugin::users-permissions.user', {
        data: {
          ...requestBody,
          provider: 'local',
          confirmed: true,
          object_user: objectUser.id
        },
      });
      ctx.body = newCustomer;
    } catch (error) {
      ctx.throw(400, error.message);
    }
  },
  async profile(ctx) {
    try {
      const user_id = ctx.user_id;
      const user = await strapi.entityService.findOne(
        'plugin::users-permissions.user',
        user_id,
        { 'populate': 'object_user', 'fields': '*' }
      );
      return sendResponseDetail(omit(user, ['password']))
    } catch (error) {
      ctx.throw(400, error.message);
    }

  }
}));