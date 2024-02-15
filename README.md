# S3 File to Lambda to Temporary SQL Tables to Actual Tables

This project automates the process of updating files to an S3 bucket, triggering a Lambda function. The Lambda function reads the uploaded file and saves the data into temporary SQL tables. Then, it executes stored procedures to move the data from the temporary tables to actual tables.

## Lambda Function

For detailed information about the Lambda function used in this project, please refer to the [README](https://github.com/DAI-Advisors/dai-advisors-lambda-function-script) in the following repository: [DAI Advisors Lambda Function Script](https://github.com/DAI-Advisors/dai-advisors-lambda-function-script)

## Database Setup

To set up the necessary database in AWS RDS, follow these steps:

### 1. Create an RDS Instance
   - Log in to the AWS Management Console.
   - Navigate to the RDS service.
   - Click on "Create database".
   - Choose the database engine you prefer (e.g., MySQL, PostgreSQL).
   - Configure the settings such as DB instance class, storage, username, and password.
   - Optionally, configure additional settings like VPC, subnet group, security group, etc.
   - Review and launch the RDS instance.

### 2. Connect to the RDS Instance
   - Once the instance is created, note down the endpoint and port details.
   - Use a SQL client tool such as MySQL Workbench, DBeaver, or any other SQL client.
   - Set up the connection using the endpoint, port, username, and password provided during instance creation.

### 3. Create a New Schema
   - In your SQL client, connect to the RDS instance.
   - Create a new schema called **DaiAdvisor**:
     ```sql
     CREATE SCHEMA DaiAdvisor;
     ```

### 4. Execute SQL Queries to Create Tables
   - With the connection established and the **DaiAdvisor** schema selected, execute the SQL queries provided in `AllCreatetables.sql` file to create the necessary tables.

### 5. Create Stored Procedure
   - Execute the SQL queries from the `samplePROCEDURE.sql` file to create the necessary stored procedure(s).

## Testing

To test, follow these steps (make sure that database tables are created and Lambda function is configured with updated database values):

1. Upload a test file (v1) document to S3 and check whether the tables are updating. Also, check the config table to see the current version of the document.
2. Upload a test file (v2) document to S3 and check whether the tables are updating. Again, check the config table to see the current version of the document.
