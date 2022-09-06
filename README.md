# CRUD board
simple CRUD board using REST API
<p align = "center">
![image](https://user-images.githubusercontent.com/78003151/188738606-498ec548-e58c-4a08-9479-8c1fa20bc69d.png)
</p>       
<p align = "center">
  main page
</p>
<p align = "center">
![image](https://user-images.githubusercontent.com/78003151/188738998-3bb2c30b-8b48-4235-9661-b9fdc1ef25a1.png)
</p>
<p align = "center">
  post page
</p>
<p align = "center">
![image](https://user-images.githubusercontent.com/78003151/188739194-c7250954-6f8c-436d-8287-2df76b502120.png)
</p>
<p align = "center">
  post detail page
</p>

## main features
- User can view current posting on main page with title, author, and created date
- User can write a post by entering title, username, and contents
- User can delete or edit post

## upcoming features
- User Authorization and Authentication
1. only signed user can view & write posts
2. only author can edit & delete their posts
- Pagination
1. display 5 posts per page
2. automatically create the next page and update to the page navigation bar

## Tech stack
- html, css, javascript (jQuery ajax)
- Spring Boot (java 8)
- Spring Data JPA
- H2 in-memory database
