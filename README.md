**Project Installation of Pharmacy Management:**
**Git Repo link: **
•	https://github.com/sonamshah08/pharmacy.git

**Run below command:** 
•	git clone https://github.com/sonamshah08/pharmacy.git
•	git checkout master
•	npm install
•	npm run dev
**Database:**
•	SQLite in memory database
•	You can find database connection in database.ts file.
**Explanation:**
•	Database.ts file contains database connection which is used in server.ts file. 
•	Server.ts file is a main starting point.
•	Routes are defined in server.ts file.
•	As per my understanding the main objective of this task is to handle different payloads for different pharmacies. So based on this I have create pharmacy, product, and order table. 
•	Each of these three tables entities are created in Entity folder. 
•	I have used routes as per your given demo routes. I have taken examples of those provided routes and implemented same in the project.
•	The main logic of my project you can find into order mapper file which convert DTO and mapping for the respective payload that need to return as a result.
•	I have used DTO and mapping concept to handle each payload.
•	Scalability: If in future we need to create a new pharmacy then use create pharmacy api endpoint to newly create. Then, change in ordermapper.ts, orderservice.ts and create new DTO for this new pharmacy. As new DTO and mapper file help to map new key for new pharmacy.

**Postman Collection Link:** https://api.postman.com/collections/605639-eb5bde3e-b9ff-4a2b-8d11-21b08cee3f9c?access_key=PMAT-01HNX8724MNVVJC63XTF1ZEVC8


**1)	Create Pharmacy**
End point	/api/pharmacy
Method	Post

Input	{
    "integrationName":"healthmart",
    "name":"HealthMart Pharmacy",
    "address":"123 Main St",
    "city":"Cityville",
    "state":"Stateville",
    "zipcode":"12345",
    "country":"Countryland",
    "fax":"123-456-7890",
    "phone":"987-654-3210"
}


Output	{
    "success": true,
    "message": "Pharmacy created successfully",
    "payload": {
        "integrationName": "healthmart",
        "name": "HealthMart Pharmacy",
        "address": "123 Main St",
        "city": "Cityville",
        "state": "Stateville",
        "zipcode": "12345",
        "country": "Countryland",
        "fax": "123-456-7890",
        "phone": "987-654-3210",
        "id": 1
    }
}
**2)	Get Pharmacy**
End point	/api/pharmacies
Method	GE0054
Input	
Output	{
    "pharmacies": [
        {
            "id": 1,
            "integrationName": "healthmart",
            "name": "HealthMart Pharmacy",
            "address": "123 Main St",
            "city": "Cityville",
            "state": "Stateville",
            "zipcode": "12345",
            "country": "Countryland",
            "fax": "123-456-7890",
            "phone": "987-654-3210"
        }
    ]
}
**3)	Create Product**
End point	/api/product
Method	Post
Input	{
    "integrationName":"Painkiller",
    "name":"Painkiller",
    "pharmacyId":"1"
}

Output	{
    "success": true,
    "message": "Product created successfully",
    "payload": {
        "integrationName": "Painkiller",
        "name": "Painkiller",
        "pharmacyId": "1",
        "id": 3
    }
}

**4)	Create Health mart Order**
Endpoint	/api/healthmart/order
Method	POST
Output	{
"healthMartProduct": "Painkiller2",
"healthMartQuantity": 3,
"healthMartCustomerInfo": {
"healthMartCustName": "John Doe",
"healthMartCustAddress": "123 Main Street",
"healthMartCustCity": "Cityville",
"healthMartCustState": "State",
"healthMartCustZipcode": "12345",
"healthMartCustCountry": "Country"
}
}


	{
    "success": true,
    "message": "Order created successfully",
    "payload": {
        "id": 2,
        "healthMartProduct": "Painkiller2",
        "healthMartQuantity": 3,
        "customerInfo": {
            "healthMartCustName": "John Doe",
            "healthMartCustAddress": "123 Main Street",
            "healthMartCustCity": "Cityville",
            "healthMartCustState": "State",
            "healthMartCustZipcode": "12345",
            "healthMartCustCountry": "Country"
        }
    }
}

**5)	Get Health Mart orders**
End point	api/healthmart/orders
Method	GET
Input	
Output	 "ordersDTO": [
        {
            "id": 1,
            "healthMartProduct": "Painkiller",
            "healthMartQuantity": 3,
            "customerInfo": {
                "healthMartCustName": "John Doe",
                "healthMartCustAddress": "123 Main Street",
                "healthMartCustCity": "Cityville",
                "healthMartCustState": "State",
                "healthMartCustZipcode": "12345",
                "healthMartCustCountry": "Country"
            }
        },





