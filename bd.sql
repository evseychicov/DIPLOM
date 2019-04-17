CREATE TABLE users(
  id_user INT PRIMARY KEY NOT NULL ,
  email VARCHAR(40) NOT NULL ,
  password VARCHAR(20) NOT NULL
);
CREATE TABLE comments(
  id_comment INT PRIMARY KEY NOT NULL ,
  comment TEXT NOT NULL ,
  fkey_user INT NOT NULL ,
  FOREIGN KEY (fkey_user) REFERENCES users (id_user)
);
CREATE TABLE feedback(
  id_feedback INT PRIMARY KEY NOT NULL ,
  feedback VARCHAR(13) NOT NULL
);
