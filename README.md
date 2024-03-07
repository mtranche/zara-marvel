
# ZARA WEB CHALLENGE
Esta es un aplicación para obtener información sobre diferentes personajes de Marvel usando la api que ellos ofrecen.

Es una aplicación react creada con **VITE**.

La carpeta raíz del proyecto contiene todos los archivos necesarios para poner en marcha la aplicación en modo **desarrollo**, y, además una capeta dist donde están los archivos preparados para poner en un servidr de **producción** con los css y js minificados, uglificados y en un solo archivo cada uno.

## Cómo levantar la aplicación en modo desarrollo
1. Primero hay que comprobar que tenemos Node.js y npm instalado, para ello, abrimos una consola y ponemos:
``node -v`` ,  ``npm -v`` 
y nos dirá la versión de node y npm que tenemos, en caso de que no responda nada debemos ir a:
([https://nodejs.org/en/download/](https://nodejs.org/en/download/) y seguir los pasos.
2. Abre una consola en la carpeta raíz del proyecto ***/zara-marvel*** y ponemos el siguiente comando para instalar todas las dependencias del archivo *package.json*
 ``npm install``
3. Lanzar la aplicación: en la misma consola donde hemos hecho npm install, ahora ponemos el comando:
   ``npm run dev``
4. Como dice la consola, abrimos [http://localhost:8080/](http://localhost:8080/)

## Estructura del proyecto
El proyecto tiene la estructura:

![estructura del carpetas](https://github.com/mtranche/zara-marvel/blob/feature/marvel/estructura1.png)

![estructura del carpetas](https://github.com/mtranche/zara-marvel/blob/feature/marvel/estructura.png)

 - En la carpeta raíz están todos los archivos de configuración, las variables de entornos, los packages de dependencias y cosas generícas de la aplicación
 - En la carpeta dist está la build para servir en producción
 - En la carpeta src está todo el código del proyecto: Los archivos principales: App y Main con sus respectivos estilos, y luego una serie de carpetas, en assets están imágenes y estilo, dentro de styles está el archivo principal, marvels.css que importa el resto de scss de cada componente.
   
 - - En components los componentes que se usan en la aplicación, cada uno con un archivo de estilos _*.scss  asociado en la carpeta assets/styles.

 -- En context está el contexto.
  
  --En hook los hooks usados.
  
  --En routes el enrutador para navegar entre vistas.
  
  y en views las distintas vistas que usan los componentes de components.

        

