<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

# Project Name
Cafe Managment System - System zarządzania kawiarnią.
> Live demo [_here_](https://www.example.com). <!-- If you have the project hosted somewhere, include the link here. -->

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-and-packages-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)
<!-- * [License](#license) -->


## General Information
- Cafe Management System is based on a concept to maintain orders and management of a particular items. This project is developed Java Script using NestJS framework, Type Script and MySQL database used. The role of the User is to maintain information including operations like modifying, deleting, updating the items records and customer order records in the system.


## Technologies and packages used
- Nestjs
- TypeScript
- MySQL
- TypeORM
- Axios


## Features
List the ready features here:
- Register User
- Login User
- Logout User
- Get Users
- Refresh Token JWT
- Create Category
- Update Category
- Get Categories
- Create Product
- Update Product
- Remove Product
- Generate Report
- Get Report PDF
- Get Bills
- Remove Bill
- Get Dashboard Details

## Screenshots
...
<!-- If you have screenshots you'd like to share, include them here. -->


## Setup
Dependencies : ![package.json](./package.json)
Environment: ![.env-example](./.env-example)



## Usage
Endpoints:

Auth:
- http://localhost:3000/auth/register
- http://localhost:3000/auth/login
- http://localhost:3000/auth/logout
- http://localhost:3000/auth/refresh

User:
- http://localhost:3000/user/getUsers

Category:
- http://localhost:3000/category/add
- http://localhost:3000/category/get
- http://localhost:3000/category/update

Product:
- http://localhost:3000/product/add
- http://localhost:3000/product/update
- http://localhost:3000/product/get
- http://localhost:3000/product/delete

Bill:
- http://localhost:3000/bill/generateReport
- http://localhost:3000/bill/getPdf
- http://localhost:3000/bill/getBills
- http://localhost:3000/bill/delete/:id

Dashboard:
- http://localhost:3000/dashboard/details


## Project Status
Project is: _in progress_ 


## Room for Improvement
Room for improvement:
- Fix error handling

To do:
- Adding a payment method


## Acknowledgements
- Many thanks to...


## Contact
Created by [@IrePro78](gos3r78@gmail.com) - feel free to contact me!
