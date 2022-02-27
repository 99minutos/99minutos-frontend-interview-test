# SpaceX's Website done for 99Minutos

La web es una single page donde podemos encontrar las últimas 10 misiones realizadas por SpaceX, traídas directamente desde su API.
El proyecto se realizó con React y GraphQL de forma que tengamos la opción de scrollear entre las 10 misiones. Seleccionando cada una de ellas podremos visualizar información acerca de estas tales como una imagen, nombre de la misión, detalles sobre la misma y un botón que nos linkea a un video explicativo sobre las mismas. En el caso de que no haya imagen o información sobre la misión seleccionada, la página nos informará sobre esto.
Cada botón cambiará de color al ser seleccionado, quedando marcado el último que clickeamos, a modo de guiarnos sobre que misión estamos visualizando. Además, cada botón contiene información tal como el nombre de la misión, zona geográfica desde donde se ubicó el punto de partida e información temporal de la misma (fecha y hora).
En caso de que la página se demore en cargar, la página informará que la misma está cargándose. Lo mismo ocurre en caso de que haya algún error de carga, a lo que debemos refrescar la misma para poder entrar.
Podemos encontrar un ejemplo de recorrido de página en el archivo README.md e información sobre como visualizar la misma.
