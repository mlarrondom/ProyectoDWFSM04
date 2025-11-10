# 🏨 PROYECTO 4: App de Booking – Sistema de Reservas

## **ÍNDICE**

- [1. Introducción](#1-introducción)  
- [2. Objetivos de Aprendizaje](#2-objetivos-de-aprendizaje)  
- [3. Arquitectura del Proyecto](#3-arquitectura-del-proyecto)  
- [4. Descripción de los Endpoints](#4-descripción-de-los-endpoints)  
- [5. Ejemplos de uso en Postman](#5-ejemplos-de-uso-en-postman)  
- [6. Documentación con Swagger](#6-documentación-con-swagger)  
- [7. Despliegue en Render](#7-despliegue-en-render)  
- [8. Requisitos Técnicos](#8-requisitos-técnicos)  
- [9. Dependencias](#9-dependencias)  
- [10. Criterios de Evaluación](#10-criterios-de-evaluación)  
- [11. Conclusiones y Aprendizajes](#11-conclusiones-y-aprendizajes)

---

## 1. **Introducción**

Este proyecto consiste en el desarrollo de una **API REST** que permite la gestión completa de **reservas hoteleras**.  
Fue desarrollado en **Node.js con Express.js**, aplicando los principios CRUD (Crear, Leer, Actualizar y Eliminar) y el patrón modular.

El objetivo principal fue comprender cómo crear y estructurar un servidor, trabajar con rutas y controladores separados, y gestionar información mediante peticiones HTTP.

Además, como mejora opcional, se incluyó:
- Documentación completa de los endpoints con **Swagger y OpenAPI**.  
- **Despliegue en Render.com**, logrando una API pública funcional.

---

## 2. **Objetivos de Aprendizaje**

- Implementar un servidor con **Express.js**.  
- Aplicar el patrón **modular**, separando controladores, rutas y servidor.  
- Crear endpoints RESTful con los métodos `POST`, `GET`, `PUT` y `DELETE`.  
- Utilizar **UUID** para generar IDs únicos.  
- Usar **variables de entorno** mediante `.env`.  
- Documentar la API con **Swagger (OpenAPI 3.0)**.  
- Configurar y desplegar la API en **Render.com**.  

---

## 3. **Arquitectura del Proyecto**

El proyecto está organizado en una estructura modular que facilita la lectura y el mantenimiento del código:

```
proyecto-booking/
├── controllers/
│   └── reservasController.js
├── routes/
│   └── reservas.js
├── server.js
├── swagger/
│   └── swagger.json
├── .env
├── .gitignore
├── .prettierrc
├── package.json
└── README.md
```

---

## 4. **Descripción de los Endpoints**

| Método | Endpoint | Descripción | Ejemplo de uso |
|--------|-----------|-------------|----------------|
| **POST** | `/api/reservas` | Crea una nueva reserva. | Crear reserva en el Hotel Paraíso. |
| **GET** | `/api/reservas` | Obtiene todas las reservas o filtra por parámetros. | Filtrar por hotel, tipo de habitación o estado de pago. |
| **GET** | `/api/reservas/:id` | Consulta una reserva específica por su ID. | Buscar reserva 12345. |
| **PUT** | `/api/reservas/:id` | Actualiza los datos de una reserva existente. | Cambiar habitación doble a suite familiar. |
| **DELETE** | `/api/reservas/:id` | Elimina una reserva por su ID. | Eliminar reserva 12345. |

---

## 5. **Ejemplos de uso en Postman**

### ➤ **POST** `/api/reservas`
**Body (JSON):**
```json
{
  "hotel": "Hotel Paraíso",
  "tipoHabitacion": "Doble",
  "fechaEntrada": "2023-05-15",
  "fechaSalida": "2023-05-20",
  "huespedes": 3,
  "nombreCliente": "Mauricio Larrondo",
  "email": "mauricio@example.com"
}
```

### ➤ **PUT** `/api/reservas/:id`
**Body (JSON):**
```json
{
  "tipoHabitacion": "Suite Familiar",
  "huespedes": 4,
  "pagado": true
}
```

---

## 6. **Documentación con Swagger**

La documentación completa de la API fue generada en formato **OpenAPI 3.0** utilizando **Swagger UI**.

Esto permite visualizar y probar todos los endpoints desde el navegador, con sus parámetros, ejemplos y respuestas.

### 📘 Acceso local:
```
http://localhost:3000/api-docs
```

### 📗 Estructura del archivo:
El archivo `swagger/swagger.json` contiene la especificación completa de la API, incluyendo:

- Descripción general del servicio.  
- Paths, métodos y parámetros.  
- Ejemplos de request y response.  
- Códigos de estado HTTP.

### 🧠 Nota:
Toda la documentación fue desarrollada con el apoyo de **ChatGPT**, utilizando prompts para generar la especificación OpenAPI de manera automatizada.

---

## 7. **Despliegue en Render**

La aplicación fue desplegada exitosamente en **Render.com**, una plataforma de hosting gratuita para Node.js.

### 🌍 URL pública:
```
https://api-booking-node.onrender.com
```

El despliegue fue configurado con las siguientes características:
- **Repositorio GitHub** conectado automáticamente a Render.  
- **Branch principal** (`main`) para actualizaciones automáticas.  
- Uso de **.env** para definir el puerto del servidor.  
- **Build Command:** `npm install`  
- **Start Command:** `npm start`  

Esta configuración también fue asistida por ChatGPT, utilizando prompts para preparar el archivo `package.json` y los scripts necesarios.

---

## 8. **Requisitos Técnicos**

- Desarrollado de forma **individual**.  
- Uso de **Node.js**, **Express**, **UUID**, **dotenv** y **nodemon**.  
- CRUD funcional y probado con **Postman**.  
- Documentación con **Swagger**.  
- Despliegue en **Render.com**.  
- Uso de `.env`, `.gitignore` y `.prettierrc`.

---

## 9. **Dependencias**

```bash
npm install express
npm install uuid
npm install dotenv
npm install swagger-ui-express
npm install nodemon --save-dev
```

**Archivo `.env`:**
```
PORT=3000
```

**Script en `package.json`:**
```json
"scripts": {
  "start": "nodemon server.js"
}
```

---

## 10. **Criterios de Evaluación**

| Área | % del Total |
|------|--------------|
| Implementación CRUD (POST, GET, PUT, DELETE) | 35% |
| Organización modular (controladores, rutas, servidor) | 20% |
| Uso de UUID, dotenv y nodemon | 10% |
| Documentación con Swagger (opcional) | 15% |
| Despliegue en Render (opcional) | 10% |
| Buenas prácticas y README documentado | 10% |

---

## 11. **Conclusiones y Aprendizajes**

Este proyecto permitió afianzar los conocimientos sobre el desarrollo de **APIs RESTful** con Node.js y Express.  
A través de su implementación, comprendí el flujo completo de un servidor, el manejo de rutas, controladores y módulos.

Además, pude aplicar buenas prácticas profesionales:
- Uso de **UUID** para IDs únicos.  
- Separación clara entre capas (rutas, controladores, servidor).  
- **Documentación con Swagger** para mejorar la usabilidad de la API.  
- **Despliegue en Render**, logrando una versión funcional en línea.  

Gracias al apoyo de **ChatGPT**, pude resolver dudas técnicas, generar la documentación OpenAPI y automatizar parte del proceso de despliegue.  
Con ello, el proyecto quedó **completo, funcional y listo para producción.**

