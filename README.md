# Frontend - Disney
Aplicativo que permite el registro y logeo de los usuarios con JWT

### Se utilizó
- Next.js
- React
- Sass
- Typescript
- BEM
- Atomic design




![image](https://user-images.githubusercontent.com/35709873/154653691-399252ef-cfc9-4b8f-83b0-fe6e92bcf6c8.png)
![image](https://user-images.githubusercontent.com/35709873/154653766-c2be5481-e229-437c-8658-92d84c3cd63f.png)
![image](https://user-images.githubusercontent.com/35709873/154655357-fa471fca-2d7f-4b9a-8458-7880871560a4.png)


## Páginas 

### Home

Para visualizar el app se necesita estar logeado y en caso tener un rol de administrador se puede ver la lista de los ultimos logs de los usuarios

![image](https://user-images.githubusercontent.com/35709873/154653943-e3c11f0f-89b3-4f4a-b49b-953146bb32e4.png)

### Logs de usuarios
![image](https://user-images.githubusercontent.com/35709873/154654472-c7f10a1a-ebf3-439e-b3f1-e1392445614c.png)

## Funcionalidades

### Logs
El aplicativo permite estar logeado en 1 solo dispositivo, si se registra en otro dispositivo se cierra la sesión en el primer dispositivo. Al recargar una página
con una sesión desactivada pedirá al usuario volver a logearse si desea volver a usar este dispositivo. 

### Tipo de dispositivo
El aplicativo detecta si el usuario ingresa con un movil o PC, esto se realiza al momento de logearse. Esto se desarrolló con un custom hooks que detecta el ancho de la pantalla, si es menor a 500px se asignará al dispositivo como movil.
