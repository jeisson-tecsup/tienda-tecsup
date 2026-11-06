# Guia de contribucion - Tienda TECSUP

Gracias por tu interes en colaborar con el proyecto Tienda TECSUP.

Este documento explica como reportar errores, proponer mejoras y enviar contribuciones utilizando Git y GitHub.

## 1. Requisitos previos

Antes de contribuir, se recomienda contar con:

- Git instalado.
- Una cuenta de GitHub.
- Visual Studio Code.
- Conocimientos basicos de HTML, CSS y JavaScript.
- Conocimientos basicos de ramas, commits y Pull Requests.

## 2. Reportar errores mediante Issues

Si identificas un error:

1. Ingresa al repositorio de Tienda TECSUP.
2. Selecciona la pestaña Issues.
3. Haz clic en New Issue.
4. Escribe un titulo claro y descriptivo.
5. Explica el problema encontrado.
6. Describe los pasos para reproducirlo.
7. Adjunta capturas de pantalla cuando sea necesario.

### Ejemplo de Issue

**Titulo:** El total del carrito no considera las cantidades.

**Descripcion:**

Cuando se agregan dos unidades de un producto, el sistema calcula el precio de una sola unidad.

**Resultado esperado:**

El total debe calcularse multiplicando el precio por la cantidad de cada producto.

## 3. Preparar el entorno de trabajo

Clona el repositorio:

```bash
git clone https://github.com/reneatencio-tech/tienda-tecsup.git
cd tienda-tecsup
```

## 4. Crear una rama de trabajo

Antes de realizar modificaciones, crea una rama:

```bash
git switch -c fix/nombre-del-error
```

Ejemplo:

```bash
git switch -c fix/calculo-carrito
```

## 5. Realizar las modificaciones

- Revisa el codigo existente.
- Identifica el archivo relacionado con el problema.
- Realiza cambios pequenos y claros.
- Evita modificar archivos que no esten relacionados.
- Comprueba el funcionamiento en el navegador.

## 6. Registrar los cambios

Prepara los archivos:

```bash
git add .
```

Registra un commit descriptivo:

```bash
git commit -m "Corrige el calculo del carrito"
```

## 7. Publicar la rama

Envia los cambios a tu repositorio remoto:

```bash
git push -u origin fix/calculo-carrito
```

## 8. Crear un Pull Request

1. Ingresa a GitHub.
2. Selecciona Compare & pull request.
3. Escribe un titulo descriptivo.
4. Explica los cambios realizados.
5. Relaciona el Issue correspondiente.
6. Adjunta evidencias de las pruebas.
7. Envia el Pull Request para revision.

## 9. Buenas practicas

- Utilizar nombres descriptivos para las ramas.
- Escribir mensajes de commit claros.
- Mantener el codigo ordenado.
- Respetar la estructura del proyecto.
- Evitar cambios innecesarios.
- Verificar los resultados antes de publicar.
- Mantener una comunicacion respetuosa.

## 10. Experiencia del proyecto

Durante el Laboratorio N. 3 se identificaron errores relacionados con:

- El calculo del total del carrito de compras.
- La referencia incorrecta al archivo de estilos CSS.

Estas incidencias permitieron practicar el uso de Issues, ramas y Pull Requests.

## 11. Autor

Rene Percy Atencio Oliva

Estudiante de TECSUP.

[Perfil de GitHub](https://github.com/reneatencio-tech)