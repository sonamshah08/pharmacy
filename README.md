# pharmacy

Project Installation:
Run: 
•	npm install
Database:
•	SQLite in memory database
•	You can find database connection in database.ts file.
Explanation:
•	Database.ts file contains database connection which is used in server.ts file. 
•	Server.ts file is a main starting point.
•	Routes are defined in server.ts file.
•	As per my understanding the main objective of this task is to handle different payloads for different pharmacies. So based on this I have create pharmacy, product, and order table. 
•	Each of these three tables entities are created in Entity folder. 
•	I have used routes as per your given demo routes. I have taken examples of those provided routes and implemented same in the project.
•	The main logic of my project you can find into order mapper file which convert DTO and mapping for the respective payload that need to return as a result.
•	I have used DTO and mapping concept to handle each payload.
•	Scalability: If in future we need to create a new pharmacy then use create pharmacy api endpoint to newly create. Then, change in ordermapper.ts, orderservice.ts and create new DTO for this new pharmacy. As new DTO and mapper file help to map new key for new pharmacy.
Postman Collection Link: https://api.postman.com/collections/605639-eb5bde3e-b9ff-4a2b-8d11-21b08cee3f9c?access_key=PMAT-01HNX8724MNVVJC63XTF1ZEVC8
