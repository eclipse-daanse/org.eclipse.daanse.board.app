-- Source: MySQL 8.4 manual, 7.1.11 Server SQL Modes (PIPES_AS_CONCAT)
-- Construct: || as string concatenation rather than logical OR
-- Verdict: accepts
SELECT first_name || ' ' || last_name AS full_name FROM people;
