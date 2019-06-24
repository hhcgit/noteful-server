TRUNCATE folders, notes RESTART IDENTITY CASCADE;

INSERT INTO folders
  (name)
  VALUES
    ('A'),
    ('B'),
    ('C'),
    ('D'),
    ('E'),
    ('F'),
    ('G'),
    ('H'),
    ('I'),
    ('J');

INSERT INTO notes
  (name, folder_id, content)
  VALUES
  ('First Note', 1, 'Hello World'),
  ('Second Note', 2, 'Hello World'),
  ('Third Note', 3, 'Hello World'),
  ('Fourth Note', 4, 'Hello World'),
  ('Fifth Note', 5, 'Hello World'),
  ('Sixth Note', 6, 'Hello World'),
  ('Seventh Note', 7, 'Hello World'),
  ('Eighth Note', 8, 'Hello World'),
  ('Ninth Note', 9, 'Hello World'),
  ('Tenth Note', 10, 'Hello World');