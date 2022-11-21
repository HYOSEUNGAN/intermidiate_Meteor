import { Template } from "meteor/templating";
import { ReactiveVar } from "meteor/reactive-var";
import { FlowRouter } from "meteor/ostrio:flow-router-extra";

import "./main.html";
import "../imports/layouts/routes";
import "../imports/layouts/HomeLayout.html";
import "../imports/layouts/MainLayout.html";

import "../imports/api/recipeCollections";

import { ui } from "../imports/ui";

// FlowRouter.route("/", {
//   name: "home",
//   action() {
//     console.log("action");
//     BlazeLayout.render("HomeLayout");
//   },
// });
