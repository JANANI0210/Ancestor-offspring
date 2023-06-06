# CREATE A PROGRAM TO FIND ANCESTOR AND OFFSPRING

### AIM :
      To Create a program to find Ancestor and Offspring using Js.

### ALGORITHM :
	
    Step 1: Start by creating a new folder. 
    Step 2: Create and Open the “index.html”, write the code.
    Step 3: Create a new CSS file “script.js” 
    Step 4: Declare a main array variable with sub-arrays inside.
    Step 5: Use an outer loop to iterate over the main array. Initialize a variable to keep                        
              track of the current index of the main array.
    Step 6: Start the outer loop and set the loop condition to iterate until the end of the 
                         main array.
    Step 7: Access the elements of the sub-array using the current indices obtained from 
                         the outer and inner loops. For example, you can use main Array[i][j] to access 
                         the element at index j of the sub-array at index i within the main array.
    Step 8: Perform desired operations on the elements within the sub-array.
                         Continue the nested loop until all elements of the sub-array have been      
                         processed.

### PROGRAM :

      index.html
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Generation Finder</title>
      </head>
      <body>

          <script src="assets/js/script.js"></script>
      </body>
      </html>


      JS:

      function FindGeneration(code,gender)
      {
          if((gender == 'm' || gender == 'M') && code<0)
          {
              relation = " father"
          }
          else if((gender == 'f' || gender == 'f') && code<0)
          {
              relation = " mother"
          }
          else if((gender == 'm' || gender == 'M') && code>0)
          {
              relation = " son"
          }
          else if((gender == 'f' || gender == 'f') && code>0)
          {
              relation = " daughter"
          }

          switch(code)
          {
              case -3:
                  console.log("great grand"+relation)
                  break
              case -2:
                  console.log("grand"+relation)
                  break
              case -1:
                  console.log(relation)
                  break
              case 0:
                  console.log("me")
                  break
              case 1:
                  console.log(relation)
                  break
              case 2:
                  console.log("grand"+relation)
                  break
              case 3:
                  console.log("great grand"+relation)
                  break
          }
          }

             var code = 0
           var gender = 'f'
           var relation
           FindGeneration(code,gender)
### OUTPUT :

![image](https://github.com/JANANI0210/Ancestor-offspring/assets/86832944/03180187-b91f-4e48-80b2-4a36288bbcb2)

### RESULT :
        Thus, to create a program to find Ancestor and Offspring using Js has been implemented successfully.


