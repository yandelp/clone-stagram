const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "handsome devil, aren't i",
        likes: 21,
        liked: false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        liked: false
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        liked: false
    }
]

const _main = document.querySelector("main")

function render(_posts) {
    let pageContent = ""
    for(let i = 0; i < _posts.length; i++) {
        pageContent += `
            <section class="post" data-index="${i}">
                <div class="post-header">
                    <div class="post-avatar-ctn">
                        <img class="avatar-el" src="${_posts[i].avatar}">
                    </div>
                    <div class="post-header-demo">
                        <p class="username"><span class="bold">${_posts[i].name}</span></p>
                        <p class="location">${_posts[i].location}</p>
                    </div>
                </div>
                    <img id="post-img-${i}" class="post-image" src="${_posts[i].post}" alt="Post Image">
                <div class="post-footer">
                    <div class="post-actions">
                        <button class="action-btn like-btn">
                            <img src="images/icon-heart.png" alt="Like button"/>
                        </button>
                        <button class="action-btn">
                            <img src="images/icon-comment.png" alt="Like button"/>
                        </button>
                        <button class="action-btn">
                            <img src="images/icon-dm.png" alt="Like button"/>
                        </button>
                    </div>
                    <p class="likes-count bold">${_posts[i].likes} likes</p>
                    <p class="caption"><span class="username bold">${_posts[i].username}</span>${_posts[i].comment}</p>
                </div>
            </section>
        `
    }

    _main.innerHTML = pageContent
}

render(posts)

function likePost(index) {
    const postEl = document.querySelector(`.post[data-index="${index}"]`)
    const likesCount =  postEl.querySelector(".likes-count")
    const heartImg = postEl.querySelector(".like-btn img")
    const post = posts[index]
    if(!post.liked) {
        post.likes += 1
        post.liked = true
        likesCount
    } else {
        post.likes -= 1
        post.liked = false
    }
    heartImg.src = post.liked ? "images/icon-heart-filled.png" : "images/icon-heart.png"
    likesCount.textContent = `${post.likes} likes`
}

_main.addEventListener("dblclick", function(e) {
    if (e.target.classList.contains("post-image")) {
        const postEl = e.target.closest(".post")
        const index = Number(postEl.dataset.index)
        likePost(index)
    }
})

_main.addEventListener("click", function(e) {
    const likeBtn = e.target.closest(".like-btn")
    if (likeBtn) {
        const postEl = likeBtn.closest(".post")
        const index = Number(postEl.dataset.index)
        likePost(index)
    }
})