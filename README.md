# JavaScript Null Handling Bug

This repository demonstrates a potential bug related to null value handling in JavaScript functions.  The `foo` function adds two numbers, but it simply returns 0 if either input is null.  This may be acceptable in some scenarios, but in others, more robust error handling might be necessary (such as throwing an exception or using a default value in a more controlled way). The solution shows how to improve this behavior. 

## Bug Report
The initial `foo` function lacks comprehensive null handling.  While it prevents errors, returning 0 might not convey the true nature of the issue.  More sophisticated error management is often preferred to improve code clarity and maintainability.