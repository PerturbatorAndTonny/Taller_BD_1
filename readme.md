# Taller 1 y Actividad Bases de Datos Corte 1

> [!IMPORTANT]
> Este proyecto necesita las siguientes instalaciones
> - [Node Js](https://nodejs.org/es/download) versiones 22 o superior
>

## Instalación
En una carpeta de tu equipo, haz un clon del proyecto y dependiendo del gestor de paquetes ejecuta el comando ``` install ```
| Gestor | Comando |
| --- | --- |
| npm | npm install |
| pnpm | pnpm install |
| yarn | yarn install |

> [!IMPORTANT]
> Este proyecto necesita las siguientes instalaciones
> Asegurate de tener instalado todas las dependencias del proyecto presente en el archivo **``` Package.json ```**

Abre el editor de codigo y agrega el archivo **.env** con las  siguientes variables
``` env
 DB_FILE_NAME="file:local.db"
 PORT=3080
```
Despues de definir las variables de entorno, ejecuta el comando
| Gestor | Comando |
| ------------- | ------------- |
| npm  | npx drizzle-kit generate y npx drizzle-kit migrate |
| pnpm  | pnpm drizzle-kit generate y pnpm drizzle-kit migrate |
| yarn  | yarn drizzle-kit generate y yarn drizzle-kit migrate |

Ahora debemos ejecutar el comando ``` run load``` usando el gestor de paquetes que tengas
> [!CAUTION]
> Nunca ejecutes este comando sin antes haber usado *drizzle-kit migrate*, ya que sin DB migrada *run load* entrara en conflicto.

Por ultimo, ejecuta en la terminal *run start* con el gestor de paquetes que uses para usar nuestro sistema :D
