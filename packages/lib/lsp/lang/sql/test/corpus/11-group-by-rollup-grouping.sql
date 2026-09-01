-- Source: MySQL 8.4 manual, 14.19.2 GROUP BY Modifiers
-- Construct: WITH ROLLUP together with GROUPING()
-- Verdict: accepts
SELECT year, country, SUM(profit) AS profit, GROUPING(year) AS grp_year
FROM sales GROUP BY year, country WITH ROLLUP;
