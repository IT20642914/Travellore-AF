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
 `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  master_id int,
  custdian_id tinytext,
  mstracct_number tinytext,
  master_account_name tinytext,
  business_date tinytext,
  account_id tinytext,
  account_title_line_1 tinytext,
  account_title_line_2 tinytext,
  account_title_line_3 tinytext,
  account_status Boolean,
  acct_regis tinytext,
  acct_type tinytext,
  txpyr_title tinytext,
  taxpayer_first_name tinytext,
  taxpayer_middle_name tinytext,
   taxpayer_last_name tinytext,
   txpyr_suff tinytext,
   wh_cd tinytext,
   primary_contact tinytext,
   alias_name tinytext,
   mailing_address_line_1 tinytext,
   mailing_address_line_2 tinytext,
   mailing_address_line_3 tinytext,
   account_mailing_city tinytext,
   ac_st  tinytext,
   acct_mail_zip  tinytext,
   acct_mailing_ctry_code tinytext,
   email_address  tinytext,
   phone_nbr tinytext,
   business_ph tinytext,
   date_opened tinytext,
   schwab_br_cd tinytext,
   s_s tinytext,
   ac_cs tinytext,
   ac_ma tinytext,
   m_a tinytext,
   a_r tinytext,
   a_m tinytext,
   nr_am tinytext,
   a_o tinytext,
   b_f tinytext,
   nr_bn tinytext,
   p_c tinytext,
   p_d tinytext,
   p_b tinytext,
   u_m tinytext,
   f_a tinytext,
   intbr_cd tinytext,
   intbr_mm_cd tinytext,
   intbearing_ticker_symbol  tinytext,
   intbearing_feat_is_id tinytext,
   int_sf tinytext,
   p_v tinytext,
   p_m tinytext,
   statemnt_pref tinytext,
   a_t tinytext,
   dflt_ltsel tinytext,
   c_m tinytext,
   cbm_mf tinytext,
   cbm_nmf tinytext,
   cb_mthd_date tinytext,
   custtype_code tinytext,
   organization_primary_name tinytext,
   rstr_rsn1 tinytext,
   rstr_rsn2 tinytext,
   rstr_rsn3 tinytext,
   rstr_rsn4 tinytext,
   rstr_rsn5 tinytext,
   schwab_bank_ic_account_  tinytext,
   ssn_tin_number  tinytext,
   p_e tinytext,
   mngdAcct_pltfrmCd tinytext,
   managed_account_money_manager tinytext,
   managed_account_investment_strategy  tinytext,
   bank_sweep_display_name tinytext,
   o_l tinytext,
   date_of_birth tinytext,
   coy_cd tinytext,
   st_cd tinytext
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
