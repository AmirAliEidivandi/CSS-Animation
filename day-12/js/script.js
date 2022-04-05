const container = document.querySelector('.blogs')

const renderPost = async () => {
    let url = "http://localhost:3000/posts";

    const res = await fetch(url)
    const posts = await res.json()
    
    let template = ''
    posts.forEach(post => {
        template += `
            <div class="post">
                <h2>${post.title}</h2>
                <p><samll>${post.likes} likes</samll></p>
                <p>${post.body.slice(0, 200)}</p>
                <a href="./detail.html?id=${post.id}">read more...</a>
            </div>
        `;
    })

    container.innerHTML = template
}

window.addEventListener('DOMContentLoaded', () => renderPost())