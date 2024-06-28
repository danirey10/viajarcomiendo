# FASE DE DESEÑO

- [FASE DE DESEÑO](#fase-de-deseño)
  - [1- Diagrama da arquitectura](#1--diagrama-da-arquitectura)
  - [2- Casos de uso](#2--casos-de-uso)
  - [3- Diagrama de Base de Datos](#3--diagrama-de-base-de-datos)
  - [4- Deseño de interface de usuarios](#4--deseño-de-interface-de-usuarios)


## 1- Diagrama de arquitectura

![Diagrama de arquitectura](/doc/img/diagrama-arquitectura.jpg)
[Versión online](https://www.figma.com/file/LeXE9pCvQ3tGyCYJpuDGZr/Diagrama-arquitectura?type=whiteboard&node-id=0%3A1&t=CEQG0l3KstC6QC4I-1)

## 2- Casos de uso

![Casos de uso](/doc/img/casos-de-uso.jpg)
[Versión online](https://www.figma.com/file/DDqd7Q2KaLYX5l6dwCWqpG/Casos-de-uso?type=whiteboard&node-id=0%3A1&t=F4rvlp5kcZ8M6jIF-1)

## 3- Diagrama de Base de Datos

Para estos diagramas en vez de utilizar o **Figma** utilicei os programas **DIA** e **VisualParadigm**, cada un para un diagrama respectivamente.

#### Modelo de Entidad / Relación

![Modelo entidad-relación](/doc/img/viajar-comiendo-er.jpg)

#### Modelo relacional

![Modelo relacional](/doc/img/viajarcomiendo-relacional.jpg)

## 4- Deseño de interface de usuarios

Para este apartado vou facer uso do **Photoshop**, é un programa co que estou familiarizado e podo facer mockups sen problemas.

#### Páxina inicial, vista móvil

Empezamos ca vista móvil, a pantalla inicial será adaptativa o alto que o dispositivo pode mostrar, de tal forma que tan só se verá o input do buscador, máis abaixo estará unha flecha que se pode pulsar para baixar a seguinte visualización, ou tamén se pode baixar desprazándose pola pantalla coma sempre.

![Vista móvil index](/doc/img/mv-index.jpg)

Esta vista é o abrir o menú, aparece o usuario e un pequeno menú para acceder o panel (tamén funciona facendo premendo na imaxe), ou volver o inicio. Tamén dispoñemos de un botón para ver as recetas favoritas do usuario.

![Vista móvil index - sidebar](/doc/img/mv-index-sidebar.jpg)

#### Páxina inicial vista pc

Esta é a vista do pc, unha banda co input do buscador e abaixo unhas recetas aleatorias, xusto debaixo do buscador poño diferentes enlaces para buscar por tipo de cociña, está por ver si en algún lado poño máis enlaces, ou bandeiras... Tamén podemos observar que prescindimos do panel lateral, sae o usuario arriba a dereita e premendo nel accedemos o panel de usuario.

![Vista pc index - sidebar](/doc/img/pc-index.jpg)


#### Receta, vista móvil

Esta é a vista da receta, dende o móvil, a captura do sidebar xa non a poño xa que é a mesma que a anterior. Nesta vista a cabecera faise máis estreita, omítese o buscador e centrámonos na receta en si, sae o tempo de cociñado, o título, o número de comensais, os ingredientes e por último os pasos para facer a receta, ordenados.

![Vista móvil receta](/doc/img/mv-receta.jpg)

#### Receta, vista pc

Na vista do pc podemos encontrar o mesmo que no móvil pero adaptado o espazo dispoñible.

![Vista pc receta](/doc/img/pc-receta.jpg)