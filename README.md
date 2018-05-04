# Assignment
Threaded comment widget assignment

## How to create the widget?

## Step 1: Install required npm packages:

**1.** Clone the repository <br/>
**2.** Enter the command "npm install" (if nodejs not installed then install it first).

## Step 2: Creating back-end: REST API, server and mysql database using nodejs and express framework ,MYSQL workbench and javascript

**1.** Creating database: Run the file using command 'node database.js' or create manually using MYSQL workbench
**2.** Create server using nodejs 
**3.** Use express framework to create routes for APIs and store all static files in public directory
**4.** Sync-mysql is used to perform synchronized operations with MySQL
**5.** **GET:** '/fetchComment' => Fetch all the comments from the database ordered by their parent_comment_id. **Note:** Default parent_comment_id=0
**6.** **POST:** '/addComment' => Adds comment to the database 
**7.** **PUT:** '/voteUp' => Increments count of up votes up in the database and '/voteDown' => Increments count of vote down in database
**8.** **Functions created:** (1) setId: on clicking **Reply** button of a specific comment, setId(commentId) function is called and the value of id is set to commentId. So when user enters the new comment then it is stored as a reply to that specific comment.
(2) load_comment(): loads the comments in the index page and shows them in the specified format
(3) voteUp(commentId): Increments count of vote up of comment with id = commentId
(4) voteDown(commentId):  Increments count of vote up of comment with id = commentId
**9.** AJAX is used using plain javascript to support dynamic loading of page content
**10.** Timestamp is calculated by comparing it with current timestamp and the best choice is selected to display with the comment. eg: 5 seconds ago etc.

**Note:** Data is send and received in **JSON** form.

## Step 3: Back-end Testing:

**REST API** are tested using **POSTMAN**.

## Step 4: Creating Front-end: Bootstrap, HTML, CSS and Plain Javascript. 

**Note:** JQuery is only included as a plugin for bootstrap

**1.** Form included two input elements: (1) User name (2) Comment
**2.** When user submits the form the validation checks are applied for empty fields
**3.** Bootstrap panels and buttons are used to display the comments and buttons
**4.** Font-awesome library used for like and dislike logo
**5.** Comments are showed in a nested form
**6.** Users can reply to others' comment by clicking on **Reply** button of specific comment and then submitting the form at the top of the page
**7.** Date showed in a style similar to that of **Facebook**
**8.** Like and Dislike buttons are included at the bottom of the comment

**Note:** Easily pluggable into existing website.
