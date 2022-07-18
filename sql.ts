// CREATE TABLE melinh.Flower(
//    id varchar(100) PRIMARY key not null,
//    title varchar(2000) not null,
//    avaUrl varchar(100) not null,
//    imageList varchar(4000),
//    currentPrice integer,
//    oldPrice integer,
//    category varchar(50),
//    typeId varchar(100),
//    description varchar(4000),
//    status varchar(50),
//    createdDate date,
//    createdBy varchar(40),
//    updatedDate date,
//    updatedBy varchar(40)
//    )

// CREATE TABLE melinh.Order(
//   id varchar(100) PRIMARY key not null,
//   flowerId varchar(100) not null,
//  userId varchar(100) not null,
//    phone varchar(50),
//    addressId varchar(100) not null,
//   quantity integer,
//   status varchar(50),
//   createdDate date,
//   deliveryDate date,
//   createdBy varchar(40),
//   updatedDate date,
//   updatedBy varchar(40)
//   )

// CREATE TABLE melinh.Address (
//     id VARCHAR(100) PRIMARY key not null,
//     userId VARCHAR(100),
// 	    provinceId VARCHAR(100),
//     fullName  VARCHAR(100),
//     phone VARCHAR(50),
//     address varchar(4000),
//     createdDate DATE,
//     createdBy  VARCHAR(40),
//     updatedDate DATE,
//     updatedBy  VARCHAR(40)
// );

// CREATE TABLE melinh.DashboardUser(
//     id varchar(100) PRIMARY key not null,
//     passWord varchar(100) not null,
//   fullName varchar(100),
//      phone varchar(50) not null,
//      address varchar(4000),
//     createdDate date,
//     createdBy varchar(40),
//     updatedDate date,
//     updatedBy varchar(40)
//     )
//     CREATE TABLE melinh.MobileUser(
//         id varchar(100) PRIMARY key not null,
//         passWord varchar(100) not null,
//       fullName varchar(100),
//          phone varchar(50) not null,
//          address varchar(4000),
//          firebaseId varchar(100),
//         createdDate date,
//         createdBy varchar(40),
//         updatedDate date,
//         updatedBy varchar(40)
//         )

//     CREATE TABLE melinh.Province(
//         id varchar(100) PRIMARY key not null,
//         code varchar(100) not null,
//       province varchar(100),
//         createdDate date,
//         createdBy varchar(40),
//         updatedDate date,
//         updatedBy varchar(40)
//         )

//     CREATE TABLE melinh.FlowerType(
//         id varchar(100) PRIMARY key not null,
//         flowerType varchar(100) not null,
//         descripition varchar(100),
//         createdDate date,
//         createdBy varchar(40),
//         updatedDate date,
//         updatedBy varchar(40)
//         )

// CREATE TABLE melinh.Notification(
//     id varchar(100) PRIMARY key not null,
//     firebaseId varchar(100) not null,
//     title varchar(400),
//     descripition varchar(2000),
//     createdDate date,
//     createdBy varchar(40),
//     updatedDate date,
//     updatedBy varchar(40)
//     )

// CREATE TABLE melinh.Promotion(
//     id varchar(100) PRIMARY key not null,
//     descripition varchar(2000),
//     createdDate date,
//     createdBy varchar(40),
//     updatedDate date,
//     updatedBy varchar(40)
//     )