# 🍽️ Restaurant Finder (Yelp Clone)

A full-stack "PERN (PostgreSQL, Express, React, Node.js)" restaurant finder web application that allows users to browse and review restaurants.

## 🚀 Tech Stack

- **Frontend**: React
- **Backend**: Node.js + Express
- **Database**: PostgreSQL

## 📂 Project Structure

```
/client   --> Frontend (React)
/server   --> Backend (Express & PostgreSQL)
```

## 🛠️ Setup Instructions

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/Sourabhjaiswal12016/PERN-YELP_CLONE.git
cd restaurant-finder
```

### **2️⃣ Install Dependencies**

#### **Frontend**

```sh
cd client
npm install
```

#### **Backend**

```sh
cd ../server
npm install
```

### **3️⃣ Start the Application**

#### **Start Frontend**

```sh
cd client
npm start
```

#### **Start Backend**

```sh
cd server
npm start
```

## 🗄️ Database Setup

- **Database**: PostgreSQL
- **Database Name**: `yelp`
- **Tables**:
  - `restaurants`
  - `reviews`

## 📌 **API Endpoints**

### **🔹 Restaurants**

| Method     | Endpoint                  | Description                                          |
| ---------- | ------------------------- | ---------------------------------------------------- |
| **GET**    | `/api/v1/restaurants`     | Fetch all restaurants with ratings                   |
| **GET**    | `/api/v1/restaurants/:id` | Fetch a single restaurant by `id` along with reviews |
| **POST**   | `/api/v1/restaurants`     | Create a new restaurant                              |
| **PUT**    | `/api/v1/restaurants/:id` | Update restaurant details by `id`                    |
| **DELETE** | `/api/v1/restaurants/:id` | Delete a restaurant and its reviews by `id`          |

### **🔹 Reviews**

| Method   | Endpoint                            | Description                   |
| -------- | ----------------------------------- | ----------------------------- |
| **POST** | `/api/v1/restaurants/:id/addReview` | Add a review for a restaurant |

```

## 🎯 Features
✅ Browse restaurants
✅ View restaurant details & reviews
✅ Add a review
```
