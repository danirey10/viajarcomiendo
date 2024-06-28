# INCIDENCIAS E TAREFAS
- [INCIDENCIAS E TAREFAS](#incidencias-e-tarefas)
  - [1- Incidencias](#1--incidencias)
  - [2- Tarefas](#2--tarefas)

## 1- Incidencias

Según fun facendo o proxecto atopeime con varias incidencias a resaltar:

#### Consumo da API Spoonacular
A primeira e máis importante, e que a API de Spoonacular ten un límite (a versión gratuita que utilizo eu), podo utilizar 150 puntos por día, e cada chamada consume 1 ou 3 puntos (dependendo de cal se faga), para alguén que está diseñando a web é moi pouco.

Polo tanto para resolvelo fixen dous mocks, dentro dos assets da aplicación pódese atopar a carpeta "mocks", con 2 json, o primeiro ten o resultado dunha búsqueda, e o segundo dunha receta, para facer probas devolvo ese resultado en vez de estar consumindo chamadas da API continuamente.

#### Respostas da API Spoonacular
Resulta que algunhas receitas non ten os pasos para facer a receta, esto foi un inconvinte moi grande, porque réstalle usabilidade a aplicación, no seu lugar, detecto cando non trae instruccións e sae unha imaxe dun cociñeiro e un texto de "Nuestros cocineros están elaborando la receta", para que non quede tan vacío.

#### Paxinación
A paxinación funciona con un sistema moi complexo, a maioría de APIS dan unha resposta con algo como "pages", onde ti podes indicar a qué páxina ir, Spoonacular no, utiliza "offset", que ven sendo as receitas que vai deixando atrás. Se na búsqueda por offset=14 deixará fora as 14 primeiras receitas, entón tiven que buscar unha maneira para facer unha paxinación acorde pensando en eso.

#### Traduccións
A idea que tiña era utilizar unha extensión de Microsoft para facer as traduccións, pero resulta que esa extensión o que facía era elexir entre diferentes JSON coa información que tes para a traducción, entón non me servía, necesitaba algo que funcionase en tempo real, a solución foi Google Translate.

#### Tempo de resposta da base de datos
A pesar de que a base de datos MongoDB funciona moi ben e con unha resposta moi rápida, esta non era a suficiente para cargarme as receitas favoritas do usuario e a vez pintalas no listado. ¿Cal foi a solución? Unha vez que te logueas gárdase na sesión un array coas receitas favoritas, se ti añades receitas ou as eliminas o cambio faise simultáneamente na base de datos e na túa sesión local, son datos duplicados pero foi a solución que encontrei, unha vez que te deslogueas esa información bórrase.

## 2- Tarefas

#### Mapa interactivo do inicio
Déuseme por facer un mapa interactivo como extra da aplicación, creo que cando accedes dende o pc fai que sexa algo diferente. Este mapa foi bastante costoso, baixeime o mapa da Wikipedia (https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg)
Logo tratei o mapa cambiándolle a cor, e detectei por riba de que pais pasaba para indicarlle unha ou outra función. Foi unha tarefa complexa.

#### Creación dun compoñente hamburguer para apertura de menú móvil
Quería crear un menú móvil para mostrar un pequeno menú en versión móvil, atopei este:
https://dev.to/sanketbodake/responsive-navbar-using-html-and-css-4fgp
Eso si, modifiquei os elementos e funcións para adaptalos as miñas necesidades, o final tan só collín o css.