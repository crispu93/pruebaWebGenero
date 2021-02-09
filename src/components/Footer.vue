//src/components/Footer.vue
<template>    
    <b-card bg-variant="dark" header=". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ." text-variant="white" class="text-center">
        <div class="container">
            <b-row class="columns">
                <b-col class="column left">
                    <span class="head"> Dirección</span>
                    <b-card-body>
                        Universidad Juárez del Estado de Durango.
                        <br/>Constitución 404 sur. Zona centro.
                        <br/> C.P. 34000. Durango, Dgo. México.
                    </b-card-body>
                </b-col>
                <b-col class="column center">
                    <span class="head"> Contacto</span>
                    <b-card-body>
                        Correo electrónico: atencionusuarios@ujed.mx
                        <br/> Teléfono: (618) 8271200.
                        <br/><br/><br/> 
                        <a href="https://www.ujed.mx">
                            <img src="http://repositorio.ujed.mx/jspui/image/logo-ujed.png" style="width: 15vw; min-width: 30px;" alt="logo">
                        </a>
                    </b-card-body>
                </b-col>
                <b-col class="column right">
                    <span class="head"> Sobre el sitio</span>
                    <b-card-body>
                        <a href="http://transparencia.ujed.mx/proteccion_datos" class="card-link">Aviso de privacidad</a>
                        <br/><a href="https://www.ujed.mx/politica-de-privacidad" class="card-link">Política de privacidad</a>
                        <br/><a href="https://www.ujed.mx/terminos-y-condiciones-de-uso" class="card-link">Términos y condiciones de uso</a>
                    </b-card-body>
                </b-col>
            </b-row>
        </div>
    </b-card>
</template>

<style lang="scss">

.container {
  flex: 1; //or 1 0 auto
}

.head {
    font-size: 18px;
}

.card-link {
  color: gray;
  background-color: transparent;
  text-decoration: none;
}
</style>