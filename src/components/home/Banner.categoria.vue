<template>
    <div class="banner-categoria maquetacionfather">
        <div class="bannertop d-flex align-items-center justify-content-center">
            <img src="../../assets/img/3.jpg" alt="">
            <div class="carousel-caption d-none d-md-block">
                <h3>Belleza</h3>
                <button class="btn btn-primary">Ver Categoria</button>
            </div>
        </div>
        <div class="bannerleft d-flex align-items-center justify-content-center">
            <img src="../../assets/img/4.jpg" alt="">
            <div class="carousel-caption d-none d-md-block">
                <h3>Productos del Hogar</h3>
                <button class="btn btn-primary">Ver Categoria</button>
            </div>
        </div>
        <div class="bannerright d-flex align-items-center justify-content-center">
            <img src="../../assets/img/5.jpg" alt="">
            <div class="carousel-caption d-none d-md-block">
                <h3 class="">Productos Nuevos</h3>
                <button class="btn btn-primary">Ver Categoria</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'BannerCategoria',
  props: {
    msg: String
  }
}
</script>