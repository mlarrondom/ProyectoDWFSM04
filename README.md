# 🏨 PROYECTO 4: App de Booking – Sistema de Reservas

## **ÍNDICE**

- [1. Introducción](#1-introducción)
- [2. Detalle del desarrollo](#2-detalle-del-desarrollo)
- [3. Descripción de los Endpoints](#3-descripción-de-los-endpoints)
- [4. Ejemplos de uso en Postman](#4-ejemplos-de-uso-en-postman)
- [5. Documentación con Swagger](#5-documentación-con-swagger)
- [6. Despliegue en Render](#6-despliegue-en-render)



---

## 1. **Introducción**

Este proyecto fue desarrollado en el marco del **Bootcamp Desarrollo Web Full Stack**.\
Durante el **Módulo 4**, se realizó el desarrollo de una **API REST** que permite la gestión completa de **reservas hoteleras**.\
Esto fue ejecutado con **Node.js** y **Express.js**, con la finalidad de aplicar los principios **CRUD (Crear, Leer, Actualizar y Eliminar)**.

Además, como mejora opcional, se dejó la documentación completa de los endpoints utilizando **Swagger y OpenAPI**, y se realizó el despliegue en **Render.com** para que la API quedara pública y funcional.

---

## 2. **Detalle del desarrollo**

El desarrollo se organizó en tres archivos principales `.js`:

1. **server.js:**\
   Es el archivo principal del proyecto. Aquí se crea la aplicación de Express y se define la ruta principal del servidor.

2. **Archivo de rutas:**\
   En este archivo se abordan los distintos métodos HTTP: `GET`, `POST`, `PUT` y `DELETE`. Cada uno de ellos permite interactuar con las reservas a través de endpoints definidos.

3. **Archivo de controladores:**\
   Contiene todas las funciones que ejecutan la lógica del sistema. Entre ellas:

   - **Función crearReserva:**\
     Permite crear una nueva reserva solicitando al usuario información básica: nombre del hotel, fechas, tipo de habitación, número de adultos y niños.\
     Además, el sistema automáticamente agrega un **ID único** mediante `UUID` y un atributo **pagada**, cuyo valor por defecto es `false`.

   - **Función GET (leer reservas):**\
     Permite obtener todas las reservas registradas o aplicar distintos filtros, entre ellos:

     - Filtrar por tipo de habitación.
     - Filtrar por nombre del hotel.
     - Filtrar por rango de fechas.
     - Filtrar si la reserva está pagada o no.
     - Filtrar por número mínimo de huéspedes (considerando adultos y niños).

   - **Función GET por ID:**\
     Permite obtener la información completa de una reserva específica utilizando su ID.

   - **Función PUT (actualizar reserva):**\
     Permite actualizar los datos de una reserva existente. Se debe especificar el ID en la URL y enviar los nuevos datos en el cuerpo de la solicitud.

   - **Función DELETE (eliminar reserva):**\
     Permite eliminar una reserva específica del sistema, indicando su ID correspondiente.

---

## 3. **Descripción de los Endpoints**

| Método     | Endpoint            | Descripción                                         | Ejemplo de uso                                          |
| ---------- | ------------------- | --------------------------------------------------- | ------------------------------------------------------- |
| **POST**   | `/api/reservas`     | Crea una nueva reserva.                             | Crear reserva en el Hotel Paraíso.                      |
| **GET**    | `/api/reservas`     | Obtiene todas las reservas o filtra por parámetros. | Filtrar por hotel, tipo de habitación o estado de pago. |
| **GET**    | `/api/reservas/:id` | Consulta una reserva específica por su ID.          | Buscar reserva 12345.                                   |
| **PUT**    | `/api/reservas/:id` | Actualiza los datos de una reserva existente.       | Cambiar habitación doble a suite familiar.              |
| **DELETE** | `/api/reservas/:id` | Elimina una reserva por su ID.                      | Eliminar reserva 12345.                                 |

---

## 4. **Ejemplos de uso en Postman**

### ➤ **POST** `/api/reservas`

**Body (JSON):**

```json
{
  "nombreHotel": "Hotel Paraíso",
  "fecha": "2025-06-15",
  "tipoHabitacion": "Normal",
  "adultos": 2,
  "ninos": 10
}
```

### ➤ **PUT** `/api/reservas/:id`

**Body (JSON):**

```json
    {
        "nombreHotel": "Hotel Paraíso",
        "fecha": "2025-07-15T00:00:00.000Z",
        "tipoHabitacion": "Suite",
        "adultos": 2,
        "ninos": 5,
        "pagada": false
    }
```

---

## 5. **Documentación con Swagger**

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

## 6. **Despliegue en Render**

La aplicación fue desplegada exitosamente en **Render.com**, una plataforma de hosting gratuita para Node.js.

### 🌍 URL pública:

```
https://proyectodwfsm04.onrender.com/api-docs/#/
```

El despliegue fue configurado con las siguientes características:

- **Repositorio GitHub** conectado automáticamente a Render.
- **Branch principal** (`main`) para actualizaciones automáticas.
- Uso de **.env** para definir el puerto del servidor.
- **Build Command:** `npm install`
- **Start Command:** `npm start`

Esta configuración también fue asistida por ChatGPT, utilizando prompts para preparar el archivo `package.json` y los scripts necesarios.


---

## 7. **Comentarios adicionales**

✨ El proyecto fue desarrollado de manera **individual**, con el apoyo de **ChatGPT**, para resolver dudas, complementar conocimientos y agregar funcionalidades como el uso de **UUID**, la elaboración de la documentación con **Swagger** y el despliegue en **Render**.  
🧠 Todo el proceso de documentación y despliegue fue realizado completamente con ChatGPT, proporcionándole los prompts necesarios.  
📝 Finalmente, el desarrollo de este **README** también fue realizado con ChatGPT, utilizando un prompt elaborado íntegramente por el autor **Mauricio Larrondo**.

