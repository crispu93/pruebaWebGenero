<template>
  <div class="form">
    <!--<h1>This is the form page</h1>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, quidem perferendis? Rerum quidem totam delectus cumque sit. Necessitatibus voluptatibus quo provident ut doloremque voluptatum similique, eius quos repellat atque quidem?
    -->    <div>
        <b-card
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 55rem; margin-left: 15%;"
            class="mb-2 justify-center"
            align-v="center"
        >
            <b-container>
                <b-jumbotron>
                <template #header>Formulario de denuncia</template>

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
                    v-model="user.personal.nombre"
                    type="text"
                    required>
                    </b-form-input>
                    </b-col>
                    <b-col cols="12" md="4">
                    <label for="primer_apellido">Primer apellido:</label>
                        <b-form-input
                        id="primer_apellido"
                        v-model="user.personal.paterno"
                        type="text"
                        required>
                        </b-form-input>
                    </b-col>
                    <b-col cols="12" md="4">
                    <label for="segundo_apellido">Segundo apellido:</label>
                        <b-form-input
                        id="segundo_apellido"
                        v-model="user.personal.materno"
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
                    v-model="user.personal.edad"
                    type="number"
                    min="18" required></b-form-input>
                    </b-col>
                    <b-col cols="9" md="3">
                    <label for="matricula">Matrícula:</label>
                    <b-form-input
                    id="matricula"
                    v-model="user.personal.matricula"
                    type="text"
                    minlenght="5"
                    maxlength="7"></b-form-input>
                    </b-col>
                    <b-col cols="12" md="4">
                    <label for="genero">Género</label>
                        <b-form-select id="genero" v-model="user.personal.genero" :options="opciones1"></b-form-select>
                    </b-col>
                    <b-col cols="12" md="4">
                    <label for="otro_genero" v-if="genero === 'Otro' ">Especifica tu género:</label>
                    <b-form-input
                    id="otro_genero"
                    v-model="user.personal.genero"
                    type="text"
                    v-if="genero === 'Otro' "
                    ></b-form-input>
                    </b-col>
                </b-form-row>
                <b-form-row>
                    <b-col cols="12" md="6">
                    <label for="vinc_uni">Vinculación con la Universidad:</label>
                    <b-form-select id="vinc_uni" v-model="user.inf_univ.vinculacion" :options="opciones2"></b-form-select>
                    </b-col>
                    <b-col cols="12" md="6">
                    <label for="estudiante" v-if="user.inf_univ.vinculacion === 'Estudiante'">Especifica el programa de estudios al que perteneces:</label>
                    <b-form-input id="estudiante" v-model="user.inf_univ.programa_puesto" type="text" v-if="user.inf_univ.vinculacion === 'Estudiante'"></b-form-input>
                    <label for="funcionario" v-if="user.inf_univ.vinculacion === 'Funcionario'">Especifica el puesto que desempeña:</label>
                    <b-form-input id="funcionario" v-model="user.inf_univ.programa_puesto" type="text" v-if="user.inf_univ.vinculacion === 'Funcionario'"></b-form-input>
                    </b-col>
                    </b-form-row>
                <b-form-row>
                    <b-col cols="12" md="6">
                    <label for="tipo_contrato">En caso de ser dependiente de la UJED elija el tipo de contrato:</label>
                    <b-form-select id="tipo_contrato" v-model="user.inf_univ.contrato" :options="opciones3"></b-form-select>
                    </b-col>
                    <b-col cols="12" md="6">
                    <label for="docente" v-if="user.inf_univ.contrato === 'Docente'">Elige el tipo de contrato docente:</label>
                    <b-form-select id="docente" v-model="user.inf_univ.contrato.tipo_contrato" :options="opciones4" v-if="user.inf_univ.contrato === 'Docente'"></b-form-select>
                    <label for="op_contrato" v-if="user.inf_univ.contrato === 'Contrato'">Elige el tipo de contrato:</label>
                    <b-form-select id="op_contrato" v-model="user.inf_univ.contrato.tipo_contrato" :options="opciones5" v-if="user.inf_univ.contrato === 'Contrato'"></b-form-select>
                    </b-col>
                    </b-form-row>
                    <h3>Datos de contacto</h3>
                    <hr>
                    <b-form-row>
                    <b-col cols="12" md="6">
                        <label for="correo">Correo electrónico:</label>
                        <b-form-input id="correo" v-model="user.contacto.correo" type="email"></b-form-input>
                    </b-col>
                    <b-col cols="12" md="6">
                        <label for="telefono">Número de telefono/celular:</label>
                        <b-form-input id="telefono" v-model="user.contacto.telefono" type="tel" maxlenght="10" minlenght="10"></b-form-input>
                    </b-col>
                    </b-form-row>
                    <h3>Violencia de género</h3>
                    <hr>
                    <b-form-row>
                        <b-col cols="12" md="6">
                        <label for="tipificacion">Tipificación de la violencia de género:</label>
                        <b-form-input id="tipificacion" v-model="user.descripcion_agresion.tipo" type="text"></b-form-input>
                    </b-col>
                    <b-col cols="12" md="6">
                        <label for="presunta">Nombre de la persona presunta infractora:</label>
                        <b-form-input id="presunta" v-model="user.descripcion_agresion.presunto" type="text"></b-form-input>
                    </b-col>
                    </b-form-row>
                    <b-form-row>
                        <b-col cols="12" md="6">
                        <label for="relaboral">Relación laboral de la persona presunta infractora con la persona afectada:</label>
                        <b-form-input id="relaboral" v-model="user.descripcion_agresion.relacion" type="text"></b-form-input>
                    </b-col>
                    <b-col cols="12" md="6">
                        <label for="lugar_hechos">Lugar donde ocurrieron los hechos:</label>
                        <b-form-input id="lugar_hechos" v-model="user.descripcion_agresion.lugar" type="text"></b-form-input>
                    </b-col>
                    </b-form-row>
                    <b-form-group id="testigos" label="Posibles testigos:" v-model="testigos">
                        <b-form-row>
                        <b-col cols="12" md="4">
                            <b-form-input id="testigo1" v-model="user.descripcion_agresion.testigo_1" placeholder="Testigo1"></b-form-input>
                        </b-col>
                        <b-col cols="12" md="4">
                            <b-form-input id="testigo2" v-model="user.descripcion_agresion.testigo_2" placeholder="Testigo2"></b-form-input>
                        </b-col>
                        <b-col cols="12" md="4">
                            <b-form-input id="testigo3" v-model="user.descripcion_agresion.testigo_3" placeholder="Testigo3"></b-form-input>
                        </b-col>
                        </b-form-row>
                    </b-form-group>
                    <b-form-row>
                        <b-col cols="12" md="12">
                        <label for="fechahechos">Fecha en que sucedieron los hechos:</label>
                        <b-form-datepicker id="fechahechos" v-model="user.descripcion_agresion.fecha" class="mb-2"></b-form-datepicker>
                        </b-col>
                    </b-form-row>
                    <b-form-textarea
                    id="desc"
                    v-model="user.descripcion_agresion.descripcion"
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
                    <b-button type="submit" variant="primary" v-modal.modal-center @click="modalShow = !modalShow" v-on:click="agregar()">Enviar</b-button>
                </b-form>
                <b-modal id="modalShow" v-model="modalShow" centered title="Solicutd enviada">
                <p class="my-4">Tu solicitud ha sido registrada con éxito. Para dar seguimiento puedes enviar un correo a <a href="#">correo@ejemplo.com</a>
                haciendo referencia con el folio en la versión impresa del acuse.</p>
            </b-modal>
            </b-container>
        </b-card>
        </div>
  </div>
