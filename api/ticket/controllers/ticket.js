'use strict';
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');
const templateEmailTicket = require('../../../template/htmlTicket');
const shortid = require('shortid');

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async create(ctx) {
    let entity;
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.ticket.create(data, { files });
    } else {
      const genBookingCode =  shortid.generate();
      ctx.request.body.bookingCode = genBookingCode;
      entity = await strapi.services.ticket.create(ctx.request.body);
    }

    const entry = sanitizeEntity(entity, { model: strapi.models.ticket });
    const { bookingCode = '', email = '', area = {}, name = '' } = entry;
    const url = `https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=${bookingCode}`;
    // send an email by using the email plugin
    await strapi.plugins['email'].services.email.send({
      to: email,
      subject: `PEMBELIAN TIKET ${area.name || ''} TELAH BERHASIL`,
      html: templateEmailTicket({ name, productName: area.name || '', email, url, code: bookingCode })
    });


    return entry;
  },
};
