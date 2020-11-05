<template>
    <div class="FooterFronted">
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-4 footerRight">
                        <div class="d-flex justify-content-center align-items-center">
                            <img src="@/assets/logo.png" class="logofooter" alt="">
                            <h3> Empresa</h3>
                        </div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ducimus optio sit placeat sequi aut nobis eaque iure dolores distinctio amet sunt repellat soluta cumque sapiente cum, iste error consectetur.
                    </div>
                    <div class="col-4 footerRight">
                        <h3>Contacto</h3>
                        <div class="row">
                            <div class="col-12">Teléfono: (+591) 787 7777</div>
                            <div class="col-12">Email: contacto@empresa.com</div>
                            <div class="col-12">Nombre de la Empresa</div>
                        </div>
                    </div>
                    <div class="col-4">
                        <h3>Redes Sociales</h3>
                        <div class="row">
                            <div class="col-4 btn btn-lg"><span class="i-Facebook-2"></span> Facebook</div>
                            <div class="col-4 btn btn-lg"><span class="i-Instagram"></span> Instagram</div>
                            <div class="col-4 btn btn-lg"><span class="i-Telephone"></span> Telefono</div>
                        </div>
                    </div>
                </div>
                <p class="p-3">empresa@copyright 2020 - Fax</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'FooterFronted',
  props: {
    msg: String
  }
}
</script>