const data = {
    burgers: [
        {
            name: 'super burger',
            img: 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/black_and_blue_burger_95881_16x9.jpg',
            price:100
        },
        {
            name: 'pro burger',
            img: 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Cheeseburger-3d7c922.jpg',
            price:150
        },
        {
            name: 'extra burger',
            img: 'https://mcdonalds.com.au/sites/mcdonalds.com.au/files/MCD_Category_Burgers_375x268.png',
            price:180
        },
    ],
    pizzas: [
        {
            name: 'italian pizza',
            img: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/7b/99/6f/pizzas-de-ate-40cm-com.jpg',
            price:300
        },
        {
            name: 'meat pizza',
            img: 'https://media-cdn.tripadvisor.com/media/photo-s/1d/74/13/63/pizzas-garage-medellin.jpg',
            price:400
        },

    ],
    drinks: [
        {
            name: 'pivo',
            img: 'https://media-cdn.tripadvisor.com/media/photo-s/11/b9/6d/b0/nase-rezane-pivo.jpg',
            price:500
        },
        {
            name: 'vino',
            img: 'https://www.tastingtable.com/img/gallery/the-best-way-to-drink-chilled-red-wine/l-intro-1660412521.jpg',
            price:1000
        },
        {
            name: 'vodka',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4zJnVB3ClNwB4qV_mSiepqNfI6eQaidjLyw&usqp=CAU',
            price:2000
        },
        {
            name: 'tequila',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_FnYASy60LXK2iwxu01N6oBpKKEwJ4d6DKg&usqp=CAU',
            price:3000
        },
    ]
}

const burgers = data.burgers
const pizzas = data.pizzas
const drinks = data.drinks
const all = [...burgers,...pizzas,...drinks]



const categories = (data) =>{
    console.log(data);
    const output = document.querySelector('.output')
    output.innerHTML=''
    data.forEach(el=>{
        const col = document.createElement('div')
        const box = document.createElement('div')
        const img = document.createElement('img')
        const name = document.createElement('p')
        const price = document.createElement('p')

        col.className='col-4'
        box.className='categories__box'

        img.src=el.img
        name.textContent=el.name
        price.textContent=el.price


        box.append(img,name,price)
        col.append(box)
        output.append(col)
    })
}
categories(all)


const categoryChoise = [
    {
        title:'all',
        data:all
    },
    {
        title:'burgers',
        data:burgers
    },
    {
        title:'pizzas',
        data:pizzas
    },
    {
        title:'drinks',
        data:drinks
    }
]

const clickOnButtonRenderCategory = () =>{
   const categoryOutput = document.querySelector('.categories__choise')
    categoryChoise.forEach(el=>{
        console.log(el);
        const button = document.createElement('button')
        button.className='btn'
         button.textContent=el.title
         button.addEventListener('click',()=>{
            categories(el.data)
         })

    categoryOutput.append(button)
   })
}
clickOnButtonRenderCategory()


const activeButton = () =>{
    const buttons = document.querySelectorAll('.btn')
    // console.log(buttons);
  
    for(let i = 0;i<buttons.length;i++){
       buttons[i].addEventListener('click',()=>{
        //  buttons[i].classList.add('active')
  
        for(let k=0;k<buttons.length;k++){
            console.log('parent: '+i,'child: '+k);
            // console.log(k);
            if(i===k){
                buttons[k].classList.add('active')
            }else{
                buttons[k].classList.remove('active')
            }
        }
       })
    }
}
activeButton()

const searchItems = () =>{
    const input = document.querySelector('input')
    const search = document.querySelector('.search')
    search.addEventListener('click',()=>{
        const filteredArray = all.filter(el=>{
            return el.name.includes(input.value)
        })
        categories(filteredArray)

    })

}
searchItems()

// 'pro burger' <input>

// array.forEach((el,index)=>{

// })

// for(let i = 0;i<array.length;i++){
//     array[i] - el 
//     i - index
// }

const dataAlt = [
 
        {
            name: 'super burger',
            img: 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/black_and_blue_burger_95881_16x9.jpg',
            price:100,
            category:'burgers'
        },
        {
            name: 'pro burger',
            img: 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Cheeseburger-3d7c922.jpg',
            price:150,
            category:'burgers'
        },
        {
            name: 'extra burger',
            img: 'https://mcdonalds.com.au/sites/mcdonalds.com.au/files/MCD_Category_Burgers_375x268.png',
            price:180,
            category:'burgers'
        },
        {
            name: 'italian pizza',
            img: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/7b/99/6f/pizzas-de-ate-40cm-com.jpg',
            price:300,
            category:'pizzas'
        },
        {
            name: 'meat pizza',
            img: 'https://media-cdn.tripadvisor.com/media/photo-s/1d/74/13/63/pizzas-garage-medellin.jpg',
            price:400,
            category:'pizzas'
        },
        {
            name: 'pivo',
            img: 'https://media-cdn.tripadvisor.com/media/photo-s/11/b9/6d/b0/nase-rezane-pivo.jpg',
            price:500,
            category:'drinks'
        },
        {
            name: 'vino',
            img: 'https://www.tastingtable.com/img/gallery/the-best-way-to-drink-chilled-red-wine/l-intro-1660412521.jpg',
            price:1000,
            category:'drinks'
        },
        {
            name: 'vodka',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4zJnVB3ClNwB4qV_mSiepqNfI6eQaidjLyw&usqp=CAU',
            price:2000,
            category:'drinks'
        },
        {
            name: 'tequila',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_FnYASy60LXK2iwxu01N6oBpKKEwJ4d6DKg&usqp=CAU',
            price:3000,
            category:'drinks'
        },
    ]

