<template>
  <div id="app">
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Head></Head>
    <Carrousel></Carrousel>
    <Tarjeta></Tarjeta>
    <CarrouselTwo></CarrouselTwo>
    <BannerCategoria></BannerCategoria>
    <ModalidadServicio></ModalidadServicio>
    <FooterFronted></FooterFronted>
  </div>
</template>

<script>
import Head from './components/home/Head.vue'
import Carrousel from './components/home/Carrousel.vue'
import Tarjeta from './components/home/Tarjeta.vue'
import CarrouselTwo from './components/home/Carrousel.two.vue'
import BannerCategoria from './components/home/Banner.categoria.vue'
import ModalidadServicio from './components/home/Modalidad.servicio.vue'
import FooterFronted from './components/home/Footer.fronted.vue'
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    Head,
    Carrousel,
    Tarjeta,
    CarrouselTwo,
    BannerCategoria,
    ModalidadServicio,
    FooterFronted
  }
}
</script>

<style>
#app {
  font-family: Nunito;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;  
    

}
</style>
