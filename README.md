# REST API developer challenge (Node.js)

# Set up
We have included a CSV export of mock data for the domain models. You should build your API to expose this data. A markdown file describing these models is located in the data folder.

You do not need to include any CSV parsing in your solution.

# Challenge

The challenge is to create a REST api that meets the acceptance criteria of the user stories below.

The solution must also:

- Use best REST practices
- Be built using Node.js
- Connect to a SQL database to retrieve and save data
- Be tested to ensure the acceptance criterias are met
- Have a set up script which instantiates test data into your chosen database, so that your solution is easily run on another computer

Give yourself about 4-6 hours to complete the challenge in any order of your choosing, don't worry if you can't get everything done as we'll cover that in your follow-up interview.

# User stories

## User story 1
I would like endpoints for Users, Suppliers and Reposits which allow me to access all objects of those types.

### Acceptance critera
- Records are accesible by using a given url endpoint
- Objects are returned as an array of JSON objects
- Reposit endpoint response contains associated user (tenant) identifiers
---------------------------------------------------------------

## User story 2
I would like endpoints for Users, Suppliers and Reposits which allow me to access the individual records with their id.

### Acceptance critera
- Records are accesible by using a given url and the id of the record.
- Nested objects are expanded
- Reposit endpoint response contains associated user (tenant) objects
---------------------------------------------------------------

## User story 3
I would like to be able to search for users by name.

### Acceptance critera
- Records are accesible by using a given url and the search string
- Results are returned as an array of JSON objects
- Search results include full and partial matches
---------------------------------------------------------------

## User story 4
I would like to be able to update the start and end date of a Reposit

### Acceptance critera
- Can be updated by sending JSON data to a given URL and ID 
- Returns the updated JSON object
- Returns an appropriate error code and message if the end date is before the start date
---------------------------------------------------------------

## User story 5
I would like to be able to create a Reposit with the following information:
- Supplier Id
- Address Id
- Price per month (ppm)
- Headcount
- Start date
- End date
- List of existing tenant email addresses

### Acceptance critera
- Can be updated by sending JSON data to a given URL and ID 
- Returns the updated JSON object with nested objects expanded
- Incomplete or bad requests return the appropriate error code and message