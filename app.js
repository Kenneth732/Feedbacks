const input = document.querySelectorAll('input, textarea');
const form = document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  formValidation();
});
let posts = document.getElementById('posts');

let formValidation = () => {
  let msg = document.getElementById('msg');
  if (input[0].value === "" || input[1].value === "" || input[2].value === "") {
    msg.innerHTML = 'Please fill in all fields';
  } else {
    msg.innerHTML = "";
    acceptData();
  }
  input.forEach(item => item.value = "");
}
let acceptData = () => {
  let dataObj = {
    blogTitle: input[0].value,
    username: input[1].value,
    blogContent: input[2].value
  };
  createPost(dataObj);
}

let createPost = (data) => {
  let post = document.createElement('div');
  post.innerHTML = `
    <div id="">
      <h3>${data.blogTitle}</h3>
      <p>by ${data.username}</p>
      <p>${data.blogContent}</p>
    </div>
  `;
  posts.prepend(post);
}






























// const input = document.querySelectorAll('input, textarea');
// const form = document.getElementById('form').addEventListener('submit', (e) => {
//   e.preventDefault();
//   formValidation();
// });

// let posts = document.getElementById('posts');

// let formValidation = () => {
//   let msg = document.getElementById('msg');
//   if (input[0].value === "" || input[1].value === "" || input[2].value === "") {
//     msg.innerHTML = 'Please fill in all fields';
//   } else {
//     msg.innerHTML = "Your post has been submitted!";
//     acceptData();
//   }
//   input.forEach(item => item.value = "");
// };

// let dataObj = {};

// let acceptData = () => {
//   dataObj['blogTitle'] = input[0].value;
//   dataObj['username'] = input[1].value;
//   dataObj['blogContent'] = input[2].value;
//   createPosts();
// };

// let createPosts = () => {
//   posts.innerHTML += `
//     <div class="post">
//       <h2>${dataObj.blogTitle}</h2>
//       <p>By ${dataObj.username}</p>
//       <p>${dataObj.blogContent}</p>
//     </div>
//   `;
// };
