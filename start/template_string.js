const clientName = "Jefferson";
const concatenation = "Dear " + clientName + ", I would like to know.. ";
const template = `
  Dear ${clientName},
  I would like to know..`
console.log(concatenation, template);

// expressions
console.log(`1 + 1 = ${1 + 1}`);

const up = text => text.toUpperCase();
console.log(`Hey... ${up('be careful')}!`);
