var postInput = document.getElementById("postInput");
var postsContainer = document.getElementById("postsContainer");

function addBtn() {
    if (postInput.value === "") {
        alert("Please write something!");
        return;
    }
    
    var newPost = document.createElement("div");
    newPost.setAttribute("class", "post-card"); 

    var postText = document.createElement("p");
    postText.setAttribute("class", "post-content"); 
    postText.innerText = postInput.value;

    var btnContainer = document.createElement("div");
    btnContainer.setAttribute("class", "action-buttons"); 

    var editBtn = document.createElement("button");
    editBtn.setAttribute("class", "edit-btn"); 
    editBtn.innerText = "Edit";

    var deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "delete-btn"); 
    deleteBtn.innerText = "Delete";

    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(deleteBtn);
    newPost.appendChild(postText);
    newPost.appendChild(btnContainer);

    deleteBtn.onclick = function() {
        newPost.remove();
    };

    editBtn.onclick = function() {
        var updatedText = prompt("Edit your post:", postText.innerText);
            postText.innerText = updatedText;
    };

    postsContainer.appendChild(newPost);
    postInput.value = "";
}