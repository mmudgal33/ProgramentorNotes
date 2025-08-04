//npm i bcrypt cors dotenv express jsonwebtoken mongoose multer nodemon
//search mongodb community server 64 bit current msi download       mongodb community server mongodb 4.0.28 version of MongoDB
//search mongodb shell download 64 bit current msi download
//search MongoDB Command Line Database Tools Download    64 bit current msi download

//environment variables---- path------ edit --------;C:\Program Files\MongoDB\Server\4.0\bin

//mongod --version
// db version v4.0.28
// git version: af1a9dc12adcfa83cc19571cb3faba26eeddac92
// allocator: tcmalloc
// modules: none
// build environment:
//     distmod: 2008plus-ssl
//     distarch: x86_64
//     target_arch: x86_64

// community server is server
// mongo shell is cmd based query system, to handle database

//mongosh
// Current Mongosh Log ID: 6521c555fcf3214bd6befd5d
// Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.1
// Using MongoDB:          4.0.28
// Using Mongosh:          2.0.1

// For mongosh info see: https://docs.mongodb.com/mongodb-shell/


// To help improve our products, anonymous usage data is collected and sent to MongoDB periodically (https://www.mongodb.com/legal/privacy-policy).
// You can opt-out by running the disableTelemetry() command.

// ------
//    The server generated these startup warnings when booting
//    2023-10-08T02:00:51.476+0530:
//    2023-10-08T02:00:51.476+0530: ** WARNING: Access control is not enabled for the database.
//    2023-10-08T02:00:51.476+0530: **          Read and write access to data and configuration is unrestricted.
//    2023-10-08T02:00:51.477+0530:
// ------

//show db


//search mongodb atlas
//username mmudgal33
//password zemc4b72LiXyq9mX
//zemc4b72LiXyq9mX
//mongosh "mongodb+srv://cluster0.z3cmkr1.mongodb.net/" --apiVersion 1 --username mmudgal33
//Triveni_kaul

// PS D:\finacusjobhackathon\Almabetter\AlmabetterWeb3\GitHub\FoodOrderingApp> mongosh "mongodb+srv://cluster0.z3cmkr1.mongodb.net/" --apiVersion 1 --username mmudgal33
// Enter password: ************
// Current Mongosh Log ID: 6521cd44aad7fd173651b6a2
// Connecting to:          mongodb+srv://<credentials>@cluster0.z3cmkr1.mongodb.net/?appName=mongosh+2.0.1
// Using MongoDB:          6.0.10 (API Version 1)
// Using Mongosh:          2.0.1

// For mongosh info see: https://docs.mongodb.com/mongodb-shell/

// Atlas atlas-st11eg-shard-0 [primary] test>

// mongoimport D:\finacusjobhackathon\Almabetter\ThapaTechnicalMongoDBImportFiles/products.json -d shop -c products
// PS D:\finacusjobhackathon\Almabetter\AlmabetterWeb3\GitHub\FoodOrderingApp> mongoimport D:\finacusjobhackathon\Almabetter\ThapaTechnicalMongoDBImportFiles/products.json --d shop --c products
// 2023-10-08T04:09:26.237+0530    error parsing command line options: unknown option "d"
// 2023-10-08T04:09:26.238+0530    try 'mongoimport --help' for more information
// PS D:\finacusjobhackathon\Almabetter\AlmabetterWeb3\GitHub\FoodOrderingApp> mongoimport D:\finacusjobhackathon\Almabetter\ThapaTechnicalMongoDBImportFiles/products.json -d shop -c products
// 2023-10-08T04:10:14.255+0530    connected to: localhost
// 2023-10-08T04:10:15.302+0530    [##......................] shop.products        268KB/2.63MB (9.9%)
// 2023-10-08T04:10:16.826+0530    [########################] shop.products        2.63MB/2.63MB (100.0%)
// 2023-10-08T04:10:16.827+0530    imported 10355 documents

//https://www.youtube.com/watch?v=fkGafwD-b1s

