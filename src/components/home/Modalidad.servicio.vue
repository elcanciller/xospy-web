<template>
    <div class="ModalidadServicio maquetacionfather">
        <div class="card-group">
            <div class="card mb-3" style="max-width: 18rem;">
                <div class="card-header">Dias de Atención</div>
                <div class="cardfond text-primary">
                    <img class="cardimg" src="@/assets/img/6.jpg" alt="">
                    <button class="btncard btn btn-primary">Ver Metodos</button>
                </div>
            </div>
            <div class="card mb-3" style="max-width: 18rem;">
                <div class="card-header">Metodos de Pago</div>
                <div class="cardfond text-primary">
                    <img class="cardimg" src="@/assets/img/6.jpg" alt="">
                    <button class="btncard btn btn-primary">Ver Metodos</button>
                </div>
            </div>
            <div class="card mb-3" style="max-width: 18rem;">
                <div class="card-header">Politica de Devolución</div>
                <div class="cardfond text-primary">
                    <img class="cardimg" src="@/assets/img/6.jpg" alt="">
                    <button class="btncard btn btn-primary">Ver Metodos</button>
                </div>
            </div>
            <div class="card mb-3" style="max-width: 18rem;">
                <div class="card-header">Metodos de Entrega</div>
                <div class="cardfond text-primary">
                    <img class="cardimg" src="@/assets/img/6.jpg" alt="">
                    <button class="btncard btn btn-primary">Ver Metodos</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name: 'ModalidadServicio',
  props: {
    msg: String
  }
}
</script>