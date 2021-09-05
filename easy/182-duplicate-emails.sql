SELECT DISTINCT person1.Email 
FROM Person person1
JOIN (SELECT Email, COUNT(*) FROM Person GROUP BY Email HAVING COUNT(*) > 1 ) person2
WHERE person1.Email = person2.Email
