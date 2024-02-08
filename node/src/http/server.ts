import fastify from 'fastify';
import cookie from '@fastify/cookie';
import { createPoll } from '../http/routes/create-poll';
import { getPoll } from '../http/routes/get-poll';
import { fastifyWebsocket } from '@fastify/websocket';
import { pollResults } from './ws/poll-results';
import { voteOnPoll } from './routes/vot-on-polls';


const app = fastify();

app.register(cookie, {
    secret: "polls-app-nlw", // === Signature/security key ===
    hook: 'onRequest',
});

app.register(fastifyWebsocket)

app.register(createPoll);
app.register(getPoll);
app.register(voteOnPoll);
app.register(pollResults);


app.listen({port: 3333}).then(() => {
    console.log ('HTTP server running!');
});







