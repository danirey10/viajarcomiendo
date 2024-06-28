# Anteproxecto fin de ciclo

- [Anteproxecto fin de ciclo](#anteproxecto-fin-de-ciclo)
  - [1- Descrición do proxecto](#1--descrición-do-proxecto)
  - [2- Empresa](#2--empresa)
    - [2.1- Idea de negocio](#21--idea-de-negocio)
    - [2.2- Xustificación da idea](#22--xustificación-da-idea)
    - [2.3- Segmento de clientes](#23--segmento-de-clientes)
    - [2.4- Competencia](#24--competencia)
    - [2.5- Proposta de valor](#25--proposta-de-valor)
    - [2.6- Forma xurídica](#26--forma-xurídica)
    - [2.7- Investimentos](#27--investimentos)
      - [2.7.1- Custos](#271--custos)
      - [2.7.2- Ingresos](#272--ingresos)
    - [2.8- Viabilidade](#28--viabilidade)
      - [2.8.1- Viabilidade técnica](#281--viabilidade-técnica)
      - [2.8.2 - Viabilidade económica](#282--viabilidade-económica)
      - [2.8.3- Conclusión](#283--conclusión)
  - [3- Requirimentos técnicos](#3--requirimentos-técnicos)
  - [4- Planificación](#4--planificación)


## 1- Descrición do proxecto
**"ViajarComiendo"** será unha web dirixida a todas aquelas persoas que teñan dúbidas sobre que comer ou cear, a web daralles a posibilidade de buscar receitas segundo o tipo de cociña (Española, Italiana, francesa...).

#### ¿En que consiste o noso proxecto? ¿Cal é o propósito principal da aplicación a desenvolver? ¿Cales son os obxectivos?
Consiste nunha web onde poder buscar receitas por tipo de cociña, o obxectivo principal e facilitar a calquera persoa un acceso rápido a calquera tipo de cociña.

#### ¿A quen vai destinada a aplicación?
A calquera persoa que estea interesada pola cociña, ou calquera persoa que busque recordar unha receta típica de algún país o que viaxou anteriormente.

#### ¿Cal é a necesidade ou necesidades que se pretenden cubrir ou satisfacer?
A pesar de que hai diferentes webs de blogs que falan de receitas, non atopei ningunha que funcione realmente ben para filtrar segundo o tipo de cociña.

#### ¿Existen na actualidade aplicacións que tenten dar resposta a esa(s) necesidade(s)? ¿En que medida o conseguen?
Existen diferentes foros, webs e incluso aplicacións relacionadas con receitas, dan consellos sobre qué comer, diferentes receitas... pero non hai nada que sea exclusivamente dedicado a tipo de cociña.

#### ¿O desenvolvemento da aplicación abre unha oportunidade de negocio? ¿É posible comercializala? Como?
A posibilidade de negocio é moi ampla, a principal diría que é a publicidade, pero pensando no futuro como ampliación do proxecto podería facerse unha subscrición premium con características máis potentes da aplicación: receitas exclusivas, planificación de comidas, navegar sen publicidade...

Dependendo do número de visitas podería considerarse a opción de afiliación con diferentes tendas en liña... Se as visitas son altas tamén se considerarían colaboracións ou patrocinios.

#### ¿Que tecnoloxías son as máis axeitadas para a realización do proxecto?
Barallei diferentes tecnoloxías, finalmente decántome por Angular para o frontend con Node.js, utilizarei como xestor de base de datos MongoDB e para obter receitas e filtrar por tipo de cociña a API de Spoonacular.

## 2- Empresa

### 2.1- Idea de negocio

"ViajarComiendo" é unha web onde poder acceder a miles de receitas organizadas pola súa procedencia (asiática, mediterránea...) ademais de implementar un buscador de receitas por nome.

### 2.2- Xustificación da idea

A idea do proxecto xurdiu sen máis, nun principio a idea era un buscador de receitas por ingredientes, pero logo ocurriuseme o de filtrar por tipo de cociña e pareceume máis interesante.

O obxectivo principal é ofrecer unha plataforma que permita a calquera persoa amante da cociña acceder a unha ampla variedade de receitas diferenciadas polo tipo de cociña segundo destino.

O problema que vai resolver é facilitar a calquera persoa atopar diferentes receitas de forma sinxela.

 É de axuda un **análise DAFO**, onde poderemos observar as debilidades, ameazas, fortalezas e oportunidades da aplicación.

![Análise DAFO](/doc/img/analise-dafo.jpg)

##### Valor engadido
Unha interface sinxela e intuitiva que permite filtrar receitas por tipo de cociña de forma eficiente, algo que actualmente non se encontra no mercado.
**Utilidade**: Ofrecer receitas personalizadas segundo os gustos e necesidades do usuario, coas opcións de planificar comidas e acceder a receitas exclusivas mediante unha subscrición premium.


### 2.3- Segmento de clientes

#### Segmento principal:
 - Idade entre 20 e 50 anos.
 - Amantes das receitas caseiras e dos viaxes.

#### Cuantificación de mercado.
 - Segundo a web similarweb.com a páxina de receitas máis visitada é recetasgratis.net con 22.54M de visitas mensuais (90% móbil), con isto podemos saber que temos un amplo alcance de mercado para a nosa aplicación de receitas pero optimizada para a busca por tipo de cociña / destino.

 ![Similar Web](/doc/img/similarweb.jpg)


### 2.4- Competencia

Aquí facemos un análise da competencia que pode ter o noso proxecto, cabe decir que para diferenciarnos o noso proxecto incidirá na busca de recetas por destino, algo que a competencia non ten:

##### Buscando "recetas"

**bonviveur.es/recetas/**
Esta web é a que ten a primeira posición en Google.
O entrar vemos que tan só é unha paxinación de receitas, sen orde, asique polo que podo analizar fomenta o SEO orientado o produto, para buscar "receta de... xxx", o peso da web é enorme, xa que ten unha gran cantidade de receitas.

**recetasgratis.net**
O mesmo que na anterior, ten moitísimas receitas, pero o entrar vemos que ten un filtrado de receitas por produtos, podes buscar receitas de carne, de arroces, de mariscos... visualmente é mais atractiva que a anterior.

##### Buscando "recetas por paises"
**https://www.recetas.com/recetas_internacionales/**
**https://www.comedera.com/recetas-por-paises/**

Cabe dicir que son a posición 2 e 3 do resultado de busca, o primer enlace daba error. Ambas son webs de receta, con un apartado de receitas por países para buscar desa maneira, non son webs feitas exclusivamente para iso, senón que o teñen como un subapartado de eso para xerar máis tráfico. Ademais temos outros competidores indirectos, como diferentes blogs de cociña ou Youtube. Igual que aplicacións móbiles de receitas e redes sociais como Pinterest ou Instagram.

#### ¿Porqué a necesidade dunha web como "ViajarComiendo"?
"ViajarComiendo" é necesaria polo simple feito de que non hai ningunha web especializada na busca de receitas segundo tipo de cociña por destino. Gracias a "ViajarComiendo" podes replicar esa receta que tanto che gustou do teu último viaxe a... por exemplo Tailandia.

**Artigo de Business Reseach**
Neste artigo podemos comprobar o crecemento exponencial que o sector de xestión de recetas está recibindo nestes últimos anos, ademáis tamén podemos comprobar como se espera un crecemento exponencial ata o 2032 nun sector que parece que non ten límite a hora de crecer.
https://www.businessresearchinsights.com/es/market-reports/recipe-management-software-market-113388

Acompañamos esta información con unha imaxe do artigo:
![Business Research](/doc/img/business-research.jpg)


### 2.5- Proposta de valor

#### Diferenciación entre os competidores:

**1. Características únicas**
 - Interactividade: Plataforma con funcións interactivas como a capacidade de agregar receitas o teu espazo persoal.
 - Contido extenso: A integración da API Spoonacular ofrece acceso a unhas 360.000 receitas (segundo información da API).

**2. Melloras frente a competidores**
 - Experiencia de usuario: Interface intuitiva e amigable.
 - Actualizacións constantes: A Api de Spoonacular actualizarase constantemente.

**3. Valor aportado o mercado**
 - Accesibilidade: Acceso a unha ampla variedade de receitas dende calquera dispositivo.
 - Comunidade: Fomento de unha comunidade activa onde os usuarios poden compartir e comentar receitas (proposta futura).

**4. Razón para elexir este produto/servizo**
 - Busca por tipo / zona: A capacidade de buscar receitas de comidas que desfrutaches nas túas viaxes pasadas.
 - Innovación: A busca e o amplo catálogo de receitas ofrece unha grata experiencia culinaria.


### 2.6- Forma xurídica

Para un proxecto de este calibre podemos decidirnos entre dúas opcións:

**Autónomo:**
Vantaxes: Menores custos iniciais, simplicidade administrativa.
Desvantaxes: Responsabilidade ilimitada, maiores impostos sobre ingresos altos.

**Sociedad Limitada (SL):**
Vantaxes: Responsabilidade limitada ao capital investido, beneficios fiscais sobre ingresos altos.
Desvantaxes: Maior complexidade administrativa, custos de constitución.

#### Requirimentos legais
Rexistro da empresa: Inscrición no Rexistro Mercantil se se opta por unha SL.
Licencias: Obtención de licencias necesarias para operar como negocio dixital.
Protección de datos: Cumprimento coa Lei Orgánica de Protección de Datos (LOPD) e o Regulamento Xeral de Protección de Datos (RGPD).
Contratos: Establecemento de contratos claros con empregados e colaboradores.

##### Decisión final
Debido a que a sociedade pódese formar máis adiante vaise sair como autónomo, xa que isto ten menores custos iniciais e conta con simplicidade administrativa.

**Pasos a seguir**
Tendo en conta a decisión final de saír como autónomo, indico os requisitos para iso:

1. Ser maior de idade, ou no seu defecto, menor de idade emancipado que cumpla el art. 323 do Código Civil.
2. Rexistrarse en Facenda tendo unha actividade económica co modelo 036 ou 037. [Link os modelos](https://sede.agenciatributaria.gob.es/Sede/procedimientoini/G322.shtml)
3. Darse de alta no RETA (Réxime Especial de Traballadores Autónomos).
4. Ter unha actividade económica por conta propia con fines lucrativos.
5. Desenvolver dita actividade sen estar baixo a dirección de terceiros.
6. A actividade debe ser a fonte principal ou secundaria de ingresos, habitual e con emisión de facturas.

**Fiscalidade**
O traballo como autónomo encontrase regulado principalmente no Estatuto do traballo autónomo aprobado pola Ley 20/2007 do 11 de Xullo.
[Se puede consultar aquí](https://www.boe.es/buscar/doc.php?id=BOE-A-2007-13409)


### 2.7- Investimentos

##### Dispoñibilidade de recursos humanos e medios de produción

- **Recursos humanos:** Débese avaliar si se podería reunir desenvolvedores de software (frontend e backend), deseñadores UX/UI, especialistas en marketing dixital e posiblemente persoal técnico de apoio. Esto pode implicar a contratación de empregados, a formación de persoal ou a contratación de consultores externos.

- **Medios de produción:** No contexto dunha aplicación web os medios de produción inclúen equipos de traballo (ordenadores, portátiles, dispositivos móbiles), ferramentas de desenvolvemento de software (contorna de desenvolvemento, ferramentas de deseño gráfico..), e acceso a servizos na nube para o aloxamento da aplicación, almacenamento de datos, etc.

#### 2.7.1- Custos

Todo proxecto empresarial terá uns custos os que teremos que enfrontarnos.
Acompaño todo isto con unha táboa (anual):

| Tipo de inversión   |  Unidades requiridas        |  Prezo por unidade        |  Total        |
|---------------------|-----------------------------|----------------------------|---------------|
| Rexistro de autónomos | 1 |	100€ |	100€ |
| Hosting e dominio | 1 |	40€ |	40€ |
| Licencias de software |	Varias |	300€ |	300€ |
| Equipamento |	- |	1200€ |	1200€ |
| Total | | | 8010€|

Os custos de persoal e outros gastos operativos non están incluídos no plan de investimentos, e serán presentados a continuación como presupostos fixos e variables.

##### Custos fixos

**Inversión inicial**

1. Rexistro de autónomos.
- Custo de xestoría para trámites administrativos e contables: 100€.

2. Hosting e dominio.
- Swhosting: 33,75€ o ano.
- Arsys: 36€ o ano.
- Dinahosting: 33€ o ano.
- *Total estimado: 40€ o ano*

3. Compra do equipamento necesario:
- Todo o equipamento como se indicou fai pouco: 1500€

(Ata aquí o da táboa)

4. Deseño de App e Marca.
- Custo de deseñador gráfico especializado en UX: 1500€/mes

5. Desenvolvemento da aplicación.
- Custo de dous desenvolvedores de software (no que está o meu soldo): 3000€/mes

6. Especialista en Marketing Dixital.
- Custo do especialista en marketing dixital: 1500€/mes

##### Custos variables

**Gastos Periódicos**

1. Cota de autónomos.
- 80€ o mes (ampliable a un segundo ano se non se alcanza o SMI)

3. Conexión a internet.
- Estímanse uns 30€.

2. Renovación de Hosting e Dominio anual.
- Estímase unha renovación de 40€.

**Total de custos**
- Inversión inicial aproximada: 72000€ (anual)
- Gastos periódicos aproximados: 110€/mes + 40€ anuais

Esta información sacouse de este artigo:
[_¿Cuanto cuesta desarrollar una app en 2023?_](https://gooapps.es/2023/01/11/cuanto-cuesta-desarrollar-una-app-en-2023/#:~:text=Crear%20una%20App%20a%20medida,recursos%20y%20diferentes%20perfiles%20profesionales.)


#### 2.7.2- Ingresos

Para o proxecto proponse Freemium gratis con funcionalidades extras de pago como modelo de negocio, as necesidades extras engadiríanse despois de afianzar un número elevado de usuarios.

#### Xustificación do modelo Freemium:
- **Acceso gratuíto a receitas básicas:** A aplicación estará gratuíta para todos os usuarios, o que permite un amplo acceso o contido básico.

- **Funcionalidades extras de pago:** Ofrecerase a subscrición premium opcional que desbloqueará funcionalidades adicionais e premium, como acceso a receitas exclusivas, planificación de comidas personalizada, navegar sen publicidade...
- **Equilibrio entre accesibilidade e monetización:** Este modelo permite que a maioría dos usuarios accedan o contido básico de maneira gratuita, o que axuda a maximizar a audiencia e adquisición de usuarios. O mesmo tempo o ingreso por publicidade será maior, a oferta de funcionalidades extras de pago proporciona unha oportunidade única de monetización e xeración de ingresos recorrentes.
- **Valor engadido para usuarios premium:** As funcionalidades premium ofrecen un valor engadido e significativo para usuarios dispostos a pagar, o que aumenta a retención e a fidelidade dos clientes, ademais de xerar ingresos adicionais para o proxecto.

#### Ideas para comercialización:
- **Promoción en redes sociais:** Utilizar plataformas como Facebook, Instagram e TikTok para promover a aplicación e chegar o público obxectivo.
- **Colaboración con influencers:** A día de hoxe os influencers teñen a capacidade de chegar a un amplo sector da poboación, ademais é moi sinxelo saber cal é o seu público obxectivo, para este caso teríamos que chegar a unha colaboración pagada con estes, un bo listado de influencers para o proxecto podemos atopalo [aquí](https://metricool.com/es/influencers-gastronomicos/).
Para que sexa apto para un proxecto como o noso primeiro colaboraremos con influencers con menor visibilidade a cambio de promoción mutua. A medida que crezan os ingresos publicitarios e as subscricións, poderemos destinar parte de ese orzamento a colaboracións con influencers máis recoñecidos.
- **Estratexias de SEO e Marketing de contidos:** Crear contido relevante e útil sobre receitas de diferentes países para mellorar o posicionamento nos motores de busca e atraer tráfico orgánico a aplicación, quizais un apartado blog dentro da plataforma.
- **Ofertas especiais e descontos:** Unha vez se teña un bo número de usuarios e activemos a opción dos usuarios premium ofrecer descontos e períodos de proba gratuítos para incentivar a conversión de usuarios gratuítos a usuarios premium.

### Axudas e financiamento
O financiamento é un aspecto clave a hora de desenvolver calquera proxecto. O diñeiro pode actuar como limitante a hora de tomar decisións e o tamaño da aplicación. Sen embargo, existen diferentes formas de obter financiamento de maneira pública ou privada:

1. ***Axuda TICCámaras:*** Depende da cámara de comercio, polo que pode variar entre comunidades autónomas. Os beneficiarios de esta axuda son autónomos ou PYMES que necesiten aplicar solucións para mellorar a competitividade do seu negocio a través de novas tecnoloxías. A cámara de comercio fai diagnóstico das necesidades da túa empresa, financiando ata un máximo de 85% dos custos e ata un máximo de 7000€.
2. ***Kit dixital:*** Si a nosa figura é un autónomo entramos dentro do grupo III da subvención, tendo unha asignación de 2000€ sempre e cando queden fondos xa que se solicitan baixo réxime de concorrencia non competitiva.
3. ***Galicia Exporta Dixital:*** Esta subvención sería interesante nunha etapa máis avanzada da vida da empresa, xa que un requisito da solicitude é ser unha PYME. O obxectivo de esta axuda e axudar a empresas galegas nos seus procesos de internacionalización dixital. É bastante interesante no caso de que a plataforma teña un gran éxito e queiramos expandirnos a Centroamérica e América do Sur (por compatibilidades do linguaxe).
4. ***Créditos:*** Esta é unha opción clásica pero suxeita a endeudamento, agora mesmo estamos nunha mala época onde os intereses non acompañan, están subindo os tipos de interese e como consecuencia, o diñeiro a devolver é moito máis que o prestado.
5. ***Uso da plataforma:*** Como se comentou anteriormente está a opción de aplicar unha opción premium con características máis potentes da aplicación. Para favorecer a contratación pódese ofrecer un periodo de proba gratuito.

### 2.8- Viabilidade

#### 2.8.1- Viabilidade técnica

Para avaliar a viabilidade técnica do proxecto "ViajarComiendo" consideramos os seguintes puntos clave:

##### Recursos humanos e medios de produción
- Desenvolvedores de software: Necesítanse desenvolvedores frontend e backend competentes en Angular e Node respectivamente. A contratación e capacitación do persoal pode facerse con unha inversión razoable, considerando o presuposto asignado.

- Deseñadores UX/UI: É crucial contar con un deseñador especializado en experiencia de usuario para crear unha interface amigable e intuitiva. Xa se asignou un presuposto para este recurso.

- Especialistas en marketing dixital: Para a promoción e o posicionamento web, requerirase un especialista en marketing dixital. Este recurso tamén está contemplado no presuposto.

- Equipos e ferramentas: Disponse de un presuposto necesario para a adquisición de ordenadores, software de desenvolvemento e outros equipos esenciais como monitores e periféricos.

##### Tecnoloxía e ferramentas
- Frontend e Backend: Angular e NodeJS son tecnoloxías moi utilizadas que garantizan un desenvolvemento áxil e un alto rendemento. Estas tecnoloxías tamén permiten escalabilidade a medida que crece a base de datos dos usuarios.

- Base de datos: MongoDB é unha opción robusta e sinxela para xestionar a base de datos da aplicación.

- API de Spoonacular: A integración coa API de Spoonacular permitirá acceder a unha gran cantidade de receitas. A posible barreira do idioma (inglés), solucionarase mediante a integración da API de Google Translate para ofrecer traducións en tempo real.

##### Impedimentos técnicos
- Integración de API: A correcta integración da API de Spoonacular é fundamental. A avaliación preliminar suxire que non haberá obstáculos significativos. Sen embargo deben realizarse probas exhaustivas.

- Escalabilidade: A infraestrutura na nube garantirá a escalabilidade necesaria para manexar o crecemento de tráfico de usuarios. Elixiranse servizos na nube que ofrezan escalabilidade automática.

- Seguridade: Necesitamos cifrar as contrasinais dos usuarios, iso será crucial para protexer a súa información.

En resumen, dende o punto de vista técnico, o proxecto "ViajarComiendo" é viable. Disponse dos recursos humanos e materiais necesarios, as tecnoloxías elixidas aseguran un desenvolvemento eficiente e escalable.


#### 2.8.2- Viabilidade económica

Nun proxecto escalable como este é difícil calcular se os beneficios dos proxectos son superiores aos custos, dependemos do éxito do produto, como a aplicación é escalable a inversión inicial será moi baixa, si a aplicación ten éxito escalará segundo a demanda dos usuarios.

De todas maneiras as perdas poden cubrirse vía financiamento por parte de administración públicas se as subvencións son concedidas, para isto invirtirase a cuantía da subvención de maneira inicial, e si a aplicación ten éxito os seguintes gastos serán sufragados polos propios beneficios da aplicación.


###### Política de prezos

**Subscripción premium**
Irá variando según demanda/ofertas, aprox. 2€/mes

**Publicidade**
Google Ads ou venta directa do oco a patrocinador principal (prezo según ingreso GoogleAds.)


###### Previsión de ventas

Para avaliar a viabilidade e a escalabilidade do proxecto, detallamos a previsión de vendas para os próximos tres anos:

**Ano 1**
Usuarios activos mensuais: 10.000
Visitas mensuais: 100.000
Conversión a usuarios premium: 5%
Ingresos por publicidade: 2.000€/mes
Ingresos por subscricións: 1.000€/mes
Ingresos totais anuais: 36.000€

**Ano 2**
Usuarios activos mensuais: 30.000
Visitas mensuais: 300.000
Conversión a usuarios premium: 7%
Ingresos por publicidade: 6.000€/mes
Ingresos por subscricións: 4.200€/mes
Ingresos totais anuais: 122.400€

**Ano 3**
Usuarios activos mensuais: 60.000
Visitas mensuais: 600.000
Conversión a usuarios premium: 10%
Ingresos por publicidade: 12.000€/mes
Ingresos por subscricións: 12.000€/mes
Ingresos totais anuais: 288.000€
Conclusión da previsión de ventas:

O crecemento estimado de usuarios e visitas indica unha escalabilidade significativa.
As previsións de ingresos sostibles aseguran a viabilidade financeira do proxecto.


#### 2.8.3- Conclusión

###### Viabilidade do proxecto
O proxecto "ViajarComiendo" é viable. Identificáronse e asignáronse os recursos humanos e tecnolóxicos necesarios. As tecnoloxías seleccionadas son adecuadas e permiten escalabilidade e seguridade.

###### Beneficios vs Costos
Os beneficios potenciais do proxecto superan de xeito significativo os costos. A proposta de valor única de filtrar receitas por tipo de cociña ten potencial de atraer a un amplo público. Con un modelo Freemium, poden xerarse ingresos tanto por publicidade como por subscricións premium, incrementando así a rendibilidade.

**Cifras que avalan o mercado potencial**
- O mercado de aplicacións de receitas culinarias creceu un 20% nos últimos tres anos, con máis de 200 millóns de descargas anuais.
- Páxinas similares reciben millóns de visitas mensuais, o que demostra un interese continuado neste tipo de servizo.

Dependendo do número de visitas, considerarase a opción de afiliación con diferentes tendas en liña, e se as visitas son altas, tamén colaboracións con patrocinios.

###### Cobertura de perdas
En caso de perdas iniciais, estas poderán ser mitigadas mediante subvencións e axudas públicas como TICCámaras e Kit Dixital, así como opcións de financiamento privado. A estrutura de custos variables e escalables tamén axudará a xestionar as finanzas do proxecto de maneira eficiente.

En conclusión: O proxecto "ViajarComiendo" non solo é viable dende o punto de vista técnico, se non que tamén ten un alto potencial de éxito económico. Con unha correcta implementación e estratexia de marketing os beneficios superarán en gran cantidade os costos, e calquera déficit inicial poderá ser cuberto mediante as opcións de financiamento dispoñibles.

## 3- Requirimentos técnicos
Para o desenvolvemento do proxecto necesitaranse unha serie de recursos materiais e tecnoloxías tanto para o frontend como para o backend.:

#### Infraestrutura
- **Dominio web:** Necesitarase rexistrar o dominio da aplicación.
- **Servidor web:** Requírese de un servidor web para aloxar a aplicación.
- **Servidor de base de datos:** Necesítase un servidor de base de datos para almacenar a información dos usuarios e outros datos relevantes da aplicación.

#### Backend
- **Framework de desenvolvemento:** Utilizarase Node JS.
- **Base de datos:** Utilizarase para a xestión da base de datos MongoDB.
- **Integración de API:** Integración de API Spoonacular, ademais da integración da API de Google Translate.

#### Frontend
- **Linguaxe de marcado e estilos:** HTML e CSS.
- **Framework de desenvolvemento:** Angular.
- **Interface de usuario:** Valorarase a implementación de Tailwind, neste último punto teño as miñas dúbidas e decidirase máis adiante.


## 4- Planificación

Planificación do proxecto:
- **Estudo preliminar:** 1-7 Abril
- **Análise:** 8-20 Abril
- **Deseño:** 21 Abril - 4 Maio
- **Codificación e probas:** 5 Maio - 10 Xuño

> A entrega é o **17 de Xuño**, deixase unha semana de marxe para calquera erro ou incidencia que puidese ocorrer.

![Calendario Gantt](/doc/img/calendario-gantt.jpg)
[Versión online](https://www.figma.com/file/QzU4jUXbLGy3pNY6kDcKhY/Untitled?type=whiteboard&node-id=0%3A1&t=qSjBjRJR3Pj28moI-1)
