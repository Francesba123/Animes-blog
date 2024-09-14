document.addEventListener('DOMContentLoaded', () => {
    // Destacar link ativo
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Carregar posts recentes
    if (document.querySelector('.latest-posts')) {
        loadLatestPosts();
    }

    // Buscar posts
    const searchForm = document.getElementById('search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const query = document.getElementById('search-input').value.toLowerCase();
            searchPosts(query);
        });
    }
});

function loadLatestPosts() {
    const postsContainer = document.querySelector('.latest-posts');
    const posts = [
        { title: 'Novo Anime Chegou!', content: 'Confira o novo anime que está fazendo sucesso.' },
        { title: 'Top 10 Animes de 2024', content: 'Veja nossa lista dos melhores animes deste ano.' }
    ];
    
    posts.forEach(post => {
        const postElement = document.createElement('article');
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
        `;
        postsContainer.appendChild(postElement);
    });
}

function searchPosts(query) {
    const posts = document.querySelectorAll('.latest-posts article');
    posts.forEach(post => {
        const title = post.querySelector('h3').textContent.toLowerCase();
        const content = post.querySelector('p').textContent.toLowerCase();
        if (title.includes(query) || content.includes(query)) {
            post.style.display = '';
        } else {
            post.style.display = 'none';
        }
    });
}