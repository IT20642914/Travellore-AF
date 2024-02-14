AWS Lambda S3 File Upload Trigger and Data Transfer to RDS Setup Guide
This application is designed to trigger an AWS Lambda function upon file upload to an S3 bucket. The Lambda function reads data from the uploaded files and stores it in temporary tables within an RDS database. Subsequently, the Lambda function executes data transfer procedures to move the data from temporary tables to actual tables in the RDS database.

Setup Instructions
1. Create an RDS Database
Create an AWS RDS database named "daiadvisor" with the following configurations:

DB Name: daiadvisor
Host: daiadvisor.c6d6fdrwzkfo.ap-southeast-1.rds.amazonaws.com
Port: 3306
Username: admin
Password: daiadmin1234
Database Engine: MySQL (InnoDB)
2. Configure Lambda Function
Replace the existing Lambda function code configurations to connect to the created database. Modify the connection parameters in the Lambda function code to match the RDS database configurations.

python
Copy code
# Lambda function code
# Replace the existing database connection configurations with the following:

import pymysql

def lambda_handler(event, context):
    # Database connection parameters
    host = "daiadvisor.c6d6fdrwzkfo.ap-southeast-1.rds.amazonaws.com"
    port = 3306
    user = "admin"
    password = "daiadmin1234"
    database = "daiadvisor"
    
    # Connect to the database
    connection = pymysql.connect(host=host, port=port, user=user, password=password, database=database)
    # Continue with data processing and transfer logic...
3. Create Database Tables
You can use MySQL Workbench or any MySQL client to create the necessary tables in the "daiadvisor" database. Execute the provided SQL commands in the MySQL client to create the tables.

sql
Copy code
-- Provided SQL commands to create tables as specified
These tables will serve as temporary storage for the uploaded data before it's transferred to the actual tables.

4. Deploy Lambda Function and Set S3 Trigger
Deploy the modified Lambda function to your AWS environment. Configure the S3 bucket to trigger the Lambda function upon file upload.

5. Test
Upload files to the configured S3 bucket and verify that the data gets transferred to the RDS database tables successfully.
