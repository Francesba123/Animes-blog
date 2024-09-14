document.addEventListener('DOMContentLoaded', function () {
    const postsContainer = document.getElementById('posts-container');
    const postForm = document.getElementById('new-post-form');

    // Dados de exemplo para postagens
    const posts = [
        {
            id: 1,
            title: "Título do Primeiro Post",
            date: "15 de Setembro de 2024",
            content: "Conteúdo do primeiro post. Este é um exemplo de postagem no blog sobre animes.",
            likes: 0,
            comments: []
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
            <button class="like-button" data-id="${post.id}">Curtir (${post.likes})</button>
            <div class="comments">
                <h3>Comentários:</h3>
                <ul>
                    ${post.comments.map(comment => `<li>${comment}</li>`).join('')}
                </ul>
                <form class="comment-form" data-id="${post.id}">
                    <label for="comment">Adicionar Comentário:</label>
                    <input type="text" name="comment" required>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        `;
        return postElement;
    }

    // Função para exibir postagens
    function displayPosts() {
        postsContainer.innerHTML = '';
        posts.forEach(post => {
            postsContainer.appendChild(createPost(post));
        });

        // Adicionar eventos de curtidas e comentários
        document.querySelectorAll('.like-button').forEach(button => {
            button.addEventListener('click', function() {
                const postId = parseInt(this.getAttribute('data-id'));
                const post = posts.find(p => p.id === postId);
                post.likes += 1;
                this.textContent = `Curtir (${post.likes})`;
            });
        });

        document.querySelectorAll('.comment-form').forEach(form => {
            form.addEventListener('submit', function(event) {
                event.preventDefault();
                const postId = parseInt(this.getAttribute('data-id'));
                const comment = this.querySelector('input[name="comment"]').value;
                const post = posts.find(p => p.id === postId);
                post.comments.push(comment);
                displayPosts(); // Recarregar postagens
            });
        });
    }

    // Adicionar nova postagem
    postForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const title = this.querySelector('#post-title').value;
        const content = this.querySelector('#post-content').value;
        const newPost = {
            id: posts.length + 1,
            title: title,
            date: new Date().toLocaleDateString(),
            content: content,
            likes: 0,
            comments: []
        };
        posts.push(newPost);
        displayPosts(); // Recarregar postagens
        this.reset();
    });

    // Inicializar postagens
    displayPosts();
});
