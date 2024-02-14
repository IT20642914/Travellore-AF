# S3 File to Lambda to Temporary SQL Tables to Actual Tables

This project automates the process of updating files to an S3 bucket, triggering a Lambda function. This Lambda function reads the uploaded file and saves the data into temporary SQL tables. Then, it executes stored procedures to move the data from the temporary tables to actual tables.

## Lambda Function

For detailed information about the Lambda function used in this project, refer to the [README](https://github.com/DAI-Advisors/dai-advisors-lambda-function-script) in the following repository: [DAI Advisors Lambda Function Script](https://github.com/DAI-Advisors/dai-advisors-lambda-function-script)

## Database Setup

To set up the necessary database in AWS RDS, follow these steps:

1. Use a tool like Workbench or any other SQL client.
2. create  new schema called 'DaiAdvisor'
3. Execute the SQL queries provided below to create the required temporary tables and other required tables.


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
```

#### `bd_core_reconciliation_position`

```sql
CREATE TABLE `DaiAdvisor`.`bd_core_reconciliation_position` (
`id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
 master_id int,
 custdian_id tinytext,
 mstracct_number tinytext,
 master_account_name tinytext,
 business_date tinytext,
 account_id tinytext,
 prod_code tinytext,
 prodcatg_code tinytext,
 tax_code tinytext,
 ly_st tinytext,
 ticker_symbol  tinytext,
 industry_ticker_symbol tinytext,
 cusip tinytext,
 schwab_sec_nbr tinytext,
 item_issue_id tinytext,
 rulst_sufid tinytext,
 isin tinytext,
 sedol tinytext,
 options_display_symbol tinytext,
 security_description_line_1  tinytext,
 security_description_line_2 tinytext,
 security_description_line_3 tinytext,
 scrtydes_line_4 tinytext,
 underlying_ticker_symbol tinytext,
 underlying_industry_ticker_symbol tinytext,
 underlyng_cusip tinytext,
 underly_schwab_ tinytext,
 underlying_itm_iss_id tinytext,
 unrul_sufid tinytext,
 underlying_isin tinytext,
 underly_sedol tinytext,
 mnymk_code tinytext,
 d_r tinytext,
 c_g tinytext,
 closing_price tinytext,
 secprice_lstupdte tinytext,
 quantity_settled_unsettled tinytext,
 l_s tinytext,
 market_value_settled_unsettled  tinytext,
 accounting_rule_code tinytext,
 quantity_settled tinytext,
 quantity_unsettled_long  tinytext,
 quantity_unsettled_short tinytext,
 tips_factor tinytext,
 asset_backed_factor tinytext,
 closing_price_unfactored tinytext,
 factor tinytext,
 factor_date tinytext
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

#### `bd_core_reconciliation_position_2`

```sql
CREATE TABLE `DaiAdvisor`.`bd_core_reconciliation_position_2` (
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
 Acct_regis tinytext,
 acct_type tinytext,
 net_credit_debit tinytext,
 margin_balance tinytext,
 available_to_pay tinytext,
 mrgn_buying_pwr tinytext,
 money_mkt_funds tinytext,
 mtd_margin_int tinytext,
 daily_margin_int tinytext,
 eqty_excl_option tinytext,
 eqty_percentage tinytext,
 mkt_value_long tinytext,
  mkt_value_short tinytext,
  eqty_incl_option tinytext,
  option_rqrmnts  tinytext,
 mnth_end_div_pay tinytext,
 maintenance_call tinytext,
 mvl_cash_ex_optn tinytext,
 net_mv_positions tinytext,
 net_mv_plus_cash tinytext,
 cash_balance_settled_only  tinytext,
 cash_margin_bal_settled tinytext,
 Bank_Sweep_IBF tinytext
 
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

#### `bd_core_security_information`

```sql
CREATE TABLE `DaiAdvisor`.`bd_core_security_information` (
`id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
	 master_id int,
	 custdian_id tinytext,
	 mstracct_number tinytext,
	 master_account_name tinytext,
	 business_date tinytext,
     prod_code tinytext,
      prodcatg_code tinytext,
 tax_code tinytext,
 ly_st tinytext,
 ticker_symbol  tinytext,
 industry_ticker_symbol tinytext,
 cusip tinytext,
 schwab_sec_nbr tinytext,
 reorg_sec_nbr tinytext,
 item_issue_id tinytext,
  rulst_sufid tinytext,
   isin tinytext,
 sedol tinytext,
 options_display_symbol tinytext,
 security_description_line_1  tinytext,
 security_description_line_2 tinytext,
 security_description_line_3 tinytext,
 scrtydes_line_4 tinytext,
 underlying_ticker_symbol tinytext,
 underlying_industry_ticker_symbol tinytext,
 underlyng_cusip tinytext,
 underly_schwab_ tinytext,
 underlying_itm_iss_id tinytext,
 unrul_sufid tinytext,
 underlying_isin tinytext,
 underly_sedol tinytext,
 mnymk_code tinytext,
 last_update tinytext,
 s_f tinytext,
  closing_price tinytext,
 secprice_lstupdte tinytext,
 security_valuation_unit  tinytext, 
 optnRt_symbol  tinytext,
 opt_expr_date tinytext,
 c_p tinytext,
 strike_price tinytext,
 interest_rate tinytext,
 maturity_date tinytext,
 tips_factor tinytext,
 asset_backed_factor tinytext,
 face_value_amt tinytext,
 st_cd tinytext,
 p_i tinytext,
 o_i tinytext,
 closing_price_unfactored tinytext,
 factor tinytext,
 factor_date tinytext,
 call_date tinytext,
 call_price tinytext,
 issue_date tinytext,
 1st_cpn_date tinytext,
 options_multiplier tinytext,
 dividend_interest_frequency tinytext,
 s_p_rating tinytext,
 moodys_rating tinytext,
 next_pay_date tinytext,
 next_put_date tinytext,
 next_put_price tinytext,
 mkt_code tinytext,
 par_value tinytext,
 is_cy tinytext,
 cy_is tinytext
);
```
#### `bd_core_transaction`
```sql
CREATE TABLE `DaiAdvisor`.`bd_core_transaction` (
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
 Acct_regis tinytext,
 acct_type tinytext,
 prod_code tinytext,
 prodcatg_code tinytext,
 tax_code tinytext,
 ly_st tinytext,
 ticker_symbol  tinytext,
 industry_ticker_symbol tinytext,
 cusip tinytext,
 schwab_sec_nbr tinytext,
 item_issue_id tinytext,
 rulst_sufid tinytext,
 isin tinytext,
 sedol tinytext,
 options_display_symbol tinytext,
  underlying_ticker_symbol tinytext,
 underlying_industry_ticker_symbol tinytext,
 underlyng_cusip tinytext,
 underly_schwab_ tinytext,
 underlying_itm_iss_id tinytext,
 unrul_sufid tinytext,
 underlying_isin tinytext,
 underly_sedol tinytext,
 mnymk_code tinytext,
 tr_cd SMALLINT,
 sb_cd tinytext,
 transaction_category tinytext,
 tran_srcde tinytext,
 transaction_source_code_description tinytext,
 transaction_detail_description tinytext,
 trade_typcd tinytext,
 t_c tinytext,
 trade_date tinytext,
 settlmnt_date tinytext,
 tran_date tinytext,
 exdivdnd_date tinytext,
 quantity tinytext,
 price tinytext,
 gross_amount tinytext,
 debit_credit tinytext,
 net_amount tinytext,
 commission tinytext,
 exchange_processing_fee tinytext,
 broker_service_fee tinytext,
 prime_broker_fee  tinytext,
 trade_away_fee tinytext,
 redemption_fee tinytext,
 other_fee tinytext,
 federal_tefra_withholding tinytext,
 state_tax_withholding tinytext,
 st_tx tinytext,
 accrued_interest tinytext,
 accounting_rule_code tinytext,
 ordr_srcd tinytext,
 order_number tinytext,
 trade_order_entry_tm_stmp tinytext,
  trade_order_exectn_tm_stmp tinytext,
 broker_code tinytext,
 broker_name tinytext,
 swb_from_account tinytext,
 swb_to_account tinytext,
 s1_check_number tinytext,
 s_i tinytext,
 stock_exchg tinytext,
 i_e tinytext,
 distribution_rate tinytext,
 cash_in_lieu_share_quantity tinytext,
 dividend_interest_share_quantity tinytext,
 cash_in_lieu_rate tinytext,
 asset_backed_factor tinytext,
 sr_sy tinytext,
 jn_tp tinytext,
 d_m tinytext,
 schwab_cashiering_unique_id tinytext,
 recipient_maker_name_line_1 tinytext,
 recipient_maker_name_line_2 tinytext,
 recipient_maker_name_line_3 tinytext,
 frequency tinytext,
 disburse_check_number tinytext,
 federal_bank_reference_number tinytext,
 recipient_maker_acct_number tinytext,
 bank_act_typ tinytext,
 bank_name_part_1 tinytext,
  bank_name_part_2 tinytext,
  bank_aba_ tinytext,
  intermediary_name tinytext,
  transaction_check_memo_1 tinytext,
    transaction_check_memo_2 tinytext,
    retirement_fed_income_tax tinytext,
    retirement_state_income_tax tinytext,
    rt_tx tinytext,
    publication_time_stamp tinytext,
    tips_factor tinytext,
    closing_price tinytext,
    transaction_memo tinytext,
    closing_price_unfactored tinytext,
    factor tinytext,
    factor_date tinytext,
    step_in_fee tinytext,
    markupmarkdown tinytext,
    research_fee tinytext,
    exec_brok_comm tinytext
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

#### `config`
```sql
CREATE TABLE `DaiAdvisor`.`config` (
`id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  table_name tinytext,
  current_version tinytext,
  updated_date datetime,
  created_date datetime
);
```
#### `meta_data`
```sql
CREATE TABLE `DaiAdvisor`.`meta_data` (
`id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  master_id tinytext,
  table_name tinytext,
  date datetime, 
  expected_record_count tinytext,
  actual_record_count tinytext
);
```
### actual Tables

/* This table is used to record accreditation status and hence an orphan */
#### `Accreditation`

```sql
CREATE TABLE `DaiAdvisor`.`Accreditation` (
    `Accreditation_ID` VARCHAR(8),
    `Accreditation_Request_Date` DATE,
    PRIMARY KEY (`Accreditation_ID`, `Accreditation_Request_Date`),
    `Accreditation_Method` SMALLINT,
    `Accreditation_Client_First_Name` VARCHAR(64),
    `Accreditation_Client_Last_Name` VARCHAR(64),
    `Accreditation_Client_Email` VARCHAR(32),
    `Accreditation_Address` VARCHAR(64),
    `Accreditation_Address2` VARCHAR(64),
    `Accreditation_Address_City` VARCHAR(32),
    `Accreditation_Address_State` VARCHAR(16),
    `Accreditation_Address_Zip` VARCHAR(16),
    `Accreditation_Address_Country` VARCHAR(32),
    `Accreditation_Spouse_First_Name` VARCHAR(64),
    `Accreditation_Spouse_Last_Name` VARCHAR(64),
    `Accreditation_Entity_Name` VARCHAR(64),
    `Accreditation_Amount` DECIMAL,
    `Accreditation_Successfully_Complted` BOOLEAN,
    `Accreditation_Complete_Date` DATE,
    `Accreditation_Note` VARCHAR(256),
    `Accreditation_Source_Num` SMALLINT,
    `Accreditation_Source_One` VARCHAR(32),
    `Accreditation_Source_Two` VARCHAR(32),
    `Accreditation_Source_Three` VARCHAR(32),
    `Accreditation_Source_Four` VARCHAR(32),
    `Accreditation_Source_Five` VARCHAR(32),
    `Accreditation_Letter` BLOB,
    `Accreditation_Source_One_File` BLOB,
    `Accreditation_Source_Two_File` BLOB,
    `Accreditation_Source_Three_File` BLOB,
    `Accreditation_Source_Four_File` BLOB,
    `Accreditation_Source_Five_File` BLOB
);
```
#### `Account`

```sql
CREATE TABLE `DaiAdvisor`.`Account` (
    `Account_ID` INT AUTO_INCREMENT PRIMARY KEY,
    `Account_Number` VARCHAR(16),
    `Account_Client_Group_ID` INT,
    FOREIGN KEY (`Account_Client_Group_ID`)
        REFERENCES `Client_Group` (`Client_Group_ID`),
    `Account_Number_Owners` SMALLINT,
    `Account_Owner_One_Client_ID` INT,
    `Account_Owner_Two_Client_ID` INT,
    `Account_Owner_Three_Client_ID` INT,
    `Account_Entity_Owner` INT,
    `Account_Brokerage` VARCHAR(32),
    `Account_Fee_Class` SMALLINT,
    `Account_Type` SMALLINT,
    `Account_Open_Date` DATE,
    `Account_Link_Date` DATE,
    `Account_Active` BOOLEAN,
    `Account_Ini_Deposit` DECIMAL,
    `Account_Description` VARCHAR(255),
    `Account_Margin` BOOLEAN,
    `Account_Option_Level` SMALLINT,
    `Account_Master` VARCHAR(12),
    `Account_Trade_Enabled` BOOLEAN,
    `Account_Fee_Enabled` BOOLEAN
);
```
#### `Transactions`

```sql
CREATE TABLE `DaiAdvisor`.`Transactions` (
    `Trans_Date` DATE,
    `Trans_Time` TIME,
    `Trans_ID` INT AUTO_INCREMENT PRIMARY KEY,
    `Trans_Client_Group_ID` INT,
    FOREIGN KEY (`Trans_Client_Group_ID`) REFERENCES `Client_Group`(`Client_Group_ID`),
    `Trans_Account_ID` INT,
    FOREIGN KEY (`Trans_Account_ID`) REFERENCES `Account`(`Account_ID`),
    `Trans_Invest_ID` INT,
    FOREIGN KEY (`Trans_Invest_ID`) REFERENCES `Investment`(`Invest_ID`),
    `Trans_Amount` DECIMAL,
    `Trans_Type` SMALLINT,
    `Trans_Symbol` VARCHAR(32),
    `Trans_Quantity` INT,
    `Trans_Price` DECIMAL,
    `Trans_Description` VARCHAR(256)
);
```
#### `Process`

```sql
CREATE TABLE `DaiAdvisor`.`Process` (
    `Process_ID` INT AUTO_INCREMENT PRIMARY KEY,
    `Process_Security_ID` INT NOT NULL,
    FOREIGN KEY (`Process_Security_ID`) REFERENCES `Security` (`Security_ID`),
    `Process_Date` DATE,
    `Process_Target_Trans_Date` DATE,
    `Process_Status` SMALLINT,
    `Process_Case_ID` VARCHAR(15),
    `Process_Client_Group_ID` INT NOT NULL,
    FOREIGN KEY (`Process_Client_Group_ID`) REFERENCES `Client_Group` (`Client_Group_ID`),
    `Process_Account_ID` INT,
    FOREIGN KEY (`Process_Account_ID`) REFERENCES `Account` (`Account_ID`),
    `Process_System` SMALLINT,
    `Process_Processor` VARCHAR(32),
    `Process_Processor_Email` VARCHAR(32),
    `Process_Processor_Phone` VARCHAR(16),
    `Process_Execution_Date` DATE,
    `Process_Wire_Date` DATE,
    `Process_AI_Platform` SMALLINT,
    `Process_AI_LOA_File` BLOB,
    `Process_AI_Sub_Doc_File` BLOB
);
```
#### `Investment`

```sql
CREATE TABLE `DaiAdvisor`.`Investment` (
    `Invest_ID` INT NOT NULL PRIMARY KEY,
    `Invest_Type` SMALLINT,
    `Invest_Sub_Type` SMALLINT,
    `Invest_Category` SMALLINT,
    `Invest_Symbol` VARCHAR(32),
    `Invest_Date` DATE,
    `Invest_Quantity` INT,
    `Invest_Price` DECIMAL,
    `Invest_Is_Active` BOOLEAN,
    `Invest_Commitment` DECIMAL,
    `Invest_Called` DECIMAL,
    `Invest_Fully_Called` BOOLEAN,
    `Invest_Close_Date` DATE,
    `Invest_IRR` FLOAT,
    `Invest_Multiple` FLOAT,
    `Invest_NAV` DECIMAL,
    `Invest_Distribution` DECIMAL,
    `Invest_DPI` FLOAT,
    `Invest_TVPI` FLOAT,
    `Invest_Firm_Name` VARCHAR(32),
    `Invest_Fund_Name` VARCHAR(64),
    `Invest_Fund_Class` VARCHAR(8),
    `Invest_Subscription_Done` BOOLEAN,
    `Invest_Wire_Done` BOOLEAN,
    `Invest_Fee_Collect` BOOLEAN,
    `Invest_Firm_Contact` VARCHAR(32),
    `Invest_Firm_Email` VARCHAR(32),
    `Invest_Firm_Phone` VARCHAR(16),
    `Invest_Firm_Contact2` VARCHAR(32),
    `Invest_Firm_Email2` VARCHAR(32),
    `Invest_Firm_Phone2` VARCHAR(16),
    `Invest_Firm_IR_Email` VARCHAR(32),
    `Invest_Fund_Onshore` BOOLEAN,
    `Invest_Platform` SMALLINT,
    `Invest_Paying_Account_ID` INT,
    `Invest_Paying_Account_Num` INT,
    `Invest_Wire_Account_Num` INT,
    `Invest_Wire_ABA` INT,
    `Invest_Wire_Bank_Name` VARCHAR(32),
    `Invest_Wire_Recipient_Name` VARCHAR(32),
    `Invest_Wire_FFC_Account_Num` INT,
    `Invest_Wire_FFC_Account_Name` VARCHAR(32)
);
```
#### `Valuation`

```sql
CREATE TABLE `DaiAdvisor`.`Valuation` (
    `Valuation_Date` DATE,
    `Valuation_Time` TIME,
    `Valuation_ID` INT NOT NULL PRIMARY KEY,
    `Valuation_Invest_ID` INT NOT NULL,
    FOREIGN KEY (`Valuation_Invest_ID`) REFERENCES `Investment` (`Invest_ID`),
    `Valuation_Price` DECIMAL,
    `Valuation_Currency` SMALLINT,
    `Valuation_Quote_Open` DECIMAL,
    `Valuation_Quote_High` DECIMAL,
    `Valuation_Quote_Low` DECIMAL,
    `Valuation_Quote_Close` DECIMAL,
    `Valuation_Quote_Pre_Close` DECIMAL
);
```
#### `Processing_Types`

```sql
CREATE TABLE `DaiAdvisor`.`Processing_Types` (
    `Process_Type_ID` SMALLINT,
    `Process_Type_Name` VARCHAR(32)
);
```
#### `Transaction_Types`

```sql
CREATE TABLE `DaiAdvisor`.`Transaction_Types` (
    `Trans_Type_ID` SMALLINT,
    `Trans_Type_Name` VARCHAR(32)
);
```
#### `Account_Types`

```sql
CREATE TABLE `DaiAdvisor`.`Account_Types` (
    `Account_Types_ID` SMALLINT,
    `Account_Types_Name` VARCHAR(32)
);
```
#### `Investment_Platforms`

```sql
CREATE TABLE `DaiAdvisor`.`Investment_Platforms` (
    `Platform_ID` SMALLINT,
    `Platform_Name` VARCHAR(32),
    `Platform_LOA` BLOB
);
```
#### `Accreditation_Types`

```sql
CREATE TABLE `DaiAdvisor`.`Accreditation_Types` (
    `Accreditation_Type_ID` SMALLINT,
    `Accreditation_Type_Name` VARCHAR(32),
    `Accreditation_Type_Min` DECIMAL,
    `Accreditation_Type_Max` DECIMAL
);

```
#### `Client_Classes`

```sql
CREATE TABLE `DaiAdvisor`.`Client_Classes` (
    `Client_Class_ID` SMALLINT,
    `Client_Class_Name` VARCHAR(32),
    `Client_Class_Fee` FLOAT
);
```
#### `Investment_Types`

```sql
CREATE TABLE `DaiAdvisor`.`Investment_Types` (
    `Investment_Type_ID` SMALLINT,
    `Investment_Type_Name` VARCHAR(32)
);

```
#### `Currency_Types`

```sql
CREATE TABLE `DaiAdvisor`.`Currency_Types` (
    `Currency_Type_ID` SMALLINT,
    `Currency_Type_Name` VARCHAR(32)
);
```
#### `System_Types`

```sql
CREATE TABLE `DaiAdvisor`.`System_Types` (
    `System_Type_ID` SMALLINT,
    `System_Type_Name` VARCHAR(32)
);

```
#### `Potential_Clients`

```sql
CREATE TABLE `DaiAdvisor`.`Potential_Clients` (
    `Potential_Client_ID` INT NOT NULL PRIMARY KEY,
    `Potential_Client_First_Name` VARCHAR(64),
    `Potential_Client_Last_Name` VARCHAR(64),
    `Potential_Client_Date` DATE,
    `Potential_Client_Note` VARCHAR(1000),
    `Potential_Client_Email` VARCHAR(32),
    `Potenetial_Client_Phone_Number` VARCHAR(16)
);
```
