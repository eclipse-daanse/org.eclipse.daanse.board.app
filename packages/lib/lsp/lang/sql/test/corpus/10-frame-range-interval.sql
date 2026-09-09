-- Source: MySQL 8.4 manual, 14.20.3 Window Function Frame Specification
-- Construct: a RANGE frame bounded by an INTERVAL expression
-- Verdict: accepts
SELECT the_date, SUM(sales) OVER (ORDER BY the_date
  RANGE BETWEEN INTERVAL 7 DAY PRECEDING AND CURRENT ROW) AS weekly
FROM daily_sales;
