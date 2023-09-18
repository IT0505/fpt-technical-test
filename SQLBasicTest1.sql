SELECT o.Customer_number, c.Customer_name, SUM(Order_quantity)
FROM orders o
JOIN customers c ON o.Customer_number = c.Customer_number
GROUP BY Customer_number
ORDER BY SUM(Order_quantity) DESC LIMIT 3