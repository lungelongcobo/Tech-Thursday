export class heroesPage {

  // Selectors
   static heroNavButton = (tab: string):string => { return "//nav//a[contains(text(),'"+tab+"')]"};
   static heroesList = (): string => { return "//app-heroes//ul[@class='heroes']"}

   //Action methods
   static ClickNavigationTab(tab: string){
    cy.xpath(this.heroNavButton(tab)).click();
   }

   static ValidateUrl(){
    cy.url().should('include', '/heroes');
   }

   static ValidateHeroesVisibility(count: number) {
    cy.xpath(this.heroesList()).find('a').should('have.length', count);
  }



}
