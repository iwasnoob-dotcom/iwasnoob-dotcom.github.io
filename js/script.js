function keyIn() {
  alert('Zawoorldo');
}


function clickme() {
  const img = document.createElement("img");
  img.src = "/res/img/wallhaven-orange_sun_1920x1080.png";
  img.alt = "Orange Sun";
  img.clientWidth = "300"
  img.clientHeight = "300"
  return document.body ? document.body.appendChild(img) : document.body.appendChild(img);

}

function submit() {
  const s = document.getElementsByTagName("button");
  return alert(s);

}

function onClickSearch() {
  const item = document.getElementById("item-to-search").value;
  const searchTool = `https://google.com/search?q=${item}`;
  window.location = searchTool;

}
