# API Gateway con Ocelot y Microservicios en .NET, Flask y Express

## Descripción

Este proyecto implementa un **API Gateway** utilizando **Ocelot** en **.NET 8** que enruta solicitudes a tres microservicios independientes:

1. **.NET 8 API**: Maneja operaciones relacionadas con productos.
2. **Flask API (Python)**: Gestiona órdenes.
3. **Express API (Node.js)**: Administra clientes.

El API Gateway centraliza el acceso, aplica políticas de seguridad como autenticación y limitación de velocidad (rate limiting), y facilita la comunicación entre los clientes y los microservicios.

## Tecnologías Utilizadas

- **.NET 8**: Para el API Gateway y uno de los microservicios.
- **Ocelot**: Librería de .NET para implementar el API Gateway.
- **Python (Flask)**: Para el microservicio de órdenes.
- **Node.js (Express)**: Para el microservicio de clientes.
- **Git**: Control de versiones.
- **Visual Studio Code / Visual Studio**: Editores de código recomendados.

## Requisitos Previos

- **.NET 8 SDK**: [Descargar aquí](https://dotnet.microsoft.com/download)
- **Python 3.8+**: [Descargar aquí](https://www.python.org/downloads/)
- **Node.js 14+**: [Descargar aquí](https://nodejs.org/en/download/)
- **Git**: [Descargar aquí](https://git-scm.com/downloads)

## Instalación

1. **Clonar el Repositorio**

   ```bash
   git clone https://github.com/tu_usuario/ProyectoApiGateway.git
   cd ProyectoApiGateway
   ```

2. **Configurar y Ejecutar el API Gateway (.NET 8)**

   ```
   cd ApiGateway
   dotnet restore
   dotnet run
   ```

   El API Gateway estará disponible en https://localhost:5000.

3. **Configurar y Ejecutar la .NET 8 API**

   ```
   cd ../NetApi
   dotnet restore
   dotnet run
   ```

   La API estará disponible en http://localhost:5001/product.

4. **Configurar y Ejecutar la Flask API (Python)**

   ```
   cd ../../FlaskApi
   python -m venv venv
   source venv/bin/activate  # En Windows: venv\Scripts\activate
   pip install -r requirements.txt
   python app.py
   ```

   La API estará disponible en http://localhost:5002/order.

5. **Configurar y Ejecutar la Express API (Node.js)**

   ```
   cd ../ExpressApi
   npm install
   node app.js
   ```

   La API estará disponible en http://localhost:5003/customer.

## Uso

Una vez que todos los servicios estén ejecutándose, puedes interactuar con ellos a través del API Gateway.

## Ejemplos de Solicitudes mediante API Gateway

**.NET API - Obtener Producto por ID**

```
curl -X GET "http://localhost:5000/net-api/product/1" -k
```

**Flask API - Crear Orden**

```
curl -X POST "https://localhost:5000/flask-api/order" -k
```

**Express API - Eliminar Cliente**

```
curl -X DELETE "https://localhost:5000/express-api/customer/1" -k
```

## Autenticación y Seguridad

El API Gateway agrega automáticamente el encabezado "X-API-KEY" con el valor "secret-key" a las solicitudes dirigidas a los microservicios backend. Las APIs backend están configuradas para validar este encabezado y rechazar solicitudes no autorizadas.

## Limitación de Velocidad (Rate Limiting)

El API Gateway está configurado para limitar las solicitudes a 1 solicitud cada 5 segundos por cliente. Si se excede este límite, se devolverá un error 429 Too Many Requests.
