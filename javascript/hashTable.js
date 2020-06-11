"use strict";

const menu = {};

menu.coca_cola = 0.89;
menu.pepsi = 0.79;
menu.virgin_cola = 0.69;

console.log(menu);
console.log(menu.pepsi);

guestList = {};

const checkName = (name) => {
  if (guestList[name]) {
    console.log(`${name} has been used to enter already - NO ENTRY!`);
  } else {
    guestList[name] = true;
    console.log(`Come right in ${name}!`);
  }
};

checkName("david");
checkName("lola");
checkName("david");
