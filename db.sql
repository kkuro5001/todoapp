CREATE TABLE todo_list (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title TEXT NOT NULL,
    memo TEXT,
    is_checked BOOLEAN DEFAULT FALSE
);