import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import { heroesPage } from "../page-objects/heroesPage";

// When
When(/^the user clicks on the "([^"]*)" button$/, (tab) => {
	heroesPage.ClickNavigationTab(tab);
});

// Then
Then(/^the heroes page is displayed$/, () => {
	heroesPage.ValidateUrl();
});

Then(/^the "([^"]*)" heroes should be displayed on the heroes page$/, (count) => {
	heroesPage.ValidateHeroesVisibility(count);
});


