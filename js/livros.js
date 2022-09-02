// cadastro categoria
var CATEGORIA = [
  {
    idCat: 01,
    nomeCategoria: 'Infantojuvenil'
  },
  {
    idCat: 02,
    nomeCategoria: 'Economia'
  },
  {
    idCat: 03,
    nomeCategoria: 'Autoajuda'
  },
  {
    idCat: 04,
    nomeCategoria: 'Biologia'
  },
];

// cadastro dos livros
var LIVROS = [
  {
    id: 0,
    tituloLivro: "Do Mil ao Milhão",
    autorLivro: "Thiago Nigro",
    precoLivro: 26.9,
    img: "img/001-do-mil-ao-milha-sem-cortar-o-cafezinho-thiago-nigro.jpg",
    categoria: 02,
    promocao: 1,
    qtdEstoque: 25,
    qtdCarrinho: 0,
    qtdComprada: 100,
    precoCarrinho: 0,
  },
  {
    id: 1,
    tituloLivro: "Homem de Giz",
    autorLivro: "J. C. Tudor",
    precoLivro: 36.5,
    img: "img/002-homem-de-giz-c-j-tudor.jpg",
    categoria: 01,
    promocao: 0,
    qtdEstoque: 10,
    qtdCarrinho: 0,
    qtdComprada: 52,
    precoCarrinho: 0,
  },
  {
    id: 2,
    tituloLivro: "A Droga da Obdiência",
    autorLivro: "Pedro Bandeira",
    precoLivro: 15.9,
    img: "img/003-a-droga-da-obediencia-os-karas-pedro-bandeira.jpg",
    categoria: 01,
    promocao: 1,
    qtdEstoque: 13,
    qtdCarrinho: 0,
    qtdComprada: 5,
    precoCarrinho: 0,
  },
  {
    id: 3,
    tituloLivro: "Diário de um Banana",
    autorLivro: "Jeff Kinney",
    precoLivro: 20.9,
    img: "img/004-diario-de-um-banana-jeff-kinney.jpg",
    categoria: 01,
    promocao: 0,
    qtdEstoque: 13,
    qtdCarrinho: 0,
    qtdComprada: 66,
    precoCarrinho: 0,
  },
  {
    id: 4,
    tituloLivro: "Box Harry Potter",
    autorLivro: "Rowling,J. K.",
    precoLivro: 100.9,
    img: "img/005-box-harry-potter-rowling-j-k.png",
    categoria: 01,
    promocao: 1,
    qtdEstoque: 13,
    qtdCarrinho: 0,
    qtdComprada: 200,
    precoCarrinho: 0,
  },
  {
    id: 5,
    tituloLivro: "O Diário de Anne Frank",
    autorLivro: "Anne Frank",
    precoLivro: 10.9,
    img: "img/006-o-diario-de-anne-frank.jpg",
    categoria: 01,
    promocao: 1,
    qtdEstoque: 13,
    qtdCarrinho: 0,
    qtdComprada: 200,
    precoCarrinho: 0,
  },
  {
    id: 6,
    tituloLivro: "A Sutil Arte de Ligar o F*da-se",
    autorLivro: "Mark Manson",
    precoLivro: 49.9,
    img: "img/007-a-sutil-arte-de-ligar-foda-se.jpg",
    categoria: 03,
    promocao: 1,
    qtdEstoque: 13,
    qtdCarrinho: 0,
    qtdComprada: 1050,
    precoCarrinho: 0,
  },
];


function banner(){
  var contBanner = `        <section class="secBanner">
            <div class="row">
                <div class="banner">

                    <div class="col-lg-8 bannerFoto">
                        <div class="fotoBanner"></div>


                    </div>
                    <div class="col-lg-4 col-12 textoBanner">

                        <p class="textoPorcentagem"><b class="porcentagemDesconto">15%</b> de desconto</p>
                        <p class="cupom">#loucurapalacio</p>
                        <a href="" class="btnUsarCupom">usar cupom</a>
                    </div>
                </div>
            </div>
        </section>`
  $("#conteudo").append(contBanner);
}

