// Banco de dados dos produtos

const data = [
    {
       id:"Tenis",
       categoria: "Tênis",
       nome: "Air Jordan 1",
       descricao:"Jordan 1 remixou nas cores do time do Chicago Bulls, sendo o tenis mais vendido do Jordan.",
       preco:700.00, 
       image:"./img/tenisJordan1.jpg"
    },
    {
        id: 1,
        categoria: "Tênis",
        nome: "Kyrie 4 Halloween",
        descricao:"Uma edição especial de comemoração do Halloween, nas cores preto e verde neon.",
        preco:650.00,  
        image:"./img/Tenis-Nike-Kyrie-4.webp"   
    },
    {
        categoria: "Tênis",
        nome: "LeBron 19 Space Jam",
        descricao:"Tênis utilizado pelo Lebron, no filme Space Jam: Um novo legado.",
        preco:1000.00,  
        image:"./img/spacejam2.webp"
    },
    {
        categoria: "Jersey",
        nome: "Lakers - Kobe",
        descricao:"Regata amarela e roxa, número 24, do Los Angeles Lakers, Kobe Brayant.",
        preco:399.50,  
        image:"./img/kobe.png"
    },
    {
        categoria: "Jersey",
        nome: "Cavs - Lebron",
        descricao:"Regata do Clevelend na cor vinho, número 23 do Lebron James.",
        preco:450.00,  
        image:"./img/james.jpg"
    },
    {
        categoria: "Jersey",
        nome: "Hornets - Lamelo",
        descricao:"Regata azul e verde, número 2 do  Charlotte Hornets, Lamelo Ball.",
        preco:300.00,  
        image:"./img/lamelo.jpg"
    },
    {
        categoria: "Bola",
        nome: "Wilson - NBA",
        descricao:"Bola padrão ultilizada nos jogos da nba, feita de couro para quadras taqueadas.",
        preco:180.00,  
        image:"./img/bolaw.webp"
    },
    {
        id:"Bola",
        categoria: "Bola",
        nome: "Wilson - 75 anos",
        descricao:"Bola de comemoração de aniversário da nba de 75 anos de existencia da liga.",
        preco:265.00,  
        image:"./img/75anos.jpeg"
    },
    {
        categoria: "Bola",
        nome: "Wilson - 3v3",
        descricao:"Bola padrão do basquete de rua, 3v3, feita de borracha para quadras de cimento.",
        preco:175.50,  
        image:"./img/3v3.webp"
    },
];
let listaCarrinho = []