</template>

<script>
import * as toastr from 'toastr'
import { db } from '../firebaseDB'
let users = db.ref('users')
export default {
  data () {
    return {
      modalShow: false,
      genero: null,
      opciones1: [
        { value: null, text: '-Selecciona una opción-' },
        { value: 'Femenino', text: 'Femenino' },
        { value: 'Masculino', text: 'Masculino' },
        { value: 'Otro', text: 'Otro' }
      ],
      vinc_uni: null,
      opciones2: [
        { value: null, text: '-Selecciona una opción-' },
        { value: 'Estudiante', text: 'Estudiante' },
        { value: 'Administrativo', text: 'Trabajador administrativo' },
        { value: 'Docente', text: 'Docente' },
        { value: 'Funcionario', text: 'Funcionario(a)' }
      ],
      tipo_contrato: null,
      opciones3: [
        { value: null, text: '-Selecciona una opción-' },
        { value: 'Docente', text: 'Docente' },
        { value: 'Contrato', text: 'Contrato' },
        { value: 'Otro', text: 'Otro' }
      ],
      docente: null,
      opciones4: [
        { value: null, text: '-Selecciona una opción-' },
        { value: 'Tiempo Exclusivo', text: 'Tiempo Exclusivo (TE)' },
        { value: 'Profesor de Tiempo Completo', text: 'Tiempo Completo (PTC)' },
        { value: 'Medio Tiempo', text: 'Medio Tiempo (MT)' },
        { value: 'Hora Semana Mes', text: 'Hora Semana Mes (HSM)' }
      ],
      op_contrato: null,
      opciones5: [
        { value: null, text: '-Selecciona una opción-' },
        { value: 'Base', text: 'Base' },
        { value: 'Confianza', text: 'Confianza' },
        { value: 'Sustitución', text: 'Sustitución' }
      ],
      user: { 'personal': {
                'nombre': '',
                'paterno': '',
                'materno': '',
                'edad': '',
                'matricula': '',
                'genero': ''
            },
            'inf_univ': {
                'vinculacion': '',
                'programa_puesto': '',
                'contrato': '',
                'tipo_contrato': ''
            },
            'contacto': {
                'correo': '',
                'telefono': ''
            },
            'descripcion_agresion': {
                'tipo': '',
                'presunto': '',
                'relacion': '',
                'lugar': '',
                'fecha': '',
                'testigo_1': '',
                'testigo_2': '',
                'testigo_3': '',
                'descripcion': ''
            }
        }
    }
  },
  methods: {
      agregar: function () {
            event.preventDefault()
            users.push(this.user, function (error) {
                if (error) {
                    toastr.error('Error al intentar agregar el registro.', 'Aviso')
                } else {
                toastr.success('Registro agregado correctamente.', 'Aviso')
                }
            })
            user.personal.nombre = ''
            user.personal.paterno = ''
            user.personal.materno = ''
            user.personal.edad = ''
            user.personal.matricula = ''
            user.personal.genero = ''
            user.inf_univ.vinculacion = ''
            user.inf_univ.programa_puesto = ''
            user.inf_univ.contrato = ''
            user.inf_univ.tipo_contrato = ''
            user.contacto.correo = ''
            user.contacto.correotelefono = ''
            user.descripcion_agresion.tipo = ''
            user.descripcion_agresion.presunto = ''
            user.descripcion_agresion.relacion = ''
            user.descripcion_agresion.lugar = ''
            user.descripcion_agresion.fecha = ''
            user.descripcion_agresion.testigo_1 = ''
            user.descripcion_agresion.testigo_2 = ''
            user.descripcion_agresion.testigo_3 = ''
            user.descripcion_agresion.descripcion = ''
            this.modalShow = false
      }
  }
}
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
