SELECT person.Firstname, person.LastName, address.City, address.State
FROM Person person
LEFT OUTER JOIN Address address ON person.PersonId = address.PersonId
