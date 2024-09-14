document.addEventListener('DOMContentLoaded', function () {
    // Dados de exemplo para postagens
    const posts = [
        {
            title: "Título do Primeiro Post",
            date: "15 de Setembro de 2024",
            content: "Conteúdo do primeiro post. Este é um exemplo de postagem no blog sobre animes."
        },
        {
            title: "Título do Segundo Post",
            date: "16 de Setembro de 2024",
            content: "Conteúdo do segundo post. Continue lendo para mais novidades e análises sobre animes."
        }
    ];

    // Função para criar uma postagem
    function createPost(post) {
        const postElement = document.createElement('article');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p class="date">${post.date}</p>
            <p>${post.content}</p>
        `;
        return postElement;
    }

    // Adicionar postagens à página principal e à página do blog
    function displayPosts() {
        const postsContainer = document.querySelector('.latest-posts') || document.querySelector('.posts');
        if (postsContainer) {
            posts.forEach(post => {
                postsContainer.appendChild(createPost(post));
            });
        }
    }

    displayPosts();
});
