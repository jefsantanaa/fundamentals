let isActive = false;
console.log(isActive);

isActive = true;
console.log(isActive);

isActive = 1;
console.log(!!isActive);

console.log("The truthful");
console.log(!!3);
console.log(!!-1);
console.log(!!" ");
console.log(!!"text");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isActive = true));

console.log("The fake ones");
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isActive = false));

console.log(!!("" || null || 0 || " "));

let itemName = "";
console.log(itemName || "unknown" );