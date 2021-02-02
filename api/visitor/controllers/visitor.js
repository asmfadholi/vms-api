'use strict';
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');
const templateEmailView = require('../../../template/htmlVisitor');
const moment = require('moment');
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

      // check is available bookingCode
      const { id: idTicket = 0 } = await strapi.services.ticket.findOne({ bookingCode: bookingCode }) || {}
      if (idTicket === 0) return ctx.send({ message: 'Booking code doesn\'t exist' }, 409);

      // check is already register
      const { id: idVisitor = 0 } = await strapi.services.visitor.findOne({ bookingCode: bookingCode }) || {}
      if (idVisitor !== 0) return ctx.send({ message: 'User already registered' }, 409);

      // checkin on
      ctx.request.body.isCheckin = true
      const datetime = new Date();
      ctx.request.body.createdAtByBe = moment(datetime).format('YYYY-MM-DD HH:mm:ss');
      entity = await strapi.services.visitor.create(ctx.request.body);
    }

    const entry = sanitizeEntity(entity, { model: strapi.models.visitor });

    const { name = '', area = {}, email = '' } = entry;

    const emailUser = ctx.request.body.email || '';
    // send an email by using the email plugin
    await strapi.plugins['email'].services.email.send({
      to: emailUser,
      from: 'no-reply@outing.id',
      subject: `SELAMAT kamu berhasil terdaftar di area ${area.name || 'ini'}`,
      html: templateEmailView({ name, productName: area.name || '', email })
    });


    return entry;
  },
};