function listarLivrosPromocao(){
    var conteudoPaginaIncial = `
    <section class="secPromocao">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2 class="tituloSec">Promoção</h2>
                    </div>
                </div>
            </div>
            <div class="swiper mySwiperSecPromocao container">
            <div class="swiper-button-next leftSecPromocao"></div>
            <div class="swiper-button-prev rightSecPromocao"></div>
                <div class="swiper-wrapper content">
    `;
// $("#conteudo").empty(conteudoPaginaIncial);
$("#conteudo").append(conteudoPaginaIncial);
LIVROS.map((val)=>{
  if(val.promocao == 1){
        var livros = `
                            <div class="swiper-slide col-6 col-lg-2 col-md-4 mt-4">
                        <div class="livros">
                            <div class="fotoLivro">
                                <img src="${val.img}" class="img-fluid tagFotoLivro" width="100%" alt="">
                            </div>
                            <div class="textoLivro">
                                <h5 class="tituloLivro">${val.tituloLivro}</h5>
                                <p class="autorLivro">${val.autorLivro}</p>
                                <p class="precoLivro">R$ ${val.precoLivro.toFixed(2)}</p>
                            </div>
                            <div class="text-center btnSaibaMais btnAdd" key="${val.id}">Adicionar no carrinho</div>
                        </div>
                    </div>
        `;
    $(".swiper-wrapper").append(livros);
      }
    
    });
    var finalConteudo = `
</div>
            </div>
            
    </section>
        
  `;
    $(".swiper-wrapper").append(finalConteudo);
    
}

function carrinho() {
    var conteudoPaginaIncial = `
    <section class="secCarrinho">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2 class="tituloSec">Carrinho</h2>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="content row">
    `;
// $("#conteudo").empty(conteudoPaginaIncial);
$("#conteudo").append(conteudoPaginaIncial);
  LIVROS.map((val) => {
    val.precoCarrinho = val.precoLivro * val.qtdCarrinho;
  if (val.qtdCarrinho > 0) {

        var livros = `
                            <div class="col-12 col-lg-12 col-md-12 mt-4">
                        <div class="carLivros">
                            <div class="fotoLivroCar">
                                <img src="${val.img}" class="img-fluid tagFotoLivro" width="100%" alt="">
                            </div>
                            <div class="textoLivroCar">
                                <h5 class="tituloLivro">${val.tituloLivro}</h5>
                                <p class="autorLivro">${val.autorLivro}</p>
                                <p class="precoLivro">R$ ${val.precoLivro.toFixed(2)}</p>
                            </div>
                            <div class="textoLivrosCarDois">

                                <p id="${val.id}2">R$ ${val.precoCarrinho.toFixed(2)}</p>
                                <div class="qtdCar">

                                    <button class="text-center btnSaibaMaisCar btnAdd" key="${val.id}">+</button>
                                    <p id="${val.id}1" class="textQtd">${val.qtdCarrinho}</p>
                                    <button class="text-center btnMenosCar btnSub" key="${val.id}">-</button>
                                </div>
                            </div>
                        </div>
                    </div>
        `;
    
    $(".content").append(livros);
      }
      
    });
    var finalConteudo = `
</div>
            </div>
    </section>
        
  `;
  $(".content").append(finalConteudo);
    
}

function swiperSecPromocao() {
      if ($(window).width() >= 1024) {
        var swiper = new Swiper(".mySwiperSecPromocao", {
          slidesPerView: 4,
          spaceBetween: 30,
          slidesPerGroup: 1,
          loop: true,
          loopFillGroupWithBlank: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".leftSecPromocao",
            prevEl: ".rightSecPromocao",
          },
        });
      } else {
        var swiper = new Swiper(".mySwiperSecPromocao", {
          slidesPerView: 1,
          spaceBetween: 20,
          slidesPerGroup: 1,
          loop: true,
          loopFillGroupWithBlank: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".leftSecPromocao",
            prevEl: ".rightSecPromocao",
          },
        });
      }
}

function listarLivrosMaisPopulares() {
  var conteudoPaginaIncial = `
    <section class="secMaisPopulares">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2 class="tituloSec">Mais Populares</h2>
                    </div>
                </div>
            </div>
            <div class="swiper mySwiperSecMaisPopulares container">
            <div class="swiper-button-next leftSecMaisPopulares"></div>
            <div class="swiper-button-prev rightSecMaisPopulares"></div>
                <div class="swiper-wrapper maisPopulares content">
    `;
  // $("#conteudo").empty(conteudoPaginaIncial);
  $("#conteudo").append(conteudoPaginaIncial);
  LIVROS.map((val) => {
    if (val.qtdComprada > 50) {
      var livros = `
                            <div class="swiper-slide col-6 col-lg-2 col-md-4 mt-4">
                        <div class="livros">
                            <div class="fotoLivro">
                                <img src="${val.img}" class="img-fluid tagFotoLivro" width="100%" alt="">
                            </div>
                            <div class="textoLivro">
                                <h5 class="tituloLivro">${val.tituloLivro}</h5>
                                <p class="autorLivro">${val.autorLivro}</p>
                                <p class="precoLivro">R$ ${val.precoLivro.toFixed(2)}</p>
                            </div>
                            <div class="text-center btnSaibaMais btnAdd" key="${val.id}">Adicionar no carrinho</div>
                        </div>
                    </div>
        `;
      $(".maisPopulares").append(livros);
    }
  });
  var finalConteudo = `
</div>
            </div>
            
    </section>
        
  `;
  $(".maisPopulares").append(finalConteudo);
}

