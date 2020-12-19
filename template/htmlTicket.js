const templateEmailView = ({ name = '', email = '', productName = '', url = '', code = '' }) => `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="x-apple-disable-message-reformatting">
    <meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no">
    <meta name="color-scheme" content="light">
    <meta name="supported-color-schemes" content="light">
    <title></title>

    <!-- What it does: Makes background images in 72ppi Outlook render at correct size. -->
    <!--[if gte mso 9]>
    <xml>
        <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->

    <!-- CSS Reset : BEGIN -->
    <style>

        /* What it does: Tells the email client that only light styles are provided but the client can transform them to dark. A duplicate of meta color-scheme meta tag above. */
        :root {
          color-scheme: light;
          supported-color-schemes: light;
        }

        /* What it does: Remove spaces around the email design added by some email clients. */
        /* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */
        html,
        body {
            margin: 0 auto !important;
            padding: 0 !important;
            height: 100% !important;
            width: 100% !important;
        }

        /* What it does: Stops email clients resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
        }

        /* What it does: Centers email on Android 4.4 */
        div[style*="margin: 16px 0"] {
            margin: 0 !important;
        }
        /* What it does: forces Samsung Android mail clients to use the entire viewport */
        #MessageViewBody, #MessageWebViewDiv{
            width: 100% !important;
        }

        /* What it does: Stops Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt !important;
            mso-table-rspace: 0pt !important;
        }

        /* What it does: Fixes webkit padding issue. */
        table {
            border-spacing: 0 !important;
            border-collapse: collapse !important;
            table-layout: fixed !important;
            margin: 0 auto !important;
        }

        /* What it does: Uses a better rendering method when resizing images in IE. */
        img {
            -ms-interpolation-mode:bicubic;
        }

        /* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */
        a {
            text-decoration: none;
        }

        /* What it does: A work-around for email clients meddling in triggered links. */
        a[x-apple-data-detectors],  /* iOS */
        .unstyle-auto-detected-links a,
        .aBn {
            border-bottom: 0 !important;
            cursor: default !important;
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        /* What it does: Prevents Gmail from changing the text color in conversation threads. */
        .im {
            color: inherit !important;
        }

        /* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */
        .a6S {
            display: none !important;
            opacity: 0.01 !important;
        }
        /* If the above doesn't work, add a .g-img class to any image in question. */
        img.g-img + div {
            display: none !important;
        }

        /* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
        /* Create one of these media queries for each additional viewport size you'd like to fix */

        /* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
        @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
            u ~ div .email-container {
                min-width: 320px !important;
            }
        }
        /* iPhone 6, 6S, 7, 8, and X */
        @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
            u ~ div .email-container {
                min-width: 375px !important;
            }
        }
        /* iPhone 6+, 7+, and 8+ */
        @media only screen and (min-device-width: 414px) {
            u ~ div .email-container {
                min-width: 414px !important;
            }
        }

    </style>
    <!-- CSS Reset : END -->

    <!-- Progressive Enhancements : BEGIN -->
    <style>
      /* Media Queries */
      @media screen and (max-width: 480px) {

          /* What it does: Forces table cells into full-width rows. */
          .stack-column,
          .stack-column-center {
              display: block !important;
              width: 100% !important;
              max-width: 100% !important;
              direction: ltr !important;
          }
            .stack-column-half {
                display: inline-block !important;
              width: 50% !important;
              max-width: 50% !important;
              direction: ltr !important;
            }
          /* And center justify these ones. */
          .stack-column-center {
              text-align: center !important;
          }

          /* What it does: Generic utility class for centering. Useful for images, buttons, and nested tables. */
          .center-on-narrow {
              text-align: center !important;
              display: block !important;
              margin-left: auto !important;
              margin-right: auto !important;
              float: none !important;
          }
            img.full-on-narrow {
                width: 100% !important;
                max-width: 100% !important;
            }
          table.center-on-narrow {
              display: inline-block !important;
          }
      }
    </style>
    <!-- Progressive Enhancements : END -->
</head>
<body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #F8F8F8;">
  <center role="article" aria-roledescription="email" lang="en" style="width: 100%; background-color: #F8F8F8;">
    <!--[if mso | IE]>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #F8F8F8;">
    <tr>
    <td>
    <![endif]-->

        <!-- Visually Hidden Preheader Text : BEGIN -->
        <div style="max-height:0; overflow:hidden; mso-hide:all;" aria-hidden="true">
            (Optional) This text will appear in the inbox preview, but not the email body.
        </div>
        <!-- Visually Hidden Preheader Text : END -->

        <!-- Create white space after the desired preview text so email clients don’t pull other distracting text into the inbox preview. Extend as necessary. -->
        <!-- Preview Text Spacing Hack : BEGIN -->
        <div style="display: none; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
          &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
        </div>
        <!-- Preview Text Spacing Hack : END -->

        <!--
            Set the email width. Defined in two places:
            1. max-width for all clients except Desktop Windows Outlook, allowing the email to squish on narrow but never go wider than 680px.
            2. MSO tags for Desktop Windows Outlook enforce a 680px width.
            Note: The Fluid and Responsive templates have a different width (600px). The hybrid grid is more "fragile", and I've found that 680px is a good width. Change with caution.
        -->
        <div style="max-width: 600px; margin: 0 auto;" class="email-container">
            <!--[if mso]>
            <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="600">
            <tr>
            <td>
            <![endif]-->

<!-- Email Body : BEGIN -->
<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
      <!-- Header: BEGIN -->
      <tr>
          <td align="left" style="padding: 24px 20px; background-color: #ffffff; text-align: left;">
              <div align="center" style="padding: 11px; height: 32px; width: 32px; background-color: #F3F4F5; font-family: Helvetica, Arial, Helvetica, sans-serif; font-size: 20px; line-height: 26px; color: #FA591D; font-weight: bold; border-radius: 8px; letter-spacing: 1px;">
              </div>
          </td>
      </tr>
      <!-- Header: END -->

      <!-- CUSTOM TEMPLATE HERE!! -->


    <!-- Greetings: BEGIN -->
    <tr>
      <td style="padding: 24px 20px; background-color: #ffffff;">
        <p style="margin: 0 0 5px; font-family: Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px; color: #393d42;">
          Halo <b>${name || email}</b>,
        </p>
        <br/>
        <p style="margin: 0 0 16px; font-family: Helvetica, Arial, sans-serif; font-size: 14px; line-height: 21px; color: #393d42;">
          Selamat! Kamu berhasil mendaftar untuk masuk ke area <b>${productName}</b>.
        </p>
      </td>
    </tr>
    <!-- Greetings: END -->

   <tr>
      <td>
          <a style="width: 285px; height: auto; text-align:center; display: block; margin: 15px auto 30px; overflow: visible; border-radius: 8px; background: #ffffff;">

              <img style="width: 100%; height: 100%; border-radius: 8px;" src="${url}" alt="QR code">

          </a>
      </td>
  </tr>
  <tr>
      <td>
          <h3 style="text-align: center; font-family: 'Open Sans', sans-serif;">Your Code: ${code} </h3>
      </td>
  </tr>
<!-- Promotional Code: BEGIN -->
<!-- Promotional Code: END -->
</table>
<!-- Email Body : END -->




    <!-- Email Footer 1: BEGIN -->
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
      <tr>
          <td style="padding: 0px 20px 0; background: #ffffff;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="border-top: 1px solid #E5E7E9;">
                  <tr>
                      <td style="padding: 24px 0; font-family: sans-serif; font-size: 12px; line-height: 18px; color: #bdbec0; text-align: center;">
                          <p style="margin: 0;">2020, VMS</p>
                      </td>
                  </tr>
              </table>
          </td>
      </tr>
    </table>
    <!-- Email Footer 1: END -->
          <!--[if mso]>
          </td>
          </tr>
          </table>
          <![endif]-->
      </div>
  <!--[if mso | IE]>
  </td>
  </tr>
  </table>
  <![endif]-->
  </center>
</body>
</html>`;

module.exports = templateEmailView;
