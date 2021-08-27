const koaRouter = require("koa-router");
const db = require("./db.json");

const router = new koaRouter({
  prefix: "/report",
});

router.get("/", (ctx, next) => {
  const userReports = db.map((patientReports) => {
    return {
      name: patientReports.name,
      email: patientReports.email,
      gender: patientReports.gender,
      registered: patientReports.registered,
      reports: patientReports.reports,
    };
  });
  ctx.status = 200;
  ctx.body = userReports;
});

module.exports = router;
