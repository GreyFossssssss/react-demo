const path = require("path");

function getResolvePath() {
    const arrPath = Array.from(arguments);
    return path.resolve(__dirname, "../../", "src", ...arrPath);
}

function getDevMiddleware(compiler, devMiddleware) {
    return (context, next) => {
        const ready = new Promise((resolve, reject) => {
            for (const comp of[].concat(compiler.compilers || compiler)) {
                comp.hooks.failed.tap("dev-middleware", (err) => {
                    reject(err);
                });
            }
            devMiddleware.waitUntilValid(() => {
                resolve(true);
            });
        });
        const init = new Promise((resolve) => {
            devMiddleware(
                context.req, {
                    end: (content) => {
                        context.body = content;
                        resolve();
                    },
                    getHeader: context.get.bind(context),
                    setHeader: context.set.bind(context),
                    locals: context.state,
                },
                () => resolve(next())
            );
        });
        return Promise.all([ready, init]);
    };
}

function getHotMiddleware(compiler, hotMiddleware) {
    return (context, next) => {
        return new Promise((resolve) => {
            hotMiddleware(context.req, context.res, () => resolve(next()));
        });
    };
}

module.exports = {
    getResolvePath,
    getDevMiddleware,
    getHotMiddleware,
};