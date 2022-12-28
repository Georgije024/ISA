-- COUNTRY

insert into country (id, name) values (1, 'Srbija');
insert into country (id, name) values (2, 'Bosna i Hercegovina');
insert into country (id, name) values (3, 'Hrvatska');


-- CITY

insert into city (id, name, country_id) values (1, 'Beograd', 1);
insert into city (id, name, country_id) values (2, 'Banja Luka', 2);
insert into city (id, name, country_id) values (3, 'Zagreb', 3);


-- ADDRESS

insert into address (id, street, street_number, city_id) values (1, 'Ulica Banjalučka', '100', 2);
insert into address (id, street, street_number, city_id) values (2, 'Ulica Jabučka', '15', 1);
insert into address (id, street, street_number, city_id) values (3, 'Ulica Cara Dušana', '17', 1);
insert into address (id, street, street_number, city_id) values (4, 'Ulica Milovana Jakšića', '3', 1);
insert into address (id, street, street_number, city_id) values (5, 'Ulica Bakarska', '38', 3);

-- CITY_ADDRESS_LIST

insert into city_address_list (city_id, address_list_id) values (2, 1);
insert into city_address_list (city_id, address_list_id) values (1, 2);
insert into city_address_list (city_id, address_list_id) values (1, 3);
insert into city_address_list (city_id, address_list_id) values (1, 4);
insert into city_address_list (city_id, address_list_id) values (3, 5);


-- COUNTRY_CITY

insert into country_city (country_id, city_id) values (1, 1);
insert into country_city (country_id, city_id) values (2, 2);
insert into country_city (country_id, city_id) values (3, 3);

-- MEDICAL_CENTER

insert into medical_center (id, name, address_id, rating) values (1, 'Zdravomed', 1, 4);
insert into medical_center (id, name, address_id, rating) values (2, 'Jugolab', 2, 5);
insert into medical_center (id, name, address_id, rating) values (3, 'Krv', 3, 2);

--STAFF

insert into staff (id,is_deleted,jmbg,name,phone_number,surname,user_role) values (1,0,'111','Marko','111','Markovic',2);
insert into staff (id,is_deleted,jmbg,name,phone_number,surname,user_role) values (2,0,'222','Jovana','222','Petrovic',2);

-- USER

insert into user(user_id,biography,email,gender,is_deleted,jmbg,job,name,password,phone_number,surname,address_id,user_role,survey)
values(1,'aa','javatechie@gmail.com',1,0,'11','1','aa','password','11','aaa',null,1,0);

insert into user(user_id,biography,email,gender,is_deleted,jmbg,job,name,password,phone_number,surname,address_id,user_role,survey)
values(2,'aa','admin@gmail.com',1,0,'11','1','aa','password','11','aaa',null,0,0);
