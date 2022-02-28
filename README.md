## Asincronismo en JavaScript

Al día de hoy existen 3 formas para trabajar con tareas asincronas en JavaScript

- **Callbacks:**

- Soportadas por todos los navegadores Web, no requieren de un transpilador como Babel que las convierta a JS que pueda ser interpretado por cualquier navegador, su desventaja se hace presente cuando se desea encadenar varias llamadas ya que el código puede hacerse tedioso para interpretar **callback hell**, no es posible implementarlas dentro de bloques try/catch, y para menejar los errores siempre se requiere hacer un if.

- **Promesas:**

- Los navegadores modernos las soportan, el resto requiere que se transpilen, el código es más fácil de leer, se pueden encadenar llamadas mediante **un return de la siguiente promesa** lo que genera varios then en una sola llamda, no es imposible implementar bloques try/catch para el tratamiento de errores, para ello incorporan su propia función catch, si tenemos varias promesas cuyo resultado no depende de la otra se pueden ejecutar en paralelo

- **async / await:**

- Requieren de un transpilador como Babel para convertir el JS a código que puedan interpretar la mayoría de los navegadores, el código se leé de forma secuencial, lo anterior provoca que el código se bloqueé hasta que no se resuelva la promesa, requieren siempre de una función declarada como asincrona que envuelva las peticiones que se espera se resuelvan mediante await, es posible atrapar los errores mediante bloques try/catch


### instalación

```
npm i
```

### Ejecución

Ver el archivo package.json y ejecutar en la terminal el script del proyecto correspondiente

```
npm run promises
npm run async:challenge
```

