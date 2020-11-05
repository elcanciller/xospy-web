<template>
    <div class="carrousel-two maquetacionfather">
        <div id="carouselExampleCaptions2" class="carousel slide" data-ride="carousel">
            
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="@/assets/img/1.1.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <button class="btn btn-primary">Ver Producto</button>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="@/assets/img/2.2.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button class="btn btn-primary">Ver Producto</button>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="@/assets/img/3.3.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <button class="btn btn-primary">Ver Producto</button>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions2" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions2" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</template>
<script>
export default {
  name: 'CarrouselTwo',
  props: {
    msg: String
  }
}
</script>