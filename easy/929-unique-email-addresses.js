/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let uniqueEmails = [];

    for(let i = 0; i < emails.length; i++) {
        let local = emails[i].split('@')[0];
        let domain = emails[i].split('@')[1];

        while(local.includes('.')) {
            local = local.replace('.', '');
        }

        if(local.includes('+')) {
            local = local.split('+')[0];
        }

        let fullEmail = `${local}@${domain}`;

        if(!uniqueEmails.includes(fullEmail)) uniqueEmails.push(fullEmail);
    }

    return uniqueEmails.length;
};

// Constraints
// . can be omitted from the local name
// all after + can be omitted

console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"])); // 2
console.log(numUniqueEmails(["a@leetcode.com","b@leetcode.com","c@leetcode.com"])); // 3
