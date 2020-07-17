window.addEventListener('load', start);

function start(){
  defineStyleBody();
}

function defineStyleContainer(style) {
  style.marginLeft = 'auto';
  style.marginRight = 'auto';
  style.marginTop = '10px';
  style.marginBottom = '40px';
  style.width = '280px';
  style.backgroundColor = 'rgb(221, 221, 221)';
  style.boxShadow = '5px 8px 20px';
  style.borderRadius = '10px';
  style.paddingTop = '1%';
  style.paddingBottom = '2%';
}

function defineStyleRGBResult(style){
  style.width = '200px';
  style.height = '200px';
  style.marginTop = '25px';
  style.marginLeft = 'auto';
  style.marginRight = 'auto';
  style.boxShadow = '5px 8px 20px';
  style.borderRadius = '50%';
}

function defineStyleInputDisplay(style){
  style.border = 0;
  style.width = '25px';
  style.borderColor = 'transparent';
  style.backgroundColor = 'rgb(221, 221, 221)';
}

function defineStyleCopyButton(style){
  style.fontFamily = 'Arial';
  style.fontWeight = 'bold';
  style.boxShadow = '2px 3px 10px';
  style.paddingLeft ='17px';
  style.paddingRight = '17px';
  style.paddingBottom = '10px';
  style.paddingTop = '12px';  
}

function defineStyleTdName(style, color){
  style.fontFamily = 'Arial';
  style.fontWeight = 'Bold';
  style.color = color;
}

function defineStyleCopyTextContainer(style){
  style.width = '70px';
  style.marginLeft = 'auto';
  style.marginRight = 'auto';
  style.marginTop = '40px';
  style.marginBottom = '4%'; 
}

function defineStyleBody(){
  let {style} = document.body;
    style.marginTop = '20px';
    style.height = '100%';
    style.width = '100%';
}