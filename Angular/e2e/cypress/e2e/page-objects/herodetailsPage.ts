export class heroDetailsPage {

  // Selectors
   static heroTextBox =  ():string => {return "//app-hero-detail//h2"};
   static heroDetailsButton = (button: string):string => { return "//app-hero-detail//button[contains(text(),'"+button+"')]"};

   //Action methods
   static ValidateHeroName(name: string) {
      cy.xpath(this.heroTextBox()).should('have.text', name);
   }

   static ValidateButtons(button: string) {
    cy.xpath(this.heroDetailsButton(button)).should("be.visible");
   }

   static ValidateUrl(){
    cy.url().should('include', '/detail/')
   }

}
