# Assignment
Threaded comment widget assignment

## How to create the widget?

## Step 1: Install required npm packages:

**1.** Clone the repository <br/>
**2.** Enter the command "npm install" (if nodejs not installed then install it first).

## Step 2: Creating back-end: REST API, server and mysql database using nodejs and express framework ,MYSQL workbench and javascript

**1.** Creating database: Run the file using command 'node database.js' or create manually using MYSQL workbench <br/>
**2.** Create server using nodejs <br/>
**3.** Use express framework to create routes for APIs and store all static files in public directory <br/>
**4.** Sync-mysql is used to perform synchronized operations with MySQL <br/>
**5.** **GET:** '/fetchComment' => Fetch all the comments from the database ordered by their parent_comment_id. <br/>
**Note:** Default parent_comment_id=0 <br/>
**6.** **POST:** '/addComment' => Adds comment to the database <br/>
**7.** **PUT:** '/voteUp' => Increments count of up votes up in the database and '/voteDown' => Increments count of vote down in database <br/>
**8.** **Functions created:** <br/> (1) setId: on clicking **Reply** button of a specific comment, setId(commentId) function is called and the value of id is set to commentId. So when user enters the new comment then it is stored as a reply to that specific comment. <br/>
(2) load_comment(): loads the comments in the index page and shows them in the specified format <br/>
(3) voteUp(commentId): Increments count of vote up of comment with id = commentId <br/>
(4) voteDown(commentId):  Increments count of vote up of comment with id = commentId <br/>
**9.** AJAX is used using plain javascript to support dynamic loading of page content <br/>
**10.** Timestamp is calculated by comparing it with current timestamp and the best choice is selected to display with the comment. eg: 5 seconds ago etc. <br/>

**Note:** Data is send and received in **JSON** form. <br/>

## Step 3: Back-end Testing: <br/>

**REST API** are tested using **POSTMAN**. <br/>

## Step 4: Creating Front-end: Bootstrap, HTML, CSS and Plain Javascript.  <br/>

**Note:** JQuery is only included as a plugin for bootstrap <br/>

**1.** Form included two input elements: (1) User name (2) Comment <br/>
**2.** When user submits the form the validation checks are applied for empty fields <br/>
**3.** Bootstrap panels and buttons are used to display the comments and buttons <br/>
**4.** Font-awesome library used for like and dislike logo <br/>
**5.** Comments are showed in a nested form <br/>
**6.** Users can reply to others' comment by clicking on **Reply** button of specific comment and then submitting the form at the top of the page <br/>
**7.** Date showed in a style similar to that of **Facebook** <br/>
**8.** Like and Dislike buttons are included at the bottom of the comment <br/>

**Note:** Easily pluggable into existing website. <br/>
