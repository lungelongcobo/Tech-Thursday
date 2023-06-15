import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import { heroDetailsPage } from "../page-objects/herodetailsPage";
// Given's
// When's

// Then's
Then(/^the hero heading "([^"]*)" should be displayed$/, (name: string) => {
	heroDetailsPage.ValidateHeroName(name);
});

Then(/^the "([^"]*)" button is displayed$/, (button: string) => {
	heroDetailsPage.ValidateButtons(button);
});

Then(/^the hero details page should be displayed$/, () => {
	heroDetailsPage.ValidateUrl();
});


