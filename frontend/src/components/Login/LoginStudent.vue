<template>
  <div>
    <form novalidate class="md-layout">
      <md-card class="md-layout-item md-size-50 md-small-size-100">

        <md-card-header>
          <div class="md-title">Inicio de Sesión</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="name">Nombre de Usuario</label>
                <md-input name="first-name" id="first-name" autocomplete="given-name" />
                <span class="md-error" >The first name is required</span>
                <span class="md-error" >Invalid first name</span>
              </md-field>
            </div>
          </div>
        </md-card-content>
      </md-card>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
