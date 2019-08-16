define(function(require){

    let Vue = require("Vue")
    let VueRouter = require("VueRouter")
    let HomePage = require("HomePage")
    let ArticlePage = require("ArticlePage")

    // define your route pages here..
    const routes = [
        {
            path: "/",
            component: HomePage,
            name: "Home"
        },
        {
            path: "/article",
            component: ArticlePage,
            name: "Article"
        }
    ]

    let router = new VueRouter({
        // mode: "history",
        routes
    })

    // your middleware here..
    router.beforeEach((to, from, next) => {
        next()
    })

    return router
})
