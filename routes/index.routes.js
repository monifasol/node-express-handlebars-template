
import router from "express"
const indexRouter = router.Router();

// homepage
indexRouter.route("/").get( (req, res) => {
    res.render("homepage")
});

// error route
indexRouter.route("*").get( (req, res) => {
    res.render("notfound")
});

export { indexRouter };
