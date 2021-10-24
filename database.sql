create table "user"(
    id int generated always as identity primary key,
    username varchar(50),
    password text,
    first_name varchar(30),
    last_name varchar(30),
    phone varchar(15),
    created_at timestamp,
    modified_at timestamp
);

create table user_address(
    id int generated always as identity primary key,
    user_id int references "user"(id),
    address_line1 text,
    address_line2 text,
    city varchar(30),
    postal_code varchar(10),
    country varchar(10),
    phone varchar(15)
);

create table user_payment(
    id int generated always as identity primary key,
    user_id int references "user"(id),
    payment_type varchar(30),
    provider varchar(30),
    acount_no int,
    expiry date
);

create table product_inventory(
    id int generated always as identity primary key,
    quantity int,
    created_at timestamp,
    modified_at timestamp,
    deleted_at timestamp
);

create table product_category(
    id int generated always as identity primary key,
    name varchar(100),
    description text,
    created_at timestamp,
    modified_at timestamp,
    deleted_at timestamp
);

create table discount(
    id int generated always as identity primary key,
    name varchar(100),
    description text,
    discount_percent smallint,
    active boolean,
    created_at timestamp,
    modified_at timestamp,
    deleted_at timestamp
);

create table product(
    id int generated always as identity primary key,
    name varchar(255),
    description text,
    sku varchar(20),
    category_id int references product_category(id),
    inventory_id int unique references product_inventory(id),
    price int,
    discount_id int references discount(id),
    created_at timestamp,
    modified_at timestamp,
    deleted_at timestamp
);

alter table product_inventory add foreign key (id) references product(inventory_id); 

create table shopping_session(
    id int generated always as identity primary key,
    user_id int unique references "user"(id),
    total int,
    created_at timestamp,
    modified_at timestamp
);

alter table "user" add foreign key (id) references shopping_session(user_id); 

create table cart_item(
    id int generated always as identity primary key,
    session_id int references shopping_session(id),
    product_id int unique references product(id),
    quantity int,
    created_at timestamp,
    modified_at timestamp
);

alter table product_inventory add foreign key (id) references cart_item(product_id); 

create table payment_details(
    id int generated always as identity primary key,
    order_id int,
    amount int,
    provider varchar,
    status varchar,
    created_at timestamp,
    modified_at timestamp
);

create table order_details(
    id int generated always as identity primary key,
    user_id int unique references "user"(id),
    total int,
    payment_id int unique references payment_details(id),
    created_at timestamp,
    modified_at timestamp
);

alter table "user" add foreign key (id) references order_details(user_id); 

alter table payment_details add foreign key (id) references order_details(payment_id); 

create table order_items(
    id int generated always as identity primary key,
    order_id int references order_details(id),
    product_id int unique references product(id),
    quantity int,
    created_at timestamp,
    modified_at timestamp
);

alter table product add foreign key (id) references order_items(product_id); 

