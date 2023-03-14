# 202015303-Practica3-JS
202015303-Practica3-JS - Javier del Aguila

Se ha añadido una nueva pagina web cuya finalidad es que el usuario seleccione la ciudad mas cercana a él para que busque el tiempo que hace y pueda saber el tiempo en los próximos 7 días y además pueda ver las caracteristicas del cielo nocturno en el mismo plazo mediante una imagen.

Esta nueva pagina comienza con pocos elementos, los cuales serán rellenados a medida que se ejecuten los eventos y carge el js de la pagina.
Se inicia un select sin opciones, el cual será completado utilizando JS.
Utilizando document.getElementById encontramos el <select> que se desea rellenar.
Realizamos un bucle creando los elementos de tipo "option", añadiendoles value e innerHTML, con las ciudades deseadas.

Cuando el usuario lo desee, podrá comenzar la busqueda. Es en este momento cuando el boton "buscar", mediante un evento, inicia la función de buscar().
Esta funcion es async, ya que tenemos una llamada fetch la cual es de tipo "await", ya que las llamadas a una base de datos no son instantaneas.
Esta api requiere como atributo de entrada la longitud y latitud de la zona geográfica de la cual se desea conocer el tiempo. Para ello, utilizando document leemos el valor que esta actualmente seleccionado en el <select> de las opciones y a traves de este, buscamos en nuestra base de datos local su longitud y latitud para pasarselo como atributo a la funcion fetch.
Esta funcion usará el metodo GET, y con la informacion obtenida generaremos una tabla utilizando unicamente JS para mostrar el dia y hora que se esta mostrando, el tiempo que habrá, la temperatura y la humedad media.
Para realizar esta tabla, se rellenará un div situado justo inferior a los botones de busqueda, y de enseñar el dia siguiente o el dia anterior. Utilizando metodos de document.createElement, getElementById, y modificando sus valores y realizando appendChild para realizar las uniones de elementos se consigue la tabla deseada.
  
Los botones para enseñar el dia siguiente o el dia anterior tambien contienen disparadores de eventos que ejecutan diferentes funciones, las cuales modifican el dia deseado a visualizar y reejecutan la funcion de busqueda para obtener la nueva representacion de la tabla html.
  
Finalmente se añade la imagen del cielo durante los días deseados en la localidad buscada, añadiendo la imagen inferiormente a la tabla con un mensaje titulo h4 para indicar qué es lo que la imagen representa.
  
  
Esta nueva pagina utiilza la misma estructura de HTML con un encabezado y pie de pagina para redirigirse a las diferentes paginas web y a otros enlaces, a su vez que mantiene la misma hoja de estilos para obtener mayor uniformidad entre las paginas web.
  
  Javier Del Aguila





# Comentarios sobre la parte de HTML y CSS realizados para la P2:


Se ha creado una pagina web con tematica de curriculum.
La pagina esta dividida en 3 elementos html, el menu principal (index.html), el apartado de experiencia laboral (experience.html) y finalmente un formulario de contacto (FormularioSignUp.html).

Todas las paginas contienenen un icono que es visible en el head de la pagina, junto con una palabra clave para identificar donde se encuentra.
Todas las paginas incluyen una foto horizontal para introducir la pagina, un menu por donde puedan navegar a las diferentes secciones (nav con display tipo flex)  y al final de la pagina un footer para acceder a diferentes redes donde encontrar el perfil de la persona.

Se ha cambiado la fuente y colores de algunas cabeceras, incluido margenes en las paginas y puesto como color por defecto un blanco "snow".

Pagina Principal:
La página principal está orientada para que el user pueda poner informacion sobre si mismo, ya sean aficiones, descripcion, puntos fuertes y fkacos, habilidades profesionales... y que esta descripcion este acompañada de una foro del candidato a su derecha.
Para conseguir esto se ha dividido el espacio en 2 inline-block y definido diferentes porcentajes de espacio cada uno para que ambos se muestren en pantalla en la misma linea horizontal.

Un encabezado h3 muestra el siguente apartado, los idiomas, donde un parrafo le sigue para explicar que será a traves de una tabla donde se concentre esta infomracion.
La tabla muestra 3 columnas y 5 filas con los idiomas del usuario e informacion adicional. Para afianzar el conocimiento de CSS se ha pintado la fila cabecera de un color, y las filas pares e impares de otro cada una.

Experiencia:
En esta pagina se ha impplementado Bootstrap para realizar un carrusel de imagenes donde se pueda ver una imagen relacionada con experiencia laboral del usuario, y un pie de foto donde se ha utiilzado una cabecera y parrafos para añadir informacion. Este carrusel es dinamico, se mueve a peticion del usuario utilizando las flechas a los lados de la imagen y tambien con las pestañas inferiores.
Ademas de esto, se ha incluido informacion de cada trabajo utilizando una cabecera principal para denotar la empresa, un subtitulo (otra cabecera) para el puesto ocupado, otra cabecera inferior para mostrar el tiempo de trabajo en esta empresa y finalmente parrafos para explicar el trabajo realizado.


Formulario:
Se ha elegido una imagen de alta resolucion para que sea el fondo de esta pagina para que sea diferente a las demas.
Para atraer la atencion del usuario al formulario, se ha continuado realizando un div al que se le ha puesto un color azul con opacidad intermedia para que sea diferente del fondo pero sin ser opaco y eclipse la imagen del fondo.
Se ha introducido el formulario con una cabecera y un parrafo.
El formulario ha sido estructurando utiizando un grid layout de 2columnas x 4filas. 
Para identificar cada caja de texto se ha creado un label que ha sido puesto en la primera columna y en la 2º columna se encuentra el cuadro de texto a ser rellenado.
Todos los cuadros utilizan "placeholders" para que el usuario vea que tiene que escribir dentro y tienen el atributo "required", por lo que es necesario rellenarlos todos para continuar.
Se incluye un select para que el usuario seleccione la opcion que le aplica de las dadas.
Se incluye un link a los terminos de privacidad para asegurarnos que el usuario ha leido y esta de acuerdo con darnos su informacion, y se exige que marque la casilla si esta de acuerdo.

Hay 2 botones al final del formulario, submit, el cual ejecuta la instruccion del formulario (post) y se ilumina de color verde al pasar el cursor por encima; y Erase all, que se ilumina de color rojo al pasar el cursor por encima y borra todos los campos escritos.

Adicionalmente se ha creado un mensaje de alerta para indicar que se necesita rellenar todos los campos. Este mensaje se puede cerrar pulsando la "X" a la derecha, la cual se ilumina de color negro al pasar el cursor por encima.

Para facilitarle la vuelta al menu principal al usuario, se ha añadido una opcion al final del formulario para volver al inicio.
