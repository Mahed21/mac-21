// const demos=document.getElementById('demos');
const images = document.getElementById('image');
const projectDropdown = document.getElementById('project-dropdown');
const imagesDiv = document.getElementById('image-div');
let toggleImages = false;

const loadImages = () =>{
  images.innerHTML = '';
  images.style.backgroundColor = '#343f52'

  for (i = 0; i < 18; i++) {
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
  
    <div class="card" id="img-card">
      <img src="images/Screenshot${i + 1}.png" class="card-img-top" alt="image of items">
     
   </div>
  
  `
    images.appendChild(div);
  }
  imagesDiv.appendChild(images);
  imagesDiv.style.display = 'none';
}

// Loading the images initially for more smoother experience
loadImages();

const demos = () => {
  //console.log('hi');
  if(!toggleImages){
    toggleImages = true;
    imagesDiv.style.display = 'block';
  }

}
document.getElementById("body").addEventListener("mousemove", (event) => {
  const targetId = event.target.id;
  const targetClass = event.target.className;
  const parentTargetId = event.target.parentNode.id;
  if(targetClass === 'card' || targetClass === 'card-img-top'){
  }
  else if(targetId !== 'image' && targetId !== 'navbar' && targetId !=='demos' && targetId !=='arrow' && parentTargetId !== 'image'){
    toggleImages = false;
    imagesDiv.style.display = 'none';
  }
})
const project = () => {

}

//project dropdown

