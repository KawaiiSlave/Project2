
INSERT INTO books (author_name, title, category, published_year, price)
VALUES ("Mark Twain", "The Adventures of Tom Sawyer", "drama", "1876", 19.99);

INSERT INTO books (author_name, title, category, published_year, price)
VALUES ("William Shakespeare", "Romeo and Juliet", "drama", 1576, 19.99);

INSERT INTO books (author_name, title, category, published_year, price)
VALUES ("Charles Dickens", "A Tale Of Two Cities", "drama", 1899, 19.99);

INSERT INTO books (author_name, title, category, published_year, price)
VALUES 
    ("Neil Gaiman", "The Graveyard Book", "scifi&fantasy", 2009, 19.99);
    ("George R.R. Martin", "A Game of Thrones", "scifi&fantasy", 1996, 19.99),
    ("George R.R. Martin", "A Clash of Kings", "scifi&fantasy", 1998, 19.99),
    ("George R.R. Martin", "A Storm of Swords", "scifi&fantasy", 2000, 19.99),
    ("George R.R. Martin", "A Feast for Crows", "scifi&fantasy", 2005, 19.99),
    ("George R.R. Martin", "A Dance with Dragons", "scifi&fantasy", 2011, 19.99),
    ("George R.R. Martin", "The Winds of Winter", "scifi&fantasy", 2020, 19.99),
    ("Agatha Christie", "Murder at the Vicarage", "mystery", 1930, 19.99),
    ("Agatha Christie", "Murder On the Orient Express", "mystery", 1934, 19.99),
    ("Douglas Adams", "Hitchhiker's Guide to the Galaxy", "comedy", 1979, 19.99),
    ("Terry Pratchett and Neil Gaiman", "Good Omens", "comedy", 1990, 19.99),
    ("Thomas Scanlan", "What We Owe to Each Other", "philosophy", 1998, 19.99),
    ("Marcus Aurelius", "Meditations", "philosophy", 167, 19.99),
    ("Unknown", "Beowulf", "poetry", 975, 19.99),
    ("Bill Brown", "the Cairns", "poetry", 2019, 19.99),
    ("Jane Austen", "Pride and Prejudice", "romance", 1813, 19.99),
    ("Jane Austen", "Sense and Sensibility", "romance", 1811, 19.99),
    ("James Stewart", "Calculus: Early Transcendentals", "textbook", 2011, 199.99),
    ("Michael S. Matta and Dennis D. Stanley", "Chemistry", "textbook", 2004, 199.99);

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



