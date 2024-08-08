const { nanoid } = require('nanoid');
const links = new Map();

exports.handler = async (event, context) => {
  if (event.httpMethod === 'POST') {
    const { longUrl } = JSON.parse(event.body);
    const slug = nanoid(5);
    links.set(slug, longUrl);
    return {
      statusCode: 200,
      body: JSON.stringify({ shortUrl: `https://xn--5-l5r.to/${slug}` }),
    };
  } else {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }
};
