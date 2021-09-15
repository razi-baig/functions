/*Question # 1
The Fortune Teller
Why pay a fortune teller when you can just program your fortune yourself?
​
Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.
*/

function tellFortune(
  jobTitle = "",
  location = "",
  partnerName = "",
  noOfChilderns = ""
) {
  return `You will be ${jobTitle} in ${location}, and married to ${partnerName} with ${noOfChilderns} kids.`;
}

console.log(tellFortune("software Engineer", "England", "sammar", 5));

console.log(tellFortune("DevOps Engineer", "canada", "kammi", 2));

console.log(tellFortune("FrontEnd Lead", "Germany", "bandi", 3));
