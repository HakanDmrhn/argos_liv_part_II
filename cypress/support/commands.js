import '@argos/cypress';

// Cypress.Commands.overwrite('visit', (orig, url, options) => {
//   options = options || {};
//   if (Cypress.env('AUTH_USER') && Cypress.env('AUTH_PASS')) {
//     options.auth = {
//       username: Cypress.env('AUTH_USER'),
//       password: Cypress.env('AUTH_PASS')
//     };
//   }
//   return orig(url, options)
// });

// Cypress.Commands.add('checkFreshChat', () => {
//   // cy.get('freshchat-widget').shadow().find('#fc-widget-chat-icon').should('be.visible').screenshot() --> OLD
//   // cy.get('#fc_widget').iframe().find('#chat-icon').should('be.visible') //--> new
//   // --> CHAT-ICON in Cypress nicht sichtbar
// })

// /**
//  * Returns an iframe content
//  */
// Cypress.Commands.add('iframe', { prevSubject: 'element' }, $iframe => {
//   return new Cypress.Promise(resolve => {
//       $iframe.ready(function () {
//           resolve($iframe.contents().find('body'));
//       });
//   });
// });