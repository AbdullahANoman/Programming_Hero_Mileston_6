document.getElementById('apply-btn').addEventListener('click',function(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.backgroundColor = 'lightblue';
    }
})
document.getElementById('center-third').addEventListener('click',function(){
    const thirdFriend = document.getElementById('third-friend');
    thirdFriend.style.textAlign= 'center'
})

document.getElementById('add-friend').addEventListener('click',function(){
       const friendContainer = document.getElementById('friends');
       const friend = document.createElement('div');
       friend.classList.add('friend')
       friend.innerHTML = `
       <h3 class="friend-name " >Friend</h3>
       <p>Reprehenderit nobis nesciunt magni quam.</p>
       `
       friendContainer.appendChild(friend);
})