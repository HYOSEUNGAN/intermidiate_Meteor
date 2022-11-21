import { Meteor } from "meteor/meteor";
import { Recipes } from "/imports/api/recipeCollections";

// import "/imports/api/recipeCollections";

Meteor.startup(() => {
  console.log("서버가 정상적으로 작동됩니다!");
});

console.log(Recipes);
