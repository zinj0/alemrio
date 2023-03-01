// ======= CONTEÚDO DO SITE ALEM RIO. ========
//

let fronteira = [
        // TITULO
        "Fronteira de Brincar - Ep. 01",
        // SINÓPSE
        "No interior do Rio Grande de Sul, estudantes da Escola Estadual Básica Tiradentes  participam de uma oficina audiovisual. Desde seus celulares, recortam, armazenam e organizam imagens da escola, da cidade e da fronteira.<br><br>Realização de Ana Carolina Hermann, Arthur Gabriel Estraich Pothin, Caroline Ferreira, Eduarda Alves Ledur, Emilly Diedrich, Francini Eduarda Wagner Weber, Gabriel Back, Guilherme H. Hilger, Guilherme Luft Jandrey, Isadora Ferreira, Juliane Nino, Kemili Raíssa Weber, Maísa Tatiele Martha Nails, Miguel Afonso Werner, Miguel Welter Bonfanti, Romana Emanueli Parode da Rosa, Sara Hermes, Tainá Laís Rohr, Vitória Kaufmann<br><br>Coordenação de Henrique Lahude<br><br>Professora responsável Daniela Kaufman Padilha<br><br>Oficina audiovisual de Henrique Lahude e Gabriela Poester", 
        // IMAGENS
        "https://i.ibb.co/xGWY0gh/vlcsnap-2023-02-12-13h33m20s881.png", 
        "https://i.ibb.co/k3vbHp9/vlcsnap-2023-02-12-13h27m35s150.png", 
        "https://i.ibb.co/dL67xzx/vlcsnap-2023-02-12-13h26m20s832.png", 
        "https://i.ibb.co/CsH700Y/vlcsnap-2023-02-12-10h47m04s223.png"
    ]

let alem = [
        // TÍTULO
        "", 
        // SINOPSE
        "",
        // IMAGENS 
        "https://i.ibb.co/ZdC4Fcq/vlcsnap-2023-02-12-11h05m52s896.jpg", 
        "https://i.ibb.co/DCBXP1r/vlcsnap-2023-02-12-10h54m39s202.jpg", 
        "https://i.ibb.co/ZK7nVyt/vlcsnap-2023-02-12-11h02m20s420.jpg", 
        "https://i.ibb.co/hLMf2xL/vlcsnap-2023-02-12-11h05m15s054.jpg"

]

let messi = [
        // TÍTULO
        "Messi Ep - 03", 
        // SINOPSE
        "09 de dezembro de 2022, quartas de final da copa do mundo. Na cidade fronteiriça de El Soberbio, Edu está de férias e acompanha junto de sua família o jogo Argentina X Holanda. <br><br><b>Com Eduardo Flores Perassolo, Marta Flores, Oscar Persassolo, Paula Flores Perassolo, Agustina Flores Persassolo</b><br><br>Realizado por Camila Acosta e Henrique Lahude<br>Produção Nicolas Gomes Portillo<br>Montagem André Berzagui<br>Mixagem Otávio Vassão",
        // IMAGENS 
        "https://i.ibb.co/M65W42Q/vlcsnap-2023-02-12-11h07m21s679.jpg", 
        "https://i.ibb.co/8zTnkyg/vlcsnap-2023-02-12-11h07m59s861.jpg", 
        "https://i.ibb.co/NLJWc70/vlcsnap-2023-02-12-11h10m18s270.jpg", 
        "https://i.ibb.co/8j7VDSv/vlcsnap-2023-02-12-11h12m26s174.jpg"
    ]

let escuela = [
    // TÍTULO
    "Escuela Rural Nº574 - Ep. 04", 
    // SINOPSE
    "Uma pequena escola rural na fronteira da Argentina com o Brasil se prepara para seu ato de fim de ano.<br><br><b>Apresentando Estudantes, professores e familiares da Escuela Rural nº 574</b><br><br>Diretor Gilson Reinher<br>Realizado por Camila Acosta, Daniel Perez e Henrique Lahude<br>Produção Nicolas Gomes Portillo<br>Montagem André Berzagui<br>Mixagem Otávio Vassão",
    // IMAGENS 
    "https://i.ibb.co/d73h8SX/vlcsnap-2023-03-01-09h59m22s370.jpg", 
    "https://i.ibb.co/gSkKHNw/vlcsnap-2023-03-01-12h01m39s294.jpg", 
    "https://i.ibb.co/wLS5FXC/vlcsnap-2023-03-01-10h41m51s029.jpg", 
    "https://i.ibb.co/1Q38Tq1/vlcsnap-2023-03-01-10h02m12s256.jpg"
]

let juego = [
    // TÍTULO
    "Corte y juego - Ep. 05",
    // SINOPSE
    "É verão na margem direita do Rio Uruguai. Para a Família Moreira é tempo de férias escolares e da colheita da citronela <br><br><b>Apresentando Família Moreira</b><br><br>Realizado por Camila Acosta, Daniel Perez e Henrique Lahude<br>Produção Nicolas Gomes Portillo<br>Montagem André Berzagui<br>Mixagem Otávio Vassão",
    // IMAGENS 
    "https://i.ibb.co/rwYDtZb/vlcsnap-2023-02-15-13h08m28s763.jpg", 
    "https://i.ibb.co/GQ9W0cY/vlcsnap-2023-03-01-12h04m51s682.jpg", 
    "https://i.ibb.co/hg6N0B8/vlcsnap-2023-03-01-15h28m00s024.jpg", 
    "https://i.ibb.co/xqrRNxk/vlcsnap-2023-03-01-15h34m04s123.jpg"
]





// NAO MEXER

let main = document.getElementById('main');

curtaBox = (titulo, texto, img1, img2, img3, img4) => {
        main.innerHTML =
            "<div class='curtabox'>" +
            "<h3 class='h1curta'>" + titulo + "</h3><br><br><p class='txtcurta'>" + texto + "</p><br><br><div id='imgbox'><img class='imagens' src='" + img1 + "' alt='foto 1'><img class='imagens' src='" + img2 + "' alt='foto 2'><br><br><img class='imagens' src='" + img3 + "' alt='foto 3'><img class='imagens' src='" + img4 + "' alt='foto 4'></div><br><br><br><br>"
    }