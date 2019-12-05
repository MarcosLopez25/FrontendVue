<template>
  <div class="container">
      <div class="row">
        <div class="col">

          <h3>¿Estas seguro que deseas eliminar a este estudiante?</h3>
          <br>
          <p>Nombre : {{ this.element.name }}</p>
          <p>Edad : {{ this.element.age }}</p>
          <p>Carrera : {{ this.element.collegeCareer }}</p>

        </div>
      </div>

      <div class="row">
        <div class="col">
          <br>
          <b-button v-on:click="deleteStudent" pill variant="danger">Eliminar</b-button>
          <b-button type="submit" pill variant="outline-secondary" :to="{ name: 'ListStudent' }">Cancelar</b-button>
        </div>
      </div>

  </div>

</template>

<script>
import axios from 'axios';
import swal from 'sweetalert'

export default {
  data () {
    return {
      studentId: this.$route.params.studentId,
      element: {
        name: '',
        age: '',
        collegeCareer: ''
      }
    }
  },
  methods: {
  getStudent(){
      const path = `http://localhost:8000/api/v1.0/students/${this.studentId}/`

      axios.get(path).then((response) => {
        this.element.name = response.data.name
        //this.element.lastName = response.data.lastName
        this.element.age = response.data.age
        //this.element.sex = response.data.sex
        //this.element.address = response.data.address
        this.element.collegeCareer =  response.data.collegeCareer
      })
      .catch((error) => {
        console.log(error)
      })
    },
    deleteStudent () {
      const path = `http://localhost:8000/api/v1.0/students/${this.studentId}/`

      axios.delete(path).then((response) => {
        location.href = '/students'
        swal("Estudiante eliminado","","success")
      })
      .catch((error) => {
        swal("No es posible eliminar al estudiante","","error")
      })
    }
  },
  created() {
    this.getStudent()
  }
}
</script>

<style>

</style>
