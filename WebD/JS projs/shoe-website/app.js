const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];
  


const wrapper = document.querySelector('.sliderWrapper');
const menuItems = document.querySelectorAll('.menuItem');


let choosenPro = products[0];
const curproImg = document.querySelector('.productImg')
const curproTitle = document.querySelector('.productTitle')
const curproPrice = document.querySelector('.productPrice')
const curproColor = document.querySelectorAll('.color')
const curproSize = document.querySelectorAll('.size')

menuItems.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        //change cur slider
        wrapper.style.transform = `translateX(${-100*index}vw)`;
        //change the choosen product
        choosenPro=products[index];
        //change texts of curr product
        curproTitle.textContent=choosenPro.title;
        curproPrice.textContent='$' + choosenPro.price;
        curproImg.src = choosenPro.colors[0].img;


        // assign new colors
        curproColor.forEach((color,index)=>{
            color.style.backgroundColor=choosenPro.colors[index].code;
        });
    });
});



curproColor.forEach((color,index)=>{
    color.addEventListener("click", () => {
        curproImg.src = choosenPro.colors[index].img;
    });
});



curproSize.forEach((size,index)=>{
    size.addEventListener('click', ()=>{
        curproSize.forEach((size)=>{
            size.style.backgroundColor = 'white';
            size.style.color = 'black';
        })
        size.style.backgroundColor = 'black';
        size.style.color = 'white';
    });
});

const productButton = document.querySelector('.productBtn');
const payment = document.querySelector('.payment');
const close = document.querySelector('.close');

productButton.addEventListener('click',()=>{
    payment.style.display = 'flex'
})

close.addEventListener('click',()=>{
    payment.style.display = 'none'
})