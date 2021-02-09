<template>
  <div>
   <b-container>
     <b-jumbotron>
      <template #header>Formulario</template>

        <template #lead>
          Favor de llenar todos los campos
        </template>
        <hr class="my-4">
    </b-jumbotron>
   </b-container>
   <b-container>
     <b-form>
       <h3>Datos personales de la persona afectada</h3>
       <hr>
      <b-form-row>
        <b-col cols="12" md="4">
           <label for="nombre">Nombre(s):</label>
        <b-form-input
        id="nombre"
        v-model="nombre"
        type="text"
        required>
        </b-form-input>
        </b-col>
        <b-col cols="12" md="4">
           <label for="primer_apellido">Primer apellido:</label>
            <b-form-input
            id="primer_apellido"
            v-model="primer_apellido"
            type="text"
            required>
            </b-form-input>
        </b-col>
        <b-col cols="12" md="4">
           <label for="segundo_apellido">Segundo apellido:</label>
            <b-form-input
            id="segundo_apellido"
            v-model="segundo_apellido"
            type="text"
            >
            </b-form-input>
        </b-col>
      </b-form-row>
      <b-form-row>
         <b-col cols="1" md="1">
          <label for="edad">Edad:</label>
          <b-form-input
          id="edad"
          v-model="edad"
          type="number"
          min="18" required></b-form-input>
         </b-col>
         <b-col cols="9" md="3">
           <label for="matricula">Matrícula:</label>
           <b-form-input
           id="matricula"
           v-model="matricula"
           type="text"
           minlenght="5"
           maxlength="7"></b-form-input>
         </b-col>
         <b-col cols="12" md="4">
           <label for="genero">Género</label>
             <b-form-select id="genero" v-model="genero" :options="opciones1"></b-form-select>
         </b-col>
         <b-col cols="12" md="4">
           <label for="otro_genero" v-if="genero === 'Otro' ">Especifica tu género:</label>
           <b-form-input
           id="otro_genero"
           v-model="otro_genero"
           type="text"
           v-if="genero === 'Otro' "
           ></b-form-input>
         </b-col>
      </b-form-row>
      <b-form-row>
        <b-col cols="12" md="6">
         <label for="vinc_uni">Vinculación con la Universidad:</label>
        <b-form-select id="vinc_uni" v-model="vinc_uni" :options="opciones2"></b-form-select> 
        </b-col>
        <b-col cols="12" md="6">
          <label for="estudiante" v-if="vinc_uni === 'Estudiante'">Especifica el programa de estudios al que perteneces:</label>
          <b-form-input id="estudiante" v-model="estudiante" type="text" v-if="vinc_uni === 'Estudiante'"></b-form-input>
          <label for="funcionario" v-if="vinc_uni === 'Funcionario'">Especifica el puesto que desempeña:</label>
          <b-form-input id="estudiante" v-model="estudiante" type="text" v-if="vinc_uni === 'Funcionario'"></b-form-input>
        </b-col>
        </b-form-row>    
      <b-form-row>
        <b-col cols="12" md="6">
          <label for="tipo_contrato">En caso de ser dependiente de la UJED elija el tipo de contrato:</label>
          <b-form-select id="tipo_contrato" v-model="tipo_contrato" :options="opciones3"></b-form-select>
        </b-col>
         <b-col cols="12" md="6">
          <label for="docente" v-if="tipo_contrato === 'Docente'">Elige el tipo de contrato docente:</label>
          <b-form-select id="docente" v-model="docente" :options="opciones4" v-if="tipo_contrato === 'Docente'"></b-form-select>
          <label for="op_contrato" v-if="tipo_contrato === 'Contrato'">Elige el tipo de contrato:</label>
          <b-form-select id="op_contrato" v-model="op_contrato" :options="opciones5" v-if="tipo_contrato === 'Contrato'"></b-form-select>
        </b-col>
        </b-form-row> 
        <h3>Datos de contacto</h3>
        <hr>
        <b-form-row>
          <b-col cols="12" md="6">
            <label for="correo">Correo electrónico:</label>
            <b-form-input id="correo" v-model="correo" type="email"></b-form-input>
          </b-col>
          <b-col cols="12" md="6">
            <label for="telefono">Número de telefono/celular:</label>
            <b-form-input id="telefono" v-model="telefono" type="tel" maxlenght="10" minlenght="10"></b-form-input>
          </b-col>
         </b-form-row> 
         <h3>Violencia de género</h3>
          <hr>
          <b-form-row>
            <b-col cols="12" md="6">
            <label for="tipificacion">Tipificación de la violencia de género:</label>
            <b-form-input id="tipificacion" v-model="tipificacion" type="text"></b-form-input>
          </b-col>
          <b-col cols="12" md="6">
            <label for="presunta">Nombre de la persona presunta infractora:</label>
            <b-form-input id="presunta" v-model="presunta" type="text"></b-form-input>
          </b-col> 
          </b-form-row>
          <b-form-row>
            <b-col cols="12" md="6">
            <label for="relaboral">Relación laboral de la persona presunta infractora con la persona afectada:</label>
            <b-form-input id="relaboral" v-model="relaboral" type="text"></b-form-input>
          </b-col>
          <b-col cols="12" md="6">
            <label for="lugar_hechos">Lugar donde ocurrieron los hechos:</label>
            <b-form-input id="lugar_hechos" v-model="lugar_hechos" type="text"></b-form-input>
          </b-col> 
          </b-form-row>
          <b-form-group id="testigos" label="Posibles testigos:" v-model="testigos">
            <b-form-row>
               <b-col cols="12" md="4">
                 <b-form-input id="testigo1" v-model="testigo1" placeholder="Testigo1"></b-form-input>
               </b-col>
               <b-col cols="12" md="4">
                 <b-form-input id="testigo2" v-model="testigo2" placeholder="Testigo2"></b-form-input>
               </b-col>
               <b-col cols="12" md="4">
                 <b-form-input id="testigo3" v-model="testigo3" placeholder="Testigo3"></b-form-input>
               </b-col>
              </b-form-row>
          </b-form-group>
          <b-form-row>
            <b-col cols="12" md="12">
              <label for="fechahechos">Fecha en que sucedieron los hechos:</label>
            <b-form-datepicker id="fechahechos" v-model="fecha" class="mb-2"></b-form-datepicker>
            </b-col>
            
          </b-form-row>
         <b-form-textarea
         id="desc"
         v-model="desc"
         placeholder="Escribe una breve descripción de los hechos"
         rows="3"
         ></b-form-textarea>
            <b-form-checkbox
                  id="accept"
                  v-model="accept"
                  name="terminos"
                  value="acepto"
                  unchecked-value="no_acepto"
                 >Acepto los términos y uso
             </b-form-checkbox>
        <b-button type="submit" variant="primary" v-modal.modal-center @click="modalShow = !modalShow">Enviar</b-button>
    </b-form>
    <b-modal id="modalShow" v-model="modalShow" centered title="Solicutd enviada">
    <p class="my-4">Tu solicitud ha sido registrada con éxito. Para dar seguimiento puedes enviar un correo a <a href="#">correo@ejemplo.com</a>
    haciendo referencia con el folio en la versión impresa del acuse.</p>
  </b-modal>
   </b-container>
     



  </div>
