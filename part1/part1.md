# Part 1

 1. prices.length will be printed
 2. The last instance of discountedPrice will be printed
 3. The finalPrice variable will be printed
 4. The function will return the array \[50,100,150\] because for each value in the input array *prices*, it adds the discounted amount to the return list. The discounted amount in this case is 50% of what was in the *prices* array.
 5. An error will be thrown because i is limited to the scope of the for loop and is inaccessible outside of it.
 6. An error will be thrown because discountedPrice is limited to the scope of inside the for loop and is inaccessible outside of it.
 7. The final instance of FinalPrice will be printed.
 8. The function will return the array \[50,100,150\] because for each value in the input array *prices*, it adds the discounted amount to the return list. The discounted amount in this case is 50% of what was in the *prices* array.
 9. An error will be thrown because i is limited to the scope of the for loop and is inaccessible outside of it.
 10. An error will be thrown because discountedPrice is limited to the scope of inside the for loop and is inaccessible outside of it.
 11. 0 will be printed as it is a constant and cannot be reassigned in the code
 12. Nothing will be returned because the for loop will throw an error on line 7 because finalPrice cannot be reassigned from 0 as it is a constant.
 13. Notations:
  A. student.name  
  B. student["Grad Year"]  
  C. student.greeting()  
  D. student["Favorite Teacher"].name  
  E. student.courseLoad[0]  
 14. Arithmetic
     A. '32' - string concatenation  
     B. 1 - '3' is converted to number for mathematical operation  
     C. 3 - null becomes 0  
     D. '3null' - string concatenation  
     E. 4 - numeric conversion, true becomes 1  
     F. 0 - numeric conversion, false becomes 0 null becomes 0  
     G. '3undefined' - string concatenation  
     H. NaN - "3" is converted to number, undefined is converetd to Not A Number  
 15. Comparison  
     A. true - 2 is converted to number 
     B. false - character-by-character string comparison does the 2<1 operation first and returns false  
     C. true - '2' is converted to integer 2  
     D. false - 2 and '2' are not of the same type  
     E. false - true has numeric value 1, not 2  
     F. true - A Boolean() type conversion returns true for any value other than 0, '', null, undefined, and NaN.  
 16. The === operator verifies if the two operators are equal in value and in type without performing ANY type conversions.
 17. **How Are You?** is printed because an if statement inherently calls the Boolean() on the content and a  Boolean() type conversion returns true for any value other than 0, '', null, undefined, and NaN. Since 2 is none of these values, Boolean(2) returns true even though 2 != true.
 18. See attached
 19. \[6\] will be returned. Since newArr is a const type, the for loop will only really push the first item. We call callback (which is doSomething) with parameters num=1 and callback(x)={return x*2}. From within doSomething, we return callback(1+2)=callback(3)=function(3)=3\*2=6. So we push 6 to newArr and return \[6\].
 20. See attached
 21. Each on it's separate line in the following order: 1,4,3,2