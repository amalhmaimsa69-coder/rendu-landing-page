const temoignages = [
    {
        name: "Marie Dupont",
        image: "https://images.unsplash.com/photo-1560707857-b897819e06fb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "★★★★★",
        title: "Enfin, une vraie solution sans écran !",
        commentaire: "En tant que maman de deux enfants (3 et 5 ans), je suis toujours à la recherche d’activités pour les occuper sans les mettre devant la télé. Cette application m’a sauvée plusieurs fois ! Les activités sont simples, rapides et les enfants s’y intéressent vraiment. J’adore pouvoir ajouter mes propres idées aussi."
    },
    {
        name: "Mary Leblanc",
        image: "https://images.unsplash.com/photo-1718471974887-ff78e62012cb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "★★★★☆",
        title: "Pratique quand on voyage.",
        commentaire: "Mon fils a 2 ans et, lors des longs trajets en voiture, je ne savais plus quoi faire. La catégorie « transport » est parfaite : des petites activités qu’on peut faire même dans la voiture. On a évité les écrans et il était content pendant tout le trajet."
    },
    {
        name: "Sophie Bernard",
        image: "https://plus.unsplash.com/premium_photo-1675133719920-d0844db49d65?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "★★★★★",
        title: "Super pour les journées d’intérieur.",
        commentaire: "Quand on ne peut pas sortir à cause de la pluie, ma filleule de 4 ans devient vite difficile. Avec les activités « intérieur », j’ai trouvé des idées de jeux, de dessins et de bricolages faciles. Elle s’amuse et, moi, je me repose un peu."
    },
    {
        name: "Nadia Boukhlif",
        image: "https://images.unsplash.com/photo-1576696058573-12b47c49559e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "★★★★★",
        title: "Idées originales et faciles",
        commentaire: "Beaucoup d’activités sont vraiment originales, pas juste des dessins ou des jeux classiques. Et surtout, elles sont faciles à organiser, même quand on est pressé.",
    },
    {

        name: "Pierre Laurent",
        image: "https://images.unsplash.com/photo-1605812830455-2fadc55bc4ba?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "★★★★★",
        title: "Recommandations personnalisées super utiles",
        commentaire: "L’application me propose des activités qui correspondent vraiment à ce que j’ai déjà aimé. C’est comme si elle connaissait mes enfants.",
    },
    {

        name: "Samir Hmaimsa",
        image: "https://plus.unsplash.com/premium_photo-1689198809828-bcec83d07182?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "★★★★★",
        title: "Aide vraiment les parents pressés.",
        commentaire: "Avec mon travail et mes horaires chargés, je n’ai pas toujours le temps de chercher des idées. Ici, je trouve rapidement quelque chose et mes enfants sont contents. C’est un vrai soulagement.",
    },
    {

        name: "Mina Rocube",
        image: "https://images.unsplash.com/photo-1589529800500-8a1a1a047e0e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: "★★★★★",
        title: "Une appli qui comprend les parents",
        commentaire: "Enfin une application qui ne critique pas les parents qui utilisent les écrans, mais qui leur propose des solutions alternatives. C’est respectueux et ça aide vraiment."
    }
]
let currentIndex = 0;
const slidesContainer = document.getElementsByClassName('defiler')[0];

function createCards() {
    if (!slidesContainer) return;
    slidesContainer.innerHTML = '';

    for (let i = 0; i < 3; i++) {
        const card = document.createElement('article');
        card.className = 'carte';
        card.innerHTML = `
            <img class="avatar" src="" alt="Temoignage photo">
            <p class="note"></p>
            <h3 class="nom"></h3>
            <p class="titre"></p>
            <p class="commentaire"></p>
        `;
        slidesContainer.appendChild(card);
    }
}
function contenueCard() {
    if (!slidesContainer) return;
    const cards = slidesContainer.getElementsByClassName('carte');
    const total = temoignages.length;
    Array.from(cards).forEach((card, position) => {
        card.className = 'carte';
        if (position === 0) card.classList.add('left');
        else if (position === 1) card.classList.add('active');
        else card.classList.add('right');
        let defilementCard = currentIndex + position - 1;

        if (defilementCard >= total) {
            defilementCard = defilementCard - total;
        }
        const temoignage = temoignages[defilementCard];
        card.getElementsByClassName('avatar')[0].src = temoignage.image;
        card.getElementsByClassName('avatar')[0].alt = `${temoignage.name} photo`;
        card.getElementsByClassName('nom')[0].textContent = temoignage.name;
        card.getElementsByClassName('note')[0].textContent = temoignage.rating;
        card.getElementsByClassName('titre')[0].textContent = temoignage.title;
        card.getElementsByClassName('commentaire')[0].textContent = temoignage.commentaire;
    });
}
function nextSlide() {
    currentIndex = (currentIndex + 1) % temoignages.length;
    contenueCard();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + temoignages.length) % temoignages.length;
    contenueCard();
}

document.getElementById('nextBtn').addEventListener('click', nextSlide);
document.getElementById('prevBtn').addEventListener('click', prevSlide);

createCards();
contenueCard();
