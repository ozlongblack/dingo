const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {
  app.get('/api/surveys/:surveyId/:choice', (req, res) => {
    res.send('Thank you for voting.');
  });

  // https://ozlongblack.localtunnel.me/api/surveys/webhooks
  // http://damp-harbor-16826.herokuapp.com/surveys/webhooks
  //  [ { ip: '202.159.155.78',
  //    sg_event_id: 'VjwzkOsIRoSZunDxliSCRQ',
  //    sg_message_id: 'mJNLOfNkRDifCX0HEKvddg.filter0010p3las1-9193-59DD98D1-1.0',
  //    useragent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36',
  //    event: 'click',
  //    url_offset: { index: 0, type: 'html' },
  //    email: 'ozlongblack@gmail.com',
  //    timestamp: 1507694826,
  //    url: 'http://localhost:3000/api/surveys/done' } ]

  app.post('/api/surveys/webhooks', (req, res) => {
    const p = new Path('/api/surveys/:surveyId/:choice');

    const events = _.chain(req.body)
      .map(({ email, url }) => {
        const match = p.test(new URL(url).pathname);
        if (match) {
          return {
            email,
            surveyId: match.surveyId,
            choice: match.choice
          };
        }
      })
      .compact()
      .uniqBy('email', 'surveyId')
      .each(({ surveyId, email, choice }) => {
        Survey.updateOne(
          {
            _id: surveyId,
            recipients: {
              $elemMatch: { email: email, responded: false }
            }
          },
          {
            $inc: { [choice]: 1 },
            $set: { 'recipients.$.responded': true },
            lastResponded: new Date()
          }
        ).exec();
      })
      .value();
  });

  app.get('/api/surveys', requireLogin, async (req, res) => {
    const surveys = await Survey.find({ _user: req.user.id });

    res.send(surveys);
  });

  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    if (req.user.credits) {
      const { title, subject, body, recipients } = req.body;

      const survey = new Survey({
        title,
        subject,
        body,
        recipients: recipients
          .split(',')
          .map(email => ({ email: email.trim() })),
        dateSent: Date.now(),
        _user: req.user.id
      });

      const mailer = new Mailer(survey, surveyTemplate(survey));

      try {
        await mailer.send();
        await survey.save();
        req.user.credits -= 1;
        const user = await req.user.save();

        res.send(user);
      } catch (err) {
        res.status(422).send(err);
      }
    }
  });
};
