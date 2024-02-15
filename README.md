## Lambda Function Setup

To set up the Lambda function, follow these steps:

1. Install the necessary libraries using pip:
    ```bash
    pip install -t . pymysql
    ```

2. Zip the files. Ensure that the `lambda_function.py` and other library files are in the same root directory. For example:
    ```
    ├── pymysql
    ├── PyMySQL-1.1.0.dist-info
    └── lambda_function.py
    ```

3. Upload the zipped file to the code source in the Lambda function.

4. Configure the Lambda function:
   - In the AWS Management Console, navigate to the Lambda service.
   - Create a new Lambda function or select an existing one.
   - Set the runtime environment to Python (or your preferred language).
   - Upload the zip file containing your Lambda function code.
   - Configure the handler and other settings as needed.
   - Ensure to update the Lambda function configuration with the database connection details (endpoint, port, username, and password).

5. Set up an S3 Bucket:
   - If an S3 bucket for file storage does not exist, create one:
     - Log in to the AWS Management Console.
     - Navigate to the S3 service.
     - Click on "Create bucket".
     - Follow the prompts to configure the bucket settings, such as name, region, and permissions.

6. Add Trigger to Lambda:
   - After creating the S3 bucket, add a trigger to the Lambda function:
     - Go to the Lambda function configuration page.
     - Click on "Add trigger".
     - Choose S3 as the trigger type.
     - Select the S3 bucket you created as the event source.
     - Configure the event type as `s3:ObjectCreated:*` and other settings as needed.

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

   **Note:** After creating the RDS instance, make sure to update the Lambda function configuration with the database connection details (endpoint, port, username, and password).

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