function swiperSecMaisPopulares() {
      if ($(window).width() >= 1024) {
        var swiper = new Swiper(".mySwiperSecMaisPopulares", {
          slidesPerView: 4,
          spaceBetween: 30,
          slidesPerGroup: 1,
          loop: true,
          loopFillGroupWithBlank: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".leftSecMaisPopulares",
            prevEl: ".rightSecMaisPopulares",
          },
        });
      } else {
        var swiper = new Swiper(".mySwiperSecMaisPopulares", {
          slidesPerView: 1,
          spaceBetween: 20,
          slidesPerGroup: 1,
          loop: true,
          loopFillGroupWithBlank: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".leftSecMaisPopulares",
            prevEl: ".rightSecMaisPopulares",
          },
        });
      }
}

function avisoPagina() {
  Swal.fire({
    type: "info",
    text: "Página indisponível ainda. Aguarde.",
    footer:
      '<img src="img/logo-palacio-livraria-sem-fundo-e-sem-texto.png" class="img-fluid" width="100px" alt="">',
    background: "rgb(233, 233, 233)",
    confirmButtonText: "OK",
    confirmButtonColor: "rgb(32, 32, 32)",
  });
}

function login() {
  var login = prompt("Digite o usuário: ");
  var senha = prompt("Digite a senha: ");
  if (login == 'login' && senha == '123') {
    carrinho();
    alert("Login realizado com sucesso");
    return false;
  } else {
    alert("Login Inválido");
    return false;
  }
}

function cancelarCompra() {
  confirm("Deseja cancelar a compra?");
  location.reload();
}

function atualizandoCarrinho() {
  var links = document.getElementsByClassName("btnAdd");
  var linksDois = document.getElementsByClassName("btnSub");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
      var key = this.getAttribute("key");
      $(`#${LIVROS[key].id}1`).empty();
      LIVROS[key].qtdCarrinho = LIVROS[key].qtdCarrinho + 1;
      $(`#${LIVROS[key].id}1`).append(LIVROS[key].qtdCarrinho);
      LIVROS[key].precoCarrinho = LIVROS[key].precoLivro * LIVROS[key].qtdCarrinho;
      $(`#${LIVROS[key].id}2`).empty();
      $(`#${LIVROS[key].id}2`).append(`R$ ${LIVROS[key].precoCarrinho.toFixed(2)}`);
      // console.log(`ID Compra: ${LIVROS[key].tituloLivro} | QTD Carrinho: ${LIVROS[key].qtdCarrinho}`);
      return false;
    });
  }
  for (var i = 0; i < linksDois.length; i++) {
    linksDois[i].addEventListener("click", function () {
      var key = this.getAttribute("key");
      if (LIVROS[key].qtdCarrinho > 0) {
        $(`#${LIVROS[key].id}1`).empty();
        LIVROS[key].qtdCarrinho = LIVROS[key].qtdCarrinho - 1;
        $(`#${LIVROS[key].id}1`).append(LIVROS[key].qtdCarrinho);
        LIVROS[key].precoCarrinho = LIVROS[key].precoLivro * LIVROS[key].qtdCarrinho;
        $(`#${LIVROS[key].id}2`).empty();
        $(`#${LIVROS[key].id}2`).append(`R$ ${LIVROS[key].precoCarrinho.toFixed(2)}`);
      }
      // console.log(`ID Compra: ${LIVROS[key].tituloLivro} | QTD Carrinho: ${LIVROS[key].qtdCarrinho}`);
      return false;
    });
  }
}




$(document).ready(function () {
  $("#conteudo").empty();
  banner();
  listarLivrosPromocao();
  listarLivrosMaisPopulares();
  swiperSecPromocao();
  swiperSecMaisPopulares();
  atualizandoCarrinho();
  
});

// Página inicial click
$(".logoLivraria").click(function () {
  $("#conteudo").empty();
  banner();
  listarLivrosPromocao();
  listarLivrosMaisPopulares();
  swiperSecPromocao();
  swiperSecMaisPopulares();
  atualizandoCarrinho();
});

$(".mdi-cart").click(function () {
  $("#conteudo").empty();
  carrinho();
  atualizandoCarrinho();
  $(".finalizarCompra").click(function () {
    $("#conteudo").empty();
    login();
  });
  $(".cancelarCompra").click(function () {
    cancelarCompra();
    // return true;
  });
});

// página favorito
$(".favorito").click(function () {
  avisoPagina();
});

// página conta
$(".conta").click(function () {
  avisoPagina();
});

// página categoria
$(".categoria").click(function () {
  avisoPagina();
});

// inserir localização
$(".linkLocalizacao").click(function () {
  avisoPagina();
});
  


