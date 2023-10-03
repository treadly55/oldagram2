const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

//assign container area 
const tileSection = document.getElementById("content-container")

function postTile () {
    let tilesHTML = ''
    //loop through array and publish content contained in backticks//
    for(let i=0; i < posts.length; i++) {
        tilesHTML +=
            `<div class="tile" id="${i}" data-id="${i}">
    <div class="tile-info">
    <div class="post-avatar"><img src="${posts[i].avatar}"></div>
    <div class="post-name">
        <p class="username">${posts[i].name}</p> 
        <p class="user-location">${posts[i].location}</p>
    </div>
    </div>

    <div class="tile-image">
    <img src="${posts[i].post}">
    </div>

    <div class="bottom-row"> 
<div class="user-generated">
    <div class="icon-box">

        <svg xmlns="http://www.w3.org/2000/svg" width="108" height="32" viewBox="0 0 108 25" fill="none">
            <mask id="path-1-outside-1_10_28" maskUnits="userSpaceOnUse" x="42.2996" y="0.681152" width="24" height="24" fill="black">
              <rect fill="white" x="42.2996" y="0.681152" width="24" height="24"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M61.5903 19.2124C63.0601 17.564 63.9532 15.3903 63.9532 13.008C63.9532 7.85691 59.7775 3.68115 54.6264 3.68115C49.4754 3.68115 45.2996 7.85691 45.2996 13.008C45.2996 18.159 49.4754 22.3348 54.6264 22.3348C56.3983 22.3348 58.0548 21.8407 59.4656 20.9827L62.0909 21.5459L61.5903 19.2124Z"/>
            </mask>
            
            <path d="M61.5903 19.2124L59.8512 17.6619L59.0641 18.5447L59.3122 19.7011L61.5903 19.2124ZM59.4656 20.9827L59.9543 18.7046L59.0475 18.5101L58.255 18.992L59.4656 20.9827ZM62.0909 21.5459L61.6022 23.824L65.1246 24.5796L64.369 21.0572L62.0909 21.5459ZM61.6233 13.008C61.6233 14.7967 60.9551 16.4237 59.8512 17.6619L63.3294 20.763C65.165 18.7042 66.2832 15.9839 66.2832 13.008H61.6233ZM54.6264 6.01111C58.4907 6.01111 61.6233 9.14371 61.6233 13.008H66.2832C66.2832 6.57011 61.0643 1.35119 54.6264 1.35119V6.01111ZM47.6296 13.008C47.6296 9.14371 50.7622 6.01111 54.6264 6.01111V1.35119C48.1886 1.35119 42.9697 6.57011 42.9697 13.008H47.6296ZM54.6264 20.0048C50.7622 20.0048 47.6296 16.8722 47.6296 13.008H42.9697C42.9697 19.4458 48.1886 24.6647 54.6264 24.6647V20.0048ZM58.255 18.992C57.1987 19.6343 55.9594 20.0048 54.6264 20.0048V24.6647C56.8373 24.6647 58.9109 24.047 60.6763 22.9735L58.255 18.992ZM58.977 23.2609L61.6022 23.824L62.5795 19.2677L59.9543 18.7046L58.977 23.2609ZM64.369 21.0572L63.8685 18.7238L59.3122 19.7011L59.8127 22.0345L64.369 21.0572Z" fill="black" mask="url(#path-1-outside-1_10_28)"/>
            
            <path id="heart-icon" class="heart-shape" d="M3.84587 13.5811L12.7963 23.2159C13.2572 23.712 14.0424 23.712 14.5033 23.2159L23.4537 13.5811C25.9149 10.9318 25.9149 6.63634 23.4537 3.987C20.9926 1.33767 17.0022 1.33767 14.5411 3.987L14.5033 4.02764C14.0424 4.52375 13.2572 4.52375 12.7963 4.02764L12.7585 3.987C10.2974 1.33767 6.30704 1.33767 3.84587 3.987C1.38471 6.63634 1.38471 10.9318 3.84587 13.5811Z" fill="white" stroke="black" stroke-width="2.32996"/>
           
            <path d="M92.658 12.5435L94.8283 22.3097C94.9424 22.8236 95.6255 22.9344 95.8964 22.4831L105.808 5.96445C106.04 5.57621 105.761 5.08228 105.308 5.08228H85.5279C84.9871 5.08228 84.7382 5.75508 85.1488 6.10702L92.658 12.5435ZM92.658 12.5435L105.093 5.70404" stroke="black" stroke-width="2.32996"/>
          </svg>


    </div>

    <p class="likes" id="count">${posts[i].likes.toLocaleString()} likes</p>
    <p class="comment-username"><span class="comment-name">${posts[i].username}</span> ${posts[i].comment}</p>
</div>
    </div>
            </div>`
   //add content to container 
   tileSection.innerHTML = tilesHTML
   }
}
//run the content creation function
postTile()


// function handleTileClick(e) {
//     if (e.target.closest('.heart-shape')) {
//         // Get array position
//         let tile = e.target.closest(".tile");
//         if (tile) {
//             let arrayPosition = tile.getAttribute("data-id");

//             //declare ID to variable
//             let heartIcon = e.target;
//             let hasClass = heartIcon.classList.contains('.heart-filled');

//             //check classes and apply correct set of classes, increment or decrement array value
//             if (hasClass) {

//                 posts[arrayPosition].likes -= 1;
//                 heartIcon.classList.remove('heart-filled');
//                 heartIcon.classList.remove('heart-standard');
//             } else {
//                 posts[arrayPosition].likes += 1;
//                 heartIcon.classList.add('heart-filled');
//                 heartIcon.classList.add('heart-standard');
//                 heartIcon.classList.add('bounce');
//             }

//             // Render to page the updated Likes value
//             let likeElement = tile.querySelector('.likes');
//             if (likeElement) {
//                 likeElement.innerHTML = `${posts[arrayPosition].likes.toLocaleString()} likes`;
//             }
//         }
//     }
// }


function handleTileClick(e) {
    if (e.target.closest('.heart-shape')) {
        // Get array position
        let tile = e.target.closest(".tile");
        if (tile) {
            let arrayPosition = tile.getAttribute("data-id");

            // Declare ID to variable
            let heartIcon = e.target;
            let hasClass = heartIcon.classList.contains('heart-filled');

            // Check classes and apply correct set of classes, increment or decrement array value
            if (hasClass) {
                posts[arrayPosition].likes -= 1;
                heartIcon.classList.remove('heart-filled');
                heartIcon.classList.add('heart-standard');
                heartIcon.classList.remove('bounce');  // Assuming you'd also want to remove the 'bounce' class when the heart isn't filled
            } else {
                posts[arrayPosition].likes += 1;
                heartIcon.classList.add('heart-filled', 'bounce');  // You can add multiple classes at once
                heartIcon.classList.remove('heart-standard');
            }

            // Render to page the updated Likes value
            let likeElement = tile.querySelector('.likes');
            if (likeElement) {
                likeElement.innerHTML = `${posts[arrayPosition].likes.toLocaleString()} likes`;
            }
        }
    }
}

tileSection.addEventListener('click', handleTileClick);
tileSection.addEventListener('tap', handleTileClick);