// mongoimport D:\finacusjobhackathon\Almabetter\ThapaTechnicalMongoDBImportFiles/products.json -d shop -c products
// mongoimport D:\finacusjobhackathon\Almabetter\ThapaTechnicalMongoDBImportFiles/sales.json --db=shop --collection=sales --jsonArray
// mongoimport D:\finacusjobhackathon\Almabetter\ThapaTechnicalMongoDBImportFiles/categories.json --db=shop --collection=categories
// mongoimport D:\finacusjobhackathon\Almabetter\ThapaTechnicalMongoDBImportFiles/col.json --db=shop --collection=col
// mongoimport D:\finacusjobhackathon\Almabetter\ThapaTechnicalMongoDBImportFiles/comments.json --db=shop --collection=comments
// mongoimport D:\finacusjobhackathon\Almabetter\ThapaTechnicalMongoDBImportFiles/companies.json --db=shop --collection=companies
// mongoimport D:\finacusjobhackathon\Almabetter\ThapaTechnicalMongoDBImportFiles/companies.json --db=shop --collection=companies
// mongoimport D:\finacusjobhackathon\Almabetter\ThapaTechnicalMongoDBImportFiles/salestest.json --db=shop --collection=salestest

// work on both local server
// mongoexport --db=shop --collection=sales --jsonArray --out=D:\finacusjobhackathon\Almabetter\ThapaTechnicalMongoDBImportFiles/sales_exported.json
// work on atlas
// PS D:\finacusjobhackathon\Almabetter\AlmabetterWeb3\GitHub\FoodOrderingApp> mongoimport --uri mongodb+srv://mmudgal33:Triveni_kaul@cluster0.z3cmkr1.mongodb.net/shop --collection products --type json --file D:\finacusjobhackathon\Almabetter\ThapaTechnicalMongoDBImportFiles/products.json
// mongoimport --uri mongodb+srv://mmudgal33:Triveni_kaul@cluster0.z3cmkr1.mongodb.net/shop --collection categories --type json --file D:\finacusjobhackathon\Almabetter\ThapaTechnicalMongoDBImportFiles/categories.json

// mongoimport --uri mongodb+srv://mmudgal33:<PASSWORD>@cluster0.z3cmkr1.mongodb.net/<DATABASE> --collection <COLLECTION> --type <FILETYPE> --file <FILENAME>
// mongoexport --uri mongodb+srv://mmudgal33:<PASSWORD>@cluster0.z3cmkr1.mongodb.net/<DATABASE> --collection <COLLECTION> --type <FILETYPE> --out <FILENAME>

Atlas atlas-st11eg-shard-0 [primary] test> use shop
// mongoimport --uri mongodb+srv://mmudgal33:Triveni_kaul@cluster0.z3cmkr1.mongodb.net/shop --collection products --type json --file D:\finacusjobhackathon\Almabetter\ThapaTechnicalMongoDBImportFiles/products.json

// mongoimport --uri mongodb+srv://mmudgal33:Triveni_kaul@cluster0.z3cmkr1.mongodb.net/shop --collection categories --type json --file D:\finacusjobhackathon\Almabetter\ThapaTechnicalMongoDBImportFiles/categories.json
// mongoimport --uri mongodb+srv://mmudgal33:Triveni_kaul@cluster0.z3cmkr1.mongodb.net/shop --collection sales --type json --file D:\finacusjobhackathon\Almabetter\ThapaTechnicalMongoDBImportFiles/sales.json  --jsonArray

mongoimport --uri mongodb+srv://mmudgal33:TriveniKaul@cluster0.nqivq1i.mongodb.net/foodOrderingApp?retryWrites=true&w=majority --collection sales --type json --file D:\finacusjobhackathon\Almabetter\ThapaTechnicalMongoDBImportFiles/sales.json  --jsonArray
mongoimport --uri mongodb+srv://mmudgal33:TriveniKaul@cluster0.nqivq1i.mongodb.net/foodOrderingApp --collection sales --type json --file D:\finacusjobhackathon\Almabetter\ThapaTechnicalMongoDBImportFiles/sales.json  --jsonArray


