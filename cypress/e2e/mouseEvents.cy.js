
 it('Scenario 1', function (){

cy.visit("https://courses.letskodeit.com/practice");
 
 // show hidden element with invoke
 cy.get('div.mouse-hover-content').invoke('show');
 //click hidden element

//  cy.contains('Reload').click({force:true})
//  cy.contains('Reload').scrollIntoView();
 
 }); 