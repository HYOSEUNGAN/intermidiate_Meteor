import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import { BlazeLayout } from "meteor/kadira:blaze-layout";

// import "../../client/main";
import "./MainLayout.html";
import "./HomeLayout.html";

FlowRouter.route("/", {
  name: "home",
  action() {
    console.log("action");
    BlazeLayout.render("HomeLayout");
  },
});

FlowRouter.route("/test", {
  name: "test",
  action() {
    BlazeLayout.render("MainLayout", { main: "Test" });
  },
});
