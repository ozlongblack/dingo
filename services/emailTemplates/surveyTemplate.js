const keys = require('../../config/keys');

module.exports = survey => {
  return `
  <body style="margin: 0; padding: 0;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td>
          <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse;">
            <tr>
              <td>
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
                  <tr>
                    <td align="center" bgcolor="#70bbd9" style="padding: 40px 0 30px 0;">
                      Row 1
                    </td>
                  </tr>
                  <tr>
                    <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
                      <table border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                          <td style="color: #153643; font-family: Arial, sans-serif; font-size: 24px;">
                            <b>Please answer the following question: </b>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 20px 0 30px 0;color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
                            ${survey.body}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                              <tr>
                                <td width="260" valign="top" style="color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
                                  <a href="${keys.redirectDomain}/api/surveys/done">YES</a>
                                </td>
                                <td style="font-size: 0; line-height: 0;" width="20">
                                  &nbsp;
                                </td>
                                <td width="260" valign="top" style="color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
                                  <a href="${keys.redirectDomain}/api/surveys/done">NO</a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td bgcolor="#ee4c50" style="padding: 30px 30px 30px 30px;color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
                      <table border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                          <td width="75%">
                            &reg; Someone, somewhere 2017<br/>
                            Unsubscribe to this newsletter instantly
                          </td>
                          <td>
                            &nbsp;
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  `;
};
