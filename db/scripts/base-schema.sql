CREATE TABLE IF NOT EXISTS patch_history(
  id INTEGER PRIMARY KEY,
  name TEXT,
  applied_on TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS country(
  code TEXT PRIMARY KEY,
  name TEXT
);

CREATE TABLE IF NOT EXISTS zone(
  id INTEGER PRIMARY KEY,
  country_code TEXT,
  name TEXT,
  FOREIGN KEY(country_code) REFERENCES country(code)
);

CREATE TABLE IF NOT EXISTS timezone(
  id INTEGER PRIMARY KEY,
  zone_id INTEGER,
  abbreviation TEXT,
  time_start INTEGER,
  gmt_offset INTEGER,
  dst INTEGER,
  FOREIGN KEY(zone_id) REFERENCES zone(id)
);

CREATE TABLE IF NOT EXISTS account(
  id INTEGER PRIMARY KEY,
  name TEXT,
  zone_id INTEGER,
  FOREIGN KEY(zone_id) REFERENCES zone(id)
);
