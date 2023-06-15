import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import { landingPage } from "../page-objects/landingPage";

// Given's
Given(/^the user is on the landing page$/, () => {
	cy.visit("http://localhost:4200/dashboard");
});


// Then's
Then(/^the "([^"]*)?" heroes should be displayed$/, (count: number) => {
	landingPage.ValidateHeroesVisibility(count);
});

// When's
When(/^the user clicks on the hero "([^"]*)"$/, (hero: string) => {
	landingPage.ClickHeroName(hero);
});

// And's
And(/^the search bar is displayed$/, () => {
	landingPage.ValidateSearchBoxVisibility();
});



