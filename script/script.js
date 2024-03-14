const corV1 = document.getElementById("verde1");
const corVm1 = document.getElementById("vermelho1");
const corA1 = document.getElementById("amarelo1");
const corV2 = document.getElementById("verde2");
const corVm2 = document.getElementById("vermelho2");
const corA2 = document.getElementById("amarelo2");
const corV3 = document.getElementById("verde3");
const corVm3 = document.getElementById("vermelho3");
const corA3 = document.getElementById("amarelo3");
const bnt = document.getElementById("bot");
function ativa() {
  bnt.classList.add("ativo");
  verde1();
  verde2();
  verde3();
  function vermelho1() {
    if (corA1.classList.contains("ativo")) {
      corA1.classList.remove("ativo");
    }
    if (corV1.classList.contains("ativo")) {
      corV1.classList.remove("ativo");
    }
    corVm1.classList.add("ativo");
    let ver1 = setTimeout(verde1, 6000);
    if (!bnt.classList.contains("ativo")) {
      clearTimeout(ver11);
    }
  }
  function amarelo1() {
    if (corVm1.classList.contains("ativo")) {
      corVm1.classList.remove("ativo");
    }
    if (corV1.classList.contains("ativo")) {
      corV1.classList.remove("ativo");
    }
    corA1.classList.add("ativo");
    let verme1 = setTimeout(vermelho1, 1000);
    if (!bnt.classList.contains("ativo")) {
      clearTimeout(verme1);
    }
  }
  function verde1() {
    if (corA1.classList.contains("ativo")) {
      corA1.classList.remove("ativo");
    }
    if (corVm1.classList.contains("ativo")) {
      corVm1.classList.remove("ativo");
    }
    corV1.classList.add("ativo");
    let amar1 = setTimeout(amarelo1, 3000);
    if (!bnt.classList.contains("ativo")) {
      clearTimeout(amar1);
    }
  }
  function vermelho2() {
    if (corA2.classList.contains("ativo")) {
      corA2.classList.remove("ativo");
    }
    if (corV2.classList.contains("ativo")) {
      corV2.classList.remove("ativo");
    }
    corVm2.classList.add("ativo");
    let ver = setTimeout(verde2, 4000);
    if (!bnt.classList.contains("ativo")) {
      clearTimeout(ver);
    }
  }
  function amarelo2() {
    if (corVm2.classList.contains("ativo")) {
      corVm2.classList.remove("ativo");
    }
    if (corV2.classList.contains("ativo")) {
      corV2.classList.remove("ativo");
    }
    corA2.classList.add("ativo");
    let verme = setTimeout(vermelho2, 1000);
    if (!bnt.classList.contains("ativo")) {
      clearTimeout(verme);
    }
  }
  function verde2() {
    if (corA2.classList.contains("ativo")) {
      corA2.classList.remove("ativo");
    }
    if (corVm2.classList.contains("ativo")) {
      corVm2.classList.remove("ativo");
    }
    corV2.classList.add("ativo");
    let amar = setTimeout(amarelo2, 2000);
    if (!bnt.classList.contains("ativo")) {
      clearTimeout(amar);
    }
  }
  function vermelho3() {
    if (corA3.classList.contains("ativo")) {
      corA3.classList.remove("ativo");
    }
    if (corV3.classList.contains("ativo")) {
      corV3.classList.remove("ativo");
    }
    corVm3.classList.add("ativo");
    let ver = setTimeout(verde3, 5000);
    if (!bnt.classList.contains("ativo")) {
      clearTimeout(ver);
    }
  }
  function amarelo3() {
    if (corVm3.classList.contains("ativo")) {
      corVm3.classList.remove("ativo");
    }
    if (corV3.classList.contains("ativo")) {
      corV3.classList.remove("ativo");
    }
    corA3.classList.add("ativo");
    let verme = setTimeout(vermelho3, 1000);
    if (!bnt.classList.contains("ativo")) {
      clearTimeout(verme);
    }
  }
  function verde3() {
    if (corA3.classList.contains("ativo")) {
      corA3.classList.remove("ativo");
    }
    if (corVm3.classList.contains("ativo")) {
      corVm3.classList.remove("ativo");
    }
    corV3.classList.add("ativo");
    let amar = setTimeout(amarelo3, 4000);
    if (!bnt.classList.contains("ativo")) {
      clearTimeout(amar);
    }
  }
}
function desativa() {
  bnt.classList.remove("ativo");
  function amarela() {
    if (bnt.classList.contains("ativo")) {
      clearInterval(vasco);
    }
    if (corVm1.classList.contains("ativo") || corVm2.classList.contains("ativo") || corVm3.classList.contains("ativo")) {
      corVm1.classList.remove("ativo");
      corVm2.classList.remove("ativo");
      corVm3.classList.remove("ativo");
    }
    if (corV1.classList.contains("ativo") || corV2.classList.contains("ativo") || corV3.classList.contains("ativo")) {
      corV1.classList.remove("ativo");
      corV2.classList.remove("ativo");
      corV3.classList.remove("ativo");
    }
    corA1.classList.toggle("ativo");
    corA2.classList.toggle("ativo");
    corA3.classList.toggle("ativo");
  }
  const vasco = setInterval(amarela, 2500);
}
