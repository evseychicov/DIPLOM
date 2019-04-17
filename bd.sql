CREATE TABLE users(
  id_user INT AUTO_INCREMENT PRIMARY KEY NOT NULL ,
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
  phone_number VARCHAR(13) NOT NULL,
  name_feedback VARCHAR(15) NOT NULL
);
