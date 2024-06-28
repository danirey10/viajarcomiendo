# Proxecto fin de ciclo

- [Proxecto fin de ciclo](#proxecto-fin-de-ciclo)
  - [Taboleiro do proyecto](#taboleiro-do-proyecto)
  - [Descrición](#descrición)
  - [Instalación / Posta en marcha](#instalación--posta-en-marcha)
  - [Uso](#uso)
  - [Sobre o autor](#sobre-o-autor)
  - [Licenza](#licenza)
  - [Índice](#índice)
  - [Guía de contribución](#guía-de-contribución)
  - [Links](#links)


## Taboleiro do proyecto

ViajarComiendo -> Completado (100%)

## Descrición

ViajarComiendo é o meu proxecto final de ciclo de DAW. Neste proxecto integranse dúas APIS para traballar conxuntamente, por un lado Spoonacular e por outro Google Translate.
Está feito en NodeJS e Angular v17. Con css propio.

Por outro lado conta con unha base de datos en MongoDB e un backend que o xestiona con NestJS sobre NodeJS.

## Instalación / Posta en marcha

Este repositorio conta con todo o necesario para a posta en marcha en local.

O primeiro que temos que facer é extraer de este repositorio a parte de backend para traballar con máis soltura, poñémolo aparte e abrimos a carpeta con outro Visual se vai encargar de que o backend funcione perfectamente, non temos que cerrar este Visual, van traballar os dous en paralelo, esa carpeta conta co seu propio arquivo README para seguir os pasos que ten no seu interior.

Unha vez que teñamos o backend funcionando imos coa parte de FRONT, que é este repositorio.

Nesta carpeta, na consola de comandos facemos o seguinte:

 1. Primeiro instalamos as dependencias necesarias do proxecto:
 ```npm i```
 2. Logo para que se mostre en localhost poñemos o seguinte comando para lanzar o programa.
 ```ng serve```

 **Nota:** Si o anterior falla porque o npm i non instalou a versión de Angular que necesitamos procedemos a instalala dende a mesma consola de comandos co seguinte código:
 ```npm i @angular/cli@17.3.0```
Está é a versión de Angular que indica o package.json (17.3.0)


## Uso

Busca receta por nome, ou por tipo de cociña / lugar. Para iso temos un mapa interactivo que tan só se mostrará na versión pc, no caso de que detecte que é pantalla táctil ou que a resolución é moi pequena para mostralo saldrá un selector de rexión/pais.

Tamén podemos crearnos unha conta e loguearnos, neste caso podremos marcar como favoritas as recetas e logo consultalas cando queiramos dentro do noso panel de usuario.


## Sobre o autor

Son Daniel Rey, teño unha dilatada experiencia como deseñador web, sempre na parte front, ampliei os meus coñecementos co ciclo de DAW. Este proxecto é unha proba de valor e coñecemento sobre Angular, o proxecto intenta explotar o mercado das recetas según o destino, en vez de por ingredientes que é como se busca habitualmente.

## Licenza
GNU Free Documentation License Version 1.3

        Copyright (C)  2024  Viajar Comiendo.
        Permission is granted to copy, distribute and/or modify this document
        under the terms of the GNU Free Documentation License, Version 1.3
        or any later version published by the Free Software Foundation;
        with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.
        A copy of the license is included in the section entitled "GNU
        Free Documentation License".


## Índice

1. [Anteproyecto](doc/templates/1_Anteproxecto.md)
2. [Análise](doc/templates/2_Analise.md)
3. [Deseño](doc/templates/3_Deseño.md)
4. [Codificación e probas](doc/templates/4_Codificacion_e_probas.md)
5. [Implantación](doc/templates/5_Implantación.md)
6. [Referencias](doc/templates/6_Referencias.md)
7. [Incidencias](doc/templates/7_Incidencias.md)

## Guía de contribución

Esta é a guía de contribución do proxecto ViajarComiendo, necesítanse as seguintes funcionalidades (van ordenadas de maior a menor importancia):
- Que se soliciten contrasinais máis complicados.
- Creación dos tests unitarios.
- Mensaxería entre usuarios.
- Comentarios das recetas.
- Valoracións das recetas.

Todas as novas funcionalidades deberán respetar os tests unitarios, para asegurar a integridade do proxecto.

## Links

Creador do proxecto:
https://github.com/danirey10