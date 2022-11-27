#  The Xplace
## _Technical test_

## To run the application you must follow the following steps:
1. Clone this repository : https://github.com/jorgeemherrera/theXplaceTest
 
2. When you enter the project you will find two folders
   - 2.1  Open a console in the **/server** folder and run: ```npm install  ```
   - 2.2  Open a new console in the **/client** folder and run:  ``` npm install  ```
3. From the **server** console run: ``` npm run dev  ```
4. From the **client** console run: ``` npm start  ```

## With these previous steps you should run the backend and the frontend.
---
# Create test data
1. Use a data manager running MySQL ; recommended(MySQL Workbench)
2. Create a database schema with ```dbname: thexplace, user: root, password: root ```
3. Go to **/server** folder and open in path **src/index.ts**
   - 3.1 Go to line 13
   - 3.2 Change const **stateSynchronize** to ```true```. 
   - 3.3 Save the file and change **stateSynchronize** to ```false```.
4. Since the constant is the one that creates the data in the table when it is true

# with these steps the project should be running, if not, call the Administrator :)
