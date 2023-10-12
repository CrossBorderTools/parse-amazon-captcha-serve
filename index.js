const Koa = require("koa");
const app = new Koa();
const router = require('koa-router')()
const body = require("koa-better-body");
const convert = require("koa-convert");
const { recognition } = require("./call");
app.use(
    convert(
        body({
            keepExtensions: true,
            formLimit: "5mb",
            jsonLimit: "5mb",
        })
    )
);
// python3.7 index.py  -P https://images-na.ssl-images-amazon.com/captcha/bfhuzdtn/Captcha_vhkppjaupq.jpg


router.post("/", async (ctx) => {
    console.log(ctx.request.fields);
    const code = await recognition(ctx.request.fields.pic)
    ctx.body = {
        code
    }
});


app.use(router.routes())
app.listen(3000, () => {
    console.log('server is running at 3000')
});
