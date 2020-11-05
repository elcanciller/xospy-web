
<template>
    <div class="headLayout">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
                <img src="@/assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy"> Empresa
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
    
            <div class="collapse navbar-collapse ml-sm-4" id="navbarTogglerDemo02">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Producto</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" >Categorias</a>
                    </li>
                </ul>
                <div class="form-inline my-2 my-lg-0">
                <form class="mr-sm-2">
                    <div class="input-group">
                        <input class="form-control formCont" type="search" placeholder="Search">
                        <button class="btnSearch btn my-2 my-sm-0" type="submit"><span class="i-Magnifi-Glass1"></span></button>
                    </div>
                </form>
                <select name="" id="" class="custom-select">
                    <option value="" selected>Ubicación</option>
                    <option value="">Bolivia</option>
                </select>
                <div class="ml-sm-2 p-2 btn btn-lg i-Shopping-Cart"></div>
                <div class="ml-sm-2 p-2 btn btn-lg i-Administrator"></div>
                </div>
            </div>
        </nav>
        <router-view/>
    </div>
</template>

<script>
export default {
  name: 'head',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
   
</style>