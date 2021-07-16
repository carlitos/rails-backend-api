# 3Pillar Global - Evaluation

# README

----

## Requirements

- Ruby on Rails
- Backend development
- Databases (SQL Server, MongoDB, Oracle, etc.)
- Docker
- Javascript and related frontend frameworks (React, Angular, etc)

----

## Coding Exercise

**Factura.me SA de CV**, your brand new employer, needs a demo for an expense reporting tool. Electronic receipt records and related information are stored in a PostgreSQL database. Management has decided that React (or Angular) must be used in the frontend and that the backend will be accessible via Ruby on Rails.

The fields in the report:
- [x] Issuer name
- [x] Date issued
- [x] Issuer RFC
- [x] Cfdi xml
- [x] Total amount
- [x] Employee name (the one reporting the expenses)
- [x] The demo will print the report using generated test data, paginated as necessary, ordered by the date issued.




## Project setup

Follow the next steps mentioned bellow to setup the test project with Docker

1. Clone the project 

```bash
git clone https://github.com/carlitos/3pillar-global
```

2. Rename the .env.example

``` mv .env.exampl .env ```

3. Build the image for the Ruby on Rails backend

```
docker-compose build
```

4. Boot up the app by running:
```
docker-compose up
```

5. Setup the database 
```
docker-compose exec web rake db:create

```

6. Run the migration of the tables

```
docker-compose exec web rake db:migrate
```

7. Seed the db with example users 
```
docker-compose exec web rake db:seed
```

8. Now you can get access to the API in the default RoR port 3000
```http://localhost:3000 ```


### Endpoints of the app

#### Get the all the users

``` GET ```
Returns a json list with all the users of the app 

```http://localhost:3000/users ```

#### Get the list of expenses order by issued date

``` GET ```
```http://localhost:3000/expenses ```
Return the list of the expenses


#### Create a new expense

``` POST ```
```http://localhost:3000/expenses ```
```json
{
    "expense": {
        "issuer_name": "Carlos Moises",
        "date_issued": "2021/07/12",
        "issuer_rfc": "CACJ850728PXA",
        "cfdi_xml": "",
        "total_amount": 1500.50,
        "user_id": 1
    }
    
}
```

## Front-end 

The front-end app its a project build in Angular version 12.

The project is in the folder ``` facturame-client ```

For the setup of the angular you need to run the following steps:

1. Inside of the folder:

``` yarn install ``` or ``` npm install ``` 

2. Run ```ng serve``` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.


