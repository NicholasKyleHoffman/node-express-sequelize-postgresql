# node-express-sequelize-postgresql
Src: https://bezkoder.com/node-express-sequelize-postgresql/

After cloning repo, run the following command (in project folder):

* node server.js

* open browser tab to localhost:8080


<b>Troubleshooting:</b>

* <i>If your project works on localhost:// + ${PORT}  (specifications in <b>server.js</b> file), see below comment & response from bezkoder at <a href="https://bezkoder.com/node-express-sequelize-postgresql/">the bottom of this page</a>:</i>

"pullakissa
April 8, 2020 at 8:40 am
Thank you so much for these tutorials, bezkoder! I am a newbie in fullstack, but I followed this guide for back-end and this (https://github.com/bezkoder/react-crud-web-api) for front-end. Everything is working great on localhost.

However, when I try to access the site from local area network or internet, the back-end connection does not seem to work due to CORS. My web browser console prints this error:

Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at http://localhost:8080/api/tutorials. (Reason: CORS request did not succeed).

I have looked through hours of different tutorials, but I still seem to get the same error. Could you please help me? 🙂"

<br>
<b>SOLUTION:</b>

"bezkoder
April 8, 2020 at 10:23 am
Hi, just comment (disable) this line:"

app.use(cors(corsOptions));
