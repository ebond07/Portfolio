CREATE TABLE IF NOT EXISTS reviews (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    review_id VARCHAR(255) NOT NULL,
    reviewer_name VARCHAR(255) NOT NULL,
    review_content VARCHAR(255) NOT NULL,
    reviewer_relationship VARCHAR(255) NOT NULL
    );