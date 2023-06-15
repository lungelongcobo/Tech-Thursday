export class landingPage {

  // Selectors
  static searchBox = ():string => {return "//input[@id='search-box']"};
  static topHeroes = ():string => {return "//div[@class='heroes-menu']"};
  static hero = (name: string):string => {return "//div[@class='heroes-menu']//a[contains(text(),'"+name+"')]"};

   //Action methods
   static ValidateSearchBoxVisibility(){
    cy.xpath(this.searchBox())
    .should("be.visible");
   }

    static ValidateHeroesVisibility(count: number) {
      cy.xpath(this.topHeroes()).find('a').should('have.length', count);
    }

    static ClickHeroName(name: string) {
      cy.xpath(this.hero(name)).click();
    }

}
