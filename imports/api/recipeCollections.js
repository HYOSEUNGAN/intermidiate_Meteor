import { Mongo } from "meteor/mongo";

export const Recipes = new Mongo.Collection("recipes");

import SimpleSchema from "simpl-schema";

const RecipeSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name",
  },
  desc: {
    type: String,
    label: "Description",
  },
  author: {
    type: String,
    label: "Author",
    autoValue: function () {
      return this.userId;
    },
  },
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function () {
      return new Date();
    },
  },
});

Recipes.attachSchema(RecipeSchema);
//  스키마 생성완료
