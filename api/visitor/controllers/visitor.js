'use strict';
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async create(ctx) {
    let entity;
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.visitor.create(data, { files });
    } else {
      entity = await strapi.services.visitor.create(ctx.request.body);
    }

    entry = sanitizeEntity(entity, { model: strapi.models.visitor });

    const emailUser = ctx.request.body.email || '';
    // send an email by using the email plugin
    await strapi.plugins['email'].services.email.send({
      to: emailUser,
      from: 'admin@strapi.io',
      subject: 'Kirim email yes',
      text: `
        Berhasil kirim email yap...
      `,
    });


    return entry;
  },
};
