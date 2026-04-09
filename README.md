# PH Tour Management System Backend

## System Workflow

![PH Tour Management System
Workflow](./PH%20Tour%20Management%20System%20Workflow.jpg)

This diagram illustrates the complete workflow of the PH Tour Management
System including authentication, tour browsing, booking creation, and
payment processing.

A scalable **Tour Booking Management System API** built with **Node.js,
Express, MongoDB, and Redis**. The system allows users to explore tours,
book tours, and complete payments through **SSLCommerz** while
administrators manage tours, users, bookings, and guides.

------------------------------------------------------------------------

# Project Overview

The **PH Tour Management System** provides a complete backend solution
for tourism platforms including:

-   User authentication and profile management
-   Tour listing and filtering
-   Tour booking system
-   Payment processing
-   OTP verification
-   Admin management panel
-   Role-based access control (RBAC)

The backend exposes RESTful APIs that can be consumed by **React,
Next.js, or mobile applications**.

------------------------------------------------------------------------

# Tech Stack

## Backend

-   Node.js
-   Express.js
-   MongoDB (Mongoose)
-   Redis

## Authentication

-   JWT Authentication
-   OTP Verification

## Payment Gateway

-   SSLCommerz

## Security

-   RBAC (Role Based Access Control)
-   Password hashing with bcrypt
-   Rate limiting
-   Global error handling

------------------------------------------------------------------------

# Features

## User Features

-   Register account
-   OTP verification
-   Login / Logout
-   Update profile
-   Browse tours
-   Filter tours
-   View tour details
-   Book tours
-   Make online payments
-   View booking history

## Admin Features

-   Manage users
-   Approve guides
-   Create / update / delete tours
-   Manage bookings
-   Manage divisions
-   View statistics

------------------------------------------------------------------------

# Core Modules

## Authentication Module

Handles: - Login - Logout - Refresh token - Forgot password - Reset
password - OTP verification

## User Module

-   User registration
-   Profile update
-   Get current user

## Tour Module

-   Tour creation
-   Tour types
-   Tour filtering
-   Tour details

## Booking Module

-   Create booking
-   View bookings
-   Update booking status

## Payment Module

-   Initialize payment
-   Verify payment
-   Transaction management

------------------------------------------------------------------------

# Database Schema

## User

-   name
-   email (unique)
-   password
-   role
-   phone
-   picture
-   address
-   isDeleted
-   isActive
-   isVerified
-   authProviders\[\]

## Tour

-   slug
-   title
-   description
-   images\[\]
-   location
-   costFrom
-   startDate
-   endDate
-   tourType
-   included\[\]
-   excluded\[\]
-   amenities\[\]
-   tourPlan\[\]

## TourType

-   name

## Booking

-   user
-   tour
-   guestCount
-   phone
-   address
-   status
-   payment

## Payment

-   booking
-   transactionId
-   status
-   amount
-   paymentGatewayData
-   invoiceUrl

------------------------------------------------------------------------

# API Base URL

http://localhost:5000/api/v1

------------------------------------------------------------------------

# Authentication Endpoints

### Login

POST /auth/login

Example Body: { "email": "user@gmail.com", "password": "12345" }

### Logout

POST /auth/logout

### Refresh Token

POST /auth/refresh-token

### Forgot Password

POST /auth/forgot-password

### Reset Password

POST /auth/reset-password

------------------------------------------------------------------------

# OTP Endpoints

### Send OTP

POST /otp/send

### Verify OTP

POST /otp/verify

------------------------------------------------------------------------

# User Endpoints

### Register User

POST /user/register

### Get Current User

GET /user/me

### Update User

PATCH /user/:id

------------------------------------------------------------------------

# Tour Endpoints

POST /tour/create-tour-type GET /tour/tour-types POST /tour/create GET
/tour PATCH /tour/:id DELETE /tour/:id

------------------------------------------------------------------------

# Booking Endpoints

POST /booking GET /booking/my-bookings GET /booking/:bookingId PATCH
/booking/:bookingId/status

Example Body: { "tourId": "tour-id", "guestCount": 2, "phone":
"01611846448" }

------------------------------------------------------------------------

# Payment Endpoints

POST /payment/init-payment/:paymentId GET /payment/ipn GET
/payment/stats

------------------------------------------------------------------------

# Statistics Endpoints

GET /stats/booking\
GET /stats/payment\
GET /stats/user\
GET /stats/tour

------------------------------------------------------------------------

# Booking & Payment Flow

1.  User registers and verifies account via OTP
2.  User logs in
3.  User browses tours
4.  User creates booking
5.  Booking status becomes Pending
6.  Payment initialized via SSLCommerz
7.  Payment success updates booking status

------------------------------------------------------------------------

# Project Structure

src ┣ app.ts ┣ server.ts ┣ config ┣ modules ┃ ┣ auth ┃ ┣ user ┃ ┣ tour ┃
┣ booking ┃ ┣ payment ┃ ┣ division ┃ ┗ guide ┣ middlewares ┣ routes ┗
utils

------------------------------------------------------------------------

# Installation

git clone https://github.com/your-repo/ph-tour-management-system

npm install

npm run dev

------------------------------------------------------------------------

# Environment Variables

PORT=5000\
DATABASE_URL=your_mongodb_uri\
JWT_SECRET=your_jwt_secret\
REDIS_URL=your_redis_uri

SSL_STORE_ID=your_ssl_store_id\
SSL_STORE_PASS=your_ssl_store_pass\
SSL_PAYMENT_URL=https://sandbox.sslcommerz.com

------------------------------------------------------------------------

# Security Features

-   JWT authentication
-   Role based access control
-   Password hashing with bcrypt
-   OTP verification
-   Rate limiting
-   Centralized error handling

------------------------------------------------------------------------

# Future Improvements

-   Tour review system
-   Guide rating system
-   Real-time notifications
-   Analytics dashboard
-   Multi-language support

------------------------------------------------------------------------

# License

MIT License
