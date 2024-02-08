import fastify from 'fastify';
import cookie from '@fastify/cookie';
import { createPoll } from '../http/routes/create-poll';
import { getPoll } from '../http/routes/get-poll';
import { votOnPoll } from '../http/routes/vot-on-polls';


const app = fastify();

app.register(cookie, {
    secret: "polls-app-nlw", // === Signature/security key ===
    hook: 'onRequest',
});

app.register(createPoll);
app.register(getPoll);
app.register(votOnPoll);


app.listen({port: 3333}).then(() => {
    console.log ('HTTP server running!');
});







