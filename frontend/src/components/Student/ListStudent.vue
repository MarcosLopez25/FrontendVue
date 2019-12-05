<template lang="html">
    <div class="container">
      <div class="row">
        <div class="col text-left">
          <h2 >Lista de Estudiantes</h2>
          <br>

          <div class="">
            <b-button size="sm" :to="{name: 'RegisterStudent'}" pill variant="success">
              Registrar Estudiante
            </b-button>
          </div>

          <br>
          <div class="col-md-12">
            <b-table striped hover :items="students" :fields="fields" striped responsive="sm">
              <template v-slot:cell(action)="data">
                <b-button size="sm" pill variant="primary" :to="{ name:'EditStudent', params: {studentId: data.item.id} }">Editar</b-button>
                <b-button size="sm" pill variant="danger" :to="{ name:'DeleteStudent', params: {studentId: data.item.id} }">Eliminar</b-button>
              </template>
            </b-table>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      fields: [
        { key: 'name', label: 'Nombre' },
        { key: 'age', label: 'Edad' },
        { key: 'collegeCareer', label: 'Carrera' },
        { key: 'action', label: '' }
      ],
      students: []
    }
  },
  methods: {
    getStudents (){
      const path = 'http://localhost:8000/api/v1.0/students/'
      axios.get(path).then((response) => {
        this.students = response.data
      })
      .catch((error) => {
        console.log(error)
      })
    }
  },

  created () {
    this.getStudents()
  }
}

</script>

<style lang="css" scoped>

</style>
