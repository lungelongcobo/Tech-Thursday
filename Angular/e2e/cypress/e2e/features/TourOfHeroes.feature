Feature: Tour of Heroes Functionality

    This Feature is a functionality of tour of heroes application

    Background:
        Given the user is on the landing page
        And the search bar is displayed

    Scenario: As a TOH user, I want to navigate to dashboard in order to see top 4 Heroes displayed
        Then the "4" heroes should be displayed

    Scenario: As a TOH user, I want to select a hero from the dashboard in order to see the hero details displayed
        When the user clicks on the hero "Bombasto"
        Then the hero details page should be displayed
        And the hero heading "BOMBASTO Details" should be displayed
        And the "go back" button is displayed
        And the "save" button is displayed

    Scenario: As a TOH user, I want to navigate to heroes page in order to see 9 heroes
        When the user clicks on the "Heroes" button
        Then the heroes page is displayed
        And the "9" heroes should be displayed on the heroes page
