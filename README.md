# Descripción

## Este es un proyecto basado en el framework NestJS que incluye varias configuraciones de herramientas y dependencias útiles para desarrollo, pruebas, y construcción de aplicaciones robustas en TypeScript. Está preparado para trabajar en entornos de desarrollo, prueba y producción, con soporte para integración continua y desarrollo colaborativo.

- **Node.js** versión 16 o superior
- **NestJS CLI** (instalación recomendada globalmente)
  ```bash
  npm install -g @nestjs/cli
  ```

---

# Instalación

Para comenzar con el proyecto, sigue estos pasos:

Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
```

```bash
npm install
```

Configura las variables de entorno:

Crea un archivo .env en la raíz del proyecto con las configuraciones necesarias.
Asegúrate de incluir datos como configuraciones de base de datos y otras variables que la app necesite. Se incluyo un archivo `env.example` para tener nocion de como se ven la variables de entorno del proyecto. 

---

# Scripts Disponibles

Este proyecto incluye varios scripts en el archivo package.json que facilitan el desarrollo y la administración del proyecto:

Construcción `npm run build`
Compila el proyecto usando `nest build`.

Formateo `npm run format`
Aplica formato a los archivos .ts dentro de las carpetas src y test usando Prettier.

Inicio en diferentes entornos

Producción:
`npm run start:prod`

Desarrollo (con autorecarga):
`npm run start:dev`

Depuración (debug):
`npm run start:debug`

Linting `npm run lint`

Ejecuta ESLint en el código para identificar y corregir problemas de estilo o errores comunes. Incluye la opción --fix para corregir automáticamente los errores donde sea posible.

---

# Dependencias Principales
NestJS: Framework para construir aplicaciones Node.js escalables y mantenibles.
TypeORM: ORM para TypeScript y JavaScript que facilita la interacción con bases de datos.
Joi: Librería para validación de datos.
Swagger: Generación de documentación automática para APIs.
Class-validator / Class-transformer: Herramientas para validación y transformación de datos.

# Dependencias de Desarrollo
TypeScript: Superconjunto de JavaScript que añade tipado estático.
Jest: Marco de pruebas para JavaScript.
ESLint y Prettier: Herramientas para mantener un estilo de código consistente y formateado.
Supertest: Permite pruebas HTTP de APIs.
NestJS CLI y Testing: Herramientas y librerías para generar código y realizar pruebas en proyectos de NestJS.
Configuración de Pruebas (Jest)
Este proyecto utiliza Jest como marco de pruebas. La configuración está en package.json bajo la clave jest:

Los archivos de prueba deben tener la extensión .spec.ts.
Las pruebas se ejecutan en un entorno node.
La cobertura se genera en el directorio coverage.
Licencia
Este proyecto no tiene una licencia específica (UNLICENSED).

Notas adicionales
Asegúrate de revisar y modificar los archivos de configuración según los requerimientos específicos de tu entorno. Usa los scripts mencionados para facilitar el flujo de desarrollo y asegúrate de mantener las dependencias actualizadas.

## Autor
 [@Cored](https://www.github.com/edsson12)
