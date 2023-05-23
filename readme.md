Deuda Tecnica -> Es la falta de calidad en el código, que genera una deuda que repercutirá en costos futuros

Estos costos usualmente son costos economicos y son productos de:

- Tiempo en realizar mantenimientos
- Tiempo en refactorizar código
- Tiempo en comprender el código
- Tiempo adicional en la transferencia del código

Tipos de deudas:

1. Imprudente -> No hay tiempo, solo copia y pega
2. Imprudente e inadvertida -> Creada por desarrolladores de perfil junior o false Senior...
3. Prudente -> Tenemos que entregar rápido, ya refactorizaremos, sabemos que la deuda existe, hay que pagarla lo antes posible
4. Prudente e inadvertida -> 'Ahora sabemos cómo lo deberíamos haber hecho'

Caer en la deuda tecnica es normal y a menudo es inevitable

Cómo pagamos una deuda técnica? -> REFACTORIZACIÓN, que es un proceso que tiene como objetivo mejorar el código sin alterar su comportamiento para que sea más entendible y tolerante a cambios

Usualmente para que una refactorizacion fuerte tenga el objetivo esperado, es imprescindible contar con PRUEBAS AUTOMÁTICAS.

La mala calidad del software siempre la acaba pagando o asumiendo alguien.

CLEAN CODE -> Es aquel que se ha escrito con la intención de que otra persona, o nosotros mísmos , lo entendamos en un futuro
Nuestro código tiene que ser simple y directo, programar es el arte de decirle a otro humano lo que quieres que el PC haga.

- Nombres pronunciables y expresivos
  No debemos ahorrar letras para definir el nombre de nuestras variables o funciones

- Ausencia de información tecnica en los nombres -> No hace falta ser tan expresivos

- Nombres según el tipo de dato

```
Listas
Malo -> const fruit = ['manzana', 'pera', 'fresa']
Regular -> const fruitList = ['manzana', 'pera', 'fresa']
Bueno -> const fruits = ['manzana', 'pera', 'fresa']
Mejor -> const fruitNames = ['manzana', 'pera', 'fresa']
```

```
Booleanos
Malo -> const open = true // write = true // fruit = true // active = true...
Mejor -> const isOpen = true // canWrite = true // hasFruit = true // isActive = true...
```

```
Números
Malo -> const fruits = 3 // const cars = 10
Mejor -> const maxFruits = 5 // const totalOfCars = 10
```

```
Funciones -> Debe de representar acciones - No debemos ser ultra explicitos
Malo -> createUserIfNoteExists() // updateUserIfNotEmpty() // sendEmailIfFieldIsValid()
Mejor -> creteUser() // updateUser() // sendEmail()
```

No debería hacer falta poner un comentario para que se entienda lo que hace la funcion u obtiene una variable

- CLASES

No deben ser nombres genéricos ni explicitos. El nombre de la clase es lo más importante de la clase.

Los nombres deben estar formados por un sustantivo o frases de sustantivo, y debemos usar el UpperCamelCase.

Podemos hacernos 3 preguntas para saber si el nombre es correcto:
1- Qué hace exactamente la clase?
2- Cómo exactamente esta clase realiza cierta tarea?
3- Hay algo específico sobre su ubicación?

- FUNCIONES

Sabemos que estamos desarrollando código limpio cuando cada función hace exactamente lo que su nombre indica

Deberíamos limitar a 3 parámetros posicionales
Cuanto más simple sea la funcion, mejor!
Deben tener un tamaño reducido, si son muy largas es posible que haga más cosas de las que debería, deberían tener menos de 20 líneas de código

Funciones de una sola línea sin causar complejidad
Debemos evitar el uso del "else"
Se debe priorizar el uso de la condicional ternaria

- PRINCIPIO DRY - Don't repeat yourself
  Nos ayuda a evitar tener duplicidad de código, a simplificar las pruebas, a centralizar procesos...
  Aplicar el principio DRY usualmente lleva a refactorizar

- Los comentarios deben explicar más que lo que hace el código, por qué se ha tomado la decisión de generarlo de esa manera en vez de otra

- Programación Orientada a Objetos
  No debemos nombrar las clases de forma generica, las clases deben ser bien especificas

- Principio de responsabilidad única -> Cada una de las clases debe hacer una tarea y hacerla bien

- Se deben crear las classes siempre de la misma manera
- LISTA RECOMENDADA -
  Comenzar con lista de propiedades
  1- Propiedades estáticas
  2- Propiedades Públicas

Métodos
1- Empezar por los constructores estáticos
2- Seguimos con el constructor
3- Métodos estáticos
4- Métodos privados
5- Resto de métodos de instancia ordenados de mayor a menor importancia
6- Getters y Setters al final

- COMENTARIOS
  Es horrible leer código de otros, debemos de preocuparnos de que nuestro cógdigo sea fácil de leer a parte de su funcionamiento, los comentarios no se deben explicar a si mísmos

Debemos evitar usar comentarios, pero cuando usamos librerías de terceros, APIS, frameworks, etc. nos entrontraremos ante situaciones en las que escribir un comentario será mejor que dejar una solucion compleja o un hack sin explicación

Los comentarios deben ser la excepción, no la regla, el código debe ser auto-explicativo. Debemos explicar el porqué, en ligar del qué o el cómo?

- UNIFORMIDAD EN EL PROYECTO -
  Problemas similares, soluciones similares, tanto en el código como en la estructura del proyecto

- CODESMELLS -
  STUPID, 6 codesmells que debemos de evitar.

Silngleton: Patròn Singleton
Tight Coupling : Alto acoplamiento
Untestability: Código no problable(unit test)
Premature optimization: Optimizaciones prematuras
Indescriptive Naming: Nombres poco descriptivos
Duplication: Duplicidad de código, no aplicar DRY

- Patrón Singleton -
Pros -> Garantiza una única instancia de la clase a lo largo de toda la aplicación
Contras ->
Vive en un contexto global. Puede ser modificado por cualquiera y en cualquier momento. No es rastreable. Difícil de testear debido a su ubicación

- Alto acoplamiento -
Lo ideal es tener bajo acoplamiento y buena cohesión
Un cambio de módulo provoca un efecto domino de los cambios en otros módulos

El ensamblaje de mçódulos puede requerir más esfuerzo y/o tiempo debido a la mayor dependencia entre módulos

Un módulo en particular puede ser más difícil de reutilizar y/o probar porque se deben incluir módulos dependientes

Posibles soluciones -> Queremos diseñar componentes (piezas de código) que sean autocontenidos, auto suficientes e independientes. Con un objetivo y un proposito bien definido