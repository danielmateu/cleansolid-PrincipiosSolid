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

