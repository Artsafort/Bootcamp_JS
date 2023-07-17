// client-list-business.js

import * as ClientElement from "./client-business";
import * as Clients from "./data-business";

function printClientsAccounts() {
  const clients = Clients.getClients();
  const ul = document.createElement("ul");
  for (let client of clients) {
    const element = ClientElement.getClientElement(client);
    ul.appendChild(element);
  }

  document.getElementById("root").appendChild(ul);
}

module.exports = { 
    printClientsAccounts: printClientsAccounts
 };