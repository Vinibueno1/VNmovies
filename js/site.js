window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (this.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YmNlMzA4MDA5MTM4YzExYmQ1ZWMxNTA4NmY2ODQ4MyIsIm5iZiI6MTczMjA0MTEyNy43OTMzNzI2LCJzdWIiOiI2MGMwMGYzMDViMTI0MDAwN2E3NDdiMjQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.7oBmC6vtiAsSMV6Jz0D4Jt_SMiYd8LrnRF39BCVUnSg",
    },
};

// Formatação de datas
function formatarData(data) {
    var d = new Date(data),
    mes = '' + (d.getMonth() + 1),
    dia = '' + d.getDate(),
    ano = d.getFullYear();
    mes = mes.length < 2 ? '0' + mes : mes;
    dia = dia.length < 2 ? '0' + dia : dia;
    return [dia, mes, ano].join('/');
}

// Exibir e esconder Loader
function toggleLoading() {
    let loader = document.querySelector('.loader');
    loader.style.display = loader.style.display === 'none' ? 'block' : 'none'; 
}