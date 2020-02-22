
INSERT INTO books (author_name, title, category, published_year, price)
VALUES ("Mark Twain", "The Adventures of Tom Sawyer", "drama", "1876", 19.99);

INSERT INTO books (author_name, title, category, published_year, price)
VALUES ("William Shakespeare", "Romeo and Juliet", "drama", 1576, 19.99);

INSERT INTO books (author_name, title, category, published_year, price)
VALUES ("Charles Dickens", "A Tale Of Two Cities", "drama", 1899, 19.99);

INSERT INTO carts (title, author_name, quantity,book_id,user_id)
VALUES ("Romeo and Juliet", "William Shakespeare", 1,2,1);

INSERT INTO carts (title, author_name, quantity,book_id,user_id)
VALUES ("A Tale of Two Cities","Charles Dickens",1,3,1);

INSERT INTO carts (title, author_name, quantity,book_id,user_id)
VALUES ("The Adventure of Tom Sawyer","Mark Twain",1,1,1);

INSERT INTO users ( username, password)
VALUES ("tomhank", "pass123");

INSERT INTO users ( username, password)
VALUES ("bradpitt", "123pass");



