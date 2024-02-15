# S3 File to Lambda to Temporary SQL Tables to Actual Tables

This project automates the process of updating files to an S3 bucket, triggering a Lambda function. This Lambda function reads the uploaded file and saves the data into temporary SQL tables. Then, it executes stored procedures to move the data from the temporary tables to actual tables.

## Lambda Function
For detailed information about the Lambda function used in this project, refer to the [README](https://github.com/DAI-Advisors/dai-advisors-lambda-function-script) in the following repository: [DAI Advisors Lambda Function Script](https://github.com/DAI-Advisors/dai-advisors-lambda-function-script)

## Database Setup

To set up the necessary database in AWS RDS, follow  these steps:

1. Use a tool like Workbench or any other SQL client.
2. create  new schema called 'DaiAdvisor'
3. Execute the SQL queries provided  in AllCreatetables.sql  to create the required  tables.

## Testing
To test  follow  these steps  (make sure that Db tables created and lamda funtion configured with updated  db values ):

1.  create the PROCEDURE can use samplePROCEDURE.sql file (once  created no need do it again)
2.  upload a  test files  v1 documents to s3  and check whether   tables are updating  check config table to see  currunt version of document.
3.  upload a  test files  v2 documents to s3  and check whether   tables are updating and check config table to see  currunt version of document.

