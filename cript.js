[1mdiff --git a/script.js b/script.js[m
[1mindex d9245c9..5108fab 100644[m
[1m--- a/script.js[m
[1m+++ b/script.js[m
[36m@@ -6,7 +6,7 @@[m [mconst productos = [[m
 function calcularTotal(lista) {[m
   let total = 0;[m
   for (const producto of lista) {[m
[31m-    total = total + producto.precio;[m
[32m+[m[32m    total = total + producto.precio * producto.cantidad;[m
   }[m
   return total;[m
 }[m
