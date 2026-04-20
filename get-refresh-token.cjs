const http = require("http");
const url = require("url");
const querystring = require("querystring");
const crypto = require("crypto");

const client_id = "44d13daecce44843884d5dda4415b7e5";
const client_secret = "f6a2c1b1b72341e28e5abe8fdb8d2aa6";
const redirect_uri = "http://127.0.0.1:8888/callback";

const scope = "user-read-currently-playing user-read-playback-state";
const state = crypto.randomBytes(8).toString("hex");

const authorizeURL =
  "https://accounts.spotify.com/authorize?" +
  querystring.stringify({
    response_type: "code",
    client_id,
    scope,
    redirect_uri,
    state,
  });

console.log("\nOpen this URL in your browser:\n");
console.log(authorizeURL);
console.log("\nWaiting for callback on http://127.0.0.1:8888/callback ...\n");

http
  .createServer(async (req, res) => {
    const reqUrl = url.parse(req.url, true);

    if (reqUrl.pathname !== "/callback") {
      res.writeHead(404);
      res.end("Not found");
      return;
    }

    const code = reqUrl.query.code;
    const returnedState = reqUrl.query.state;

    if (!code || returnedState !== state) {
      res.writeHead(400);
      res.end("Missing code or invalid state");
      return;
    }

    const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

    const body = querystring.stringify({
      grant_type: "authorization_code",
      code,
      redirect_uri,
    });

    const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
    });

    const tokenData = await tokenRes.json();

    console.log("\nYour refresh token:\n");
    console.log(tokenData.refresh_token);
    console.log("\nSave it in Vercel as SPOTIFY_REFRESH_TOKEN\n");

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Done. Check your terminal for the refresh token.");
    process.exit(0);
  })
  .listen(8888);