</template>

<script>
export default {
  data() {
    return {
      modalShow: false,
      genero: null,
      opciones1: [
        {value: null, text: '-Selecciona una opción-'},
        {value: 'Femenino', text:'Femenino'},
        {value: 'Masculino', text:'Masculino'},
        {value: 'Otro', text:'Otro'}
      ],
      vinc_uni: null,
      opciones2: [
        { value: null, text: '-Selecciona una opción-'},
        { value: 'Estudiante', text: 'Estudiante' },
        { value:'Administrativo', text: 'Trabajador administrativo'},
        { value: 'Docente', text: 'Docente'},
        { value: 'Funcionario', text: 'Funcionario(a)'}
      ],
      tipo_contrato: null,
      opciones3: [
        { value: null, text: '-Selecciona una opción-'},
        { value: 'Docente', text: 'Docente'},
        { value: 'Contrato', text: 'Contrato'},
        { value: 'Otro', text: 'Otro'}
      ],
      docente: null,
      opciones4: [
        { value: null, text: '-Selecciona una opción-'},
        { value: 'Tiempo Exclusivo', text: 'Tiempo Exclusivo (TE)'},
        { value: 'Profesor de Tiempo Completo', text: 'Tiempo Completo (PTC)'},
        { value: 'Medio Tiempo', text: 'Medio Tiempo (MT)'},
        { value: 'Hora Semana Mes', text: 'Hora Semana Mes (HSM)'}
      ],
      op_contrato: null,
      opciones5: [
        { value: null, text: '-Selecciona una opción-'},
        { value: 'Base', text: 'Base'},
        { value: 'Confianza', text: 'Confianza'},
        { value: 'Sustitución', text: 'Sustitución'}
      ]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
