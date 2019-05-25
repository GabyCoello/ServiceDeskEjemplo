# ServiceDeskEjemplo

El proyecto fue desarrollado con:

-Java 11
-Srping - Boot 2.0.3
-PostgreSQL 11.3
-Apache Maven 3.3.3


## Para ejecutarlo

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Importar el proyecto en el IDE de su elección, y ejecutar con Spring boot.

Se debe configurar la conexión de base de datos en:

 - resources/application.properties
 
spring.datasource.url=jdbc:postgresql://localhost:5432/postgres
spring.datasource.username=***
spring.datasource.password=***
spring.jpa.generate-ddl=true

## Arquitectua

Las dos aplicaciones diferentes interactúan a través del servicio HTTP.

# Arquitectura Aplicación Angular

- View
- Controlador
- Servicio

# Arquitectura Aplicación Java

- SpringBoot
- RestAPI

## Base de Datos

Tabla T_INCIDENTE

-CREATE TABLE public.t_incidencia (
	nombreempleado varchar(250) NOT NULL,
	descripcion varchar(250) NOT NULL,
	fechaincidente timestamp NOT NULL,
	fechaoperacion timestamp NULL,
	prioridad varchar NOT NULL,
	tecnico varchar(255) NULL,
	idincidencia int2 NOT NULL,
	aprobado bool NULL,
	CONSTRAINT t_incidencia_pk PRIMARY KEY (idincidencia)
);