// not running mongoexport --uri mongodb+srv://mmudgal33:Triveni_kaul@cluster0.z3cmkr1.mongodb.net/shop --collection products --type json --out D:\finacusjobhackathon\Almabetter\ThapaTechnicalMongoDBImportFiles/products_exported.json

// running but not on atlas mongoexport --db=shop --collection=products --out=D:\finacusjobhackathon\Almabetter\ThapaTechnicalMongoDBImportFiles/products_exported.json
// running mongoexport --db=shop --collection=products --out=products_exported.json

// Atlas atlas-st11eg-shard-0 [primary] test>
// (To exit, press Ctrl+C again or Ctrl+D or type .exit)
// Atlas atlas-st11eg-shard-0 [primary] test>
// PS D:\finacusjobhackathon\Almabetter\AlmabetterWeb3\GitHub\FoodOrderingApp> mongoimport --uri mongodb+srv://mmudgal33:Triveni_kaul@cluster0.z3cmkr1.mongodb.net/shop --collection products --type json --file D:\finacusjobhackathon\Almabetter\ThapaTechnicalMongoDBImportFiles/products.json
// 2023-10-08T05:10:39.736+0530    connected to: atlas-st11eg-shard-0/ac-wjxvgyl-shard-00-02.z3cmkr1.mongodb.net:27017,ac-wjxvgyl-shard-00-00.z3cmkr1.mongodb.net:27017,ac-wjxvgyl-shard-00-01.z3cmkr1.mongodb.net:27017
// 2023-10-08T05:10:40.557+0530    error inserting documents: Unsupported OP_QUERY command: insert. The client driver may require an upgrade.
// For more details see https://dochub.mongodb.org/core/legacy-opcode-removal
// 2023-10-08T05:10:40.728+0530    error inserting documents: Unsupported OP_QUERY command: insert. The client driver may require an upgrade.
// For more details see https://dochub.mongodb.org/core/legacy-opcode-removal
// 2023-10-08T05:10:40.875+0530    error inserting documents: Unsupported OP_QUERY command: insert. The client driver may require an upgrade.
// For more details see https://dochub.mongodb.org/core/legacy-opcode-removal
// 2023-10-08T05:10:41.063+0530    error inserting documents: Unsupported OP_QUERY command: insert. The client driver may require an upgrade.
// For more details see https://dochub.mongodb.org/core/legacy-opcode-removal
// 2023-10-08T05:10:41.173+0530    error inserting documents: Unsupported OP_QUERY command: insert. The client driver may require an upgrade.
// For more details see https://dochub.mongodb.org/core/legacy-opcode-removal
// 2023-10-08T05:10:41.279+0530    error inserting documents: Unsupported OP_QUERY command: insert. The client driver may require an upgrade.
// For more details see https://dochub.mongodb.org/core/legacy-opcode-removal
// 2023-10-08T05:10:41.395+0530    error inserting documents: Unsupported OP_QUERY command: insert. The client driver may require an upgrade.
// For more details see https://dochub.mongodb.org/core/legacy-opcode-removal
// 2023-10-08T05:10:41.485+0530    error inserting documents: Unsupported OP_QUERY command: insert. The client driver may require an upgrade.
// For more details see https://dochub.mongodb.org/core/legacy-opcode-removal
// 2023-10-08T05:10:41.570+0530    error inserting documents: Unsupported OP_QUERY command: insert. The client driver may require an upgrade.
// For more details see https://dochub.mongodb.org/core/legacy-opcode-removal
// 2023-10-08T05:10:41.648+0530    error inserting documents: Unsupported OP_QUERY command: insert. The client driver may require an upgrade.
// For more details see https://dochub.mongodb.org/core/legacy-opcode-removal
// 2023-10-08T05:10:41.696+0530    num failures: 355
// 2023-10-08T05:10:41.696+0530    error inserting documents: Unsupported OP_QUERY command: insert. The client driver may require an upgrade.
// For more details see https://dochub.mongodb.org/core/legacy-opcode-removal
// 2023-10-08T05:10:41.699+0530    imported 10000 documents




Atlas atlas-st11eg-shard-0 [primary] test> use shop
