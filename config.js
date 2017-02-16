module.exports = {
  // your community or team name to display on join page.
  community: process.env.COMMUNITY_NAME || 'Johnny.Moe',
  // your slack team url (ex: socketio.slack.com)
  slackUrl: process.env.SLACK_URL || 'johnnymoe.slack.com',
  // access token of slack
  // You can generate it in https://api.slack.com/web#auth
  // You should generate the token in admin user, not owner.
  // If you generate the token in owner user, missing_scope error will be occurred.
  //
  // You can test your token via curl:
  //   curl -X POST 'https://YOUR-SLACK-TEAM.slack.com/api/users.admin.invite' \
  //   --data 'email=EMAIL&token=TOKEN&set_active=true' \
  //   --compressed
  slacktoken: process.env.SLACK_TOKEN || 'xoxp-82662715207-82662715319-142201986771-a73e4a120f96e60ad5a791a6e0bb4892',
  // an optional security measure - if it is set, then that token will be required to get invited.
  inviteToken: process.env.INVITE_TOKEN || null,

  locale: process.env.LOCALE || "en",
};
