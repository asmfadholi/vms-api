'use strict';
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');
const templateEmailView = require('../../../template/htmlVisitor');
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
      const { bookingCode = '' } = ctx.request.body
      const { id = 0 } = await strapi.services.ticket.findOne({ slug: bookingCode })

      ctx.request.body.ticket = { id }
      entity = await strapi.services.visitor.create(ctx.request.body);
    }

    const entry = sanitizeEntity(entity, { model: strapi.models.visitor });

    const { name = '', area = {}, email = '' } = entry;

    const emailUser = ctx.request.body.email || '';
    // send an email by using the email plugin
    await strapi.plugins['email'].services.email.send({
      to: emailUser,
      from: 'mochammad.fadholi.st@gmail.com',
      subject: `SELAMAT kamu berhasil terdaftar di area ${area.name || 'ini'}`,
      html: templateEmailView({ name, productName: area.name || '', email })
    });


    return entry;
  },
};
