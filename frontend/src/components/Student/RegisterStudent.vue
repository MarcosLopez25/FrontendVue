<template lang="html">
  <div class="container">

    <div class="row">
      <div class="col text-left">
        <h2>Registrar Estudiante</h2>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">

            <form @submit="onSubmit">
              <div class="form-group row">
                <label for="name" class="col-sm-2 col-form-label" >Nombre</label>
                <div class="col-sm-6">
                  <input type="text" placeholder="Nombre" name="name" class="form-control" v-model.trim="form.name">
                </div>
              </div>

              <div class="form-group row">
                <label for=lastName class="col-sm-2 col-form-label">Apellidos</label>
                <div class="col-sm-6">
                  <input type="text" placeholder="Apellidos" name="lastName" class="form-control" v-model.trim="form.lastName">
                </div>
              </div>

              <div class="form-group row">
                <label for="age" class="col-sm-2 col-form-label">Edad</label>
                <div class="col-sm-6">
                  <input type="number" placeholder="Edad" name="age" class="form-control" v-model.trim="form.age">
                </div>
              </div>

              <div class="form-group row">
                <label for="sex" class="col-sm-2 col-form-label">Sexo</label>
                <div class="col-sm-6">
                  <input type="text" placeholder="Sexo" name="sex" class="form-control" v-model.trim="form.sex">
                </div>
              </div>

              <div class="form-group row">
                <label for="address" class="col-sm-2 col-form-label">Dirección</label>
                <div class="col-sm-6">
                  <textarea name="address" class="form-control" placeholder="Dirección" rows="3" v-model.trim="form.address"></textarea>
                </div>
              </div>

              <div class="form-group row">
                <label for="collegeCareer" class="col-sm-2 col-form-label">Carrera</label>
                <div class="col-sm-6">
                  <input type="text" placeholder="Carrera" name="collegeCareer" class="form-control" v-model.trim="form.collegeCareer">
                </div>
              </div>

              <div class="rows">
                <br>
                <div class="col text-right">
                  <b-button type="submit" pill variant="success">Registrar</b-button>
                  <b-button type="submit" pill variant="outline-danger" :to="{ name: 'ListStudent' }">Cancelar</b-button>
                </div>
              </div>
            </form>


          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'

export default {
  data () {
    return {

      form: {
        name: '',
        lastName: '',
        age: '',
        sex: '',
        address: '',
        collegeCareer: ''
      }
    }
  },
  methods: {
    onSubmit(evt){
      evt.preventDefault()

        const path = `http://localhost:8000/api/v1.0/students/`

        axios.post(path, this.form).then((response) => {

          swal("Estudiante registrado exitosamente!","","success")
          this.form.name = ''
          this.form.lastName = ''
          this.form.age = ''
          this.form.sex = ''
          this.form.address = ''
          this.form.collegeCareer = ''

        })
          .catch((error) => {
            swal("No se puede registar al estudiante","","error")
        })

    }

  },
  created() {

  }
}
</script>

<style>

</style>
