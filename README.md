# S3 File to Lambda to Temporary SQL Tables to Actual Tables

This project automates the process of updating files to an S3 bucket, triggering a Lambda function. This Lambda function reads the uploaded file and saves the data into temporary SQL tables. Then, it executes stored procedures to move the data from the temporary tables to actual tables.

## Lambda Function

For detailed information about the Lambda function used in this project, refer to the [README](https://github.com/DAI-Advisors/dai-advisors-lambda-function-script) in the following repository: [DAI Advisors Lambda Function Script](https://github.com/DAI-Advisors/dai-advisors-lambda-function-script)

## Database Setup

To set up the necessary database in AWS RDS, follow these steps:

1. Use a tool like Workbench or any other SQL client.
2. Execute the SQL queries provided below to create the required temporary tables.

### Temporary Tables

#### `bd_core_account_information`

```sql
CREATE TABLE `DaiAdvisor`.`bd_core_account_information` (
  -- Table columns defined here
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
