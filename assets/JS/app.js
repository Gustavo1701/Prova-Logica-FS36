function Sair() {
  if (localStorage.getItem("token") == null) {
    alert("Você precisa estar logado para acessar essa página!");
    window.location.href = "./html/login.html";
  }

  const userLogado = JSON.parse(localStorage.getItem("userLogado"));

  const logado = document.querySelector("#logado");
  logado.innerHTML = `Olá ${userLogado.nome}`;

  
}

function sair() {
  alert('Você foi desconectado!')
  setTimeout(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = "./login.html";
  }, 1000)


}