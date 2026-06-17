const temoignages = [
    {
        name: "Marie Dupont",
        image: "https://images.unsplash.com/photo-1560707857-b897819e06fb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "★★★★★",
        title: " Finally, une vraie solution sans écran !",
        commentaire: "En tant que maman de deux enfants (3 et 5 ans), je suis toujours à la recherche d’activités pour les occuper sans les mettre devant la télé. Cette application m’a sauvé plusieurs fois ! Les activités sont simples, rapides et les enfants s’y intéressent vraiment. J’adore pouvoir ajouter mes propres idées aussi."
    },
     {
        name: "Mary Leblanc",
        image:    "https://images.unsplash.com/photo-1718471974887-ff78e62012cb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "★★★★☆",
        title: "Pratique quand on voyage",
        commentaire: "Mon fils a 2 ans et lors des longs trajets en voiture, je ne savais plus quoi faire. La catégorie « transport » est parfaite : des petites activités qu’on peut faire même dans la voiture. On a évité les écrans et il était content pendant tout le trajet."
    },
    {
        name: "Sophie Bernard",
        image:"https://plus.unsplash.com/premium_photo-1675133719920-d0844db49d65?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
        rating: "★★★★★",
        title: " Super pour les journées d’intérieur",
        commentaire:"Quand on ne peut pas sortir à cause de la pluie, mon filleule de 4 ans devient vite difficile. Avec les activités « intérieur », j’ai trouvé des idées de jeux, de dessins, de bricolages faciles. Il s’amuse et moi je me repose un peu." 
    },
     {
        name: "Nadia Boukhlif",
        image: "https://images.unsplash.com/photo-1576696058573-12b47c49559e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "★★★★★",
        title:"Idées originales et faciles" ,
        commentaire: "Beaucoup d’activités sont vraiment originales, pas juste des dessins ou des jeux classiques. Et surtout, elles sont faciles à organiser même quand on est pressé. ",
    },
     {

        name: "Pierre Laurent",
        image: "https://images.unsplash.com/photo-1605812830455-2fadc55bc4ba?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "★★★★★",
        title: " Recommandations personnalisées super utiles",
        commentaire: " L’application me propose des activités qui correspondent vraiment à ce que j’ai déjà aimé. C’est comme si elle connaissait mes enfants.",
        },
     {

        name: "Samir Hmaimsa",
        image: "https://plus.unsplash.com/premium_photo-1689198809828-bcec83d07182?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "★★★★★",
        title: "Aide vraiment les parents pressés",
        commentaire: "Avec mon travail et mes horaires chargés, je n’ai pas toujours le temps de chercher des idées. Ici, je trouve rapidement quelque chose et mes enfants sont contents. C’est un vrai soulagement.",
        },
     {

        name: "Mina Rocube",
        image: "https://images.unsplash.com/photo-1589529800500-8a1a1a047e0e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "★★★★★",
        title: "Une app qui comprend les parents",
        commentaire: "Enfin une application qui ne critique pas les parents qui utilisent les écrans, mais qui leur propose des solutions alternatives. C’est respectueux et ça aide vraiment."
    }
]
let currentIndex = 0;


function cardContenue() {
    const sakiki = temoignages[currentIndex];
    document.getElementById('img1').src = sakiki.image;
    document.getElementById('nom1').textContent = sakiki.name;
    document.getElementById('note1').textContent = sakiki.rating;
    document.getElementById('titre1').textContent = sakiki.title;
    document.getElementById('commentaire1').textContent = sakiki.commentaire;
}



function nextSlide() {
    currentIndex++;
    if (currentIndex >= temoignages.length) {
        currentIndex = 0;
    }
    cardContenue();
}

function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = temoignages.length - 1;
    }
    cardContenue();
}
document.getElementById('nextBtn').addEventListener('click', nextSlide);
document.getElementById('prevBtn').addEventListener('click', prevSlide);

  cardContenue();
