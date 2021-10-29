const products = [

  {
    id: 1,
    name: "Gold-Silver women watch",
    description: "Gold-Silver women watch",
    price: 16.99,
    gender: "women",
    type: "shirt",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBrcncXVehLSpfXExCyhOrvfdfUq_mhjPHAA&usqp=CAU",
    inCart: false,
    category: "clothes"
  },
  {
    id: 2,
    name: "Women Gold watch",
    description: "Women Gold watch",
    price: 4.99,
    gender: "women",
    type: "shirt",
    img: "https://i.pinimg.com/originals/07/3d/0f/073d0f51195fb25b7968adff77404800.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 3,
    name: "Women Rose Gold watch",
    description: "Women Rose Gold watch",
    price: 14.99,
    gender: "women",
    type: "shirt",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjxbqeekN5IRPMnmF1Xx6gMOpYyiCcsvL4Rg&usqp=CAU",
    inCart: false,
    category: "clothes"
  },
  {
    id: 4,
    name: "Women Black watch",
    description: "Women Black watch",
    price: 20.00,
    gender: "women",
    type: "shirt",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAUnnW0xuc7YK8_fjTjjvgLvH4larPZyfO3w&usqp=CAU",
    inCart: false,
    category: "clothes"
  },
  {
    id: 5,
    name: "Women Rose Gold watch",
    description: "Women Rose Gold watch",
    price: 4.99,
    gender: "women",
    type: "shirt",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq68RN9g8JM5771CRjAYfIZsD__A-Sj6WunQ&usqp=CAU",
    inCart: false,
    category: "clothes"
  },
  {
    id: 6,
    name: "Gold-Silver women watch",
    description: "Gold-Silver women watch",
    price: 19.99,
    gender: "women",
    type: "blouse",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGx4tAJw-b5QcuBD_gMEe6EwUvxluqgWLK2w&usqp=CAU",
    inCart: false,
    category: "clothes"
  },
  {
    id: 7,
    name: "Women Rose Gold watch",
    description: "Women Rose Gold watch",
    price: 6.00,
    gender: "women",
    type: "shirt",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxynjWg9GzchGpmLVWvEMg5QdHtONWLf7LuA&usqp=CAU",
    inCart: false,
    category: "clothes"
  },
  {
    id: 8,
    name: "Women silver watch",
    description: "Women silver watch",
    price: 14.99,
    gender: "women",
    type: "shirt",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBp4vUoGqYGQQstEo0aykfsRAEQpq7tV8j2w&usqp=CAU",
    inCart: false,
    category: "clothes"
  },
  {
    id: 9,
    name: "Women Gold watch",
    description: "Women Gold watch",
    price: 20.99,
    gender: "women",
    type: "shirt",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2wJpWDVIrq6u3ZcBGbKafM5oFZK_QpqgRvA&usqp=CAU",
    inCart: false,
    category: "clothes"
  },
  {
    id: 10,
    name: "Women Gold watch",
    description: "Women Gold watch",
    price: 4.99,
    gender: "women",
    type: "shirt",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVJGMEipkZnPHwYC-VyTZ5OXtKvBOGOukjzQ&usqp=CAU",
    inCart: false,
    category: "clothes"
  },
  {
    id: 11,
    name: "Women Gold watch",
    description: "Women Gold watch",
    price: 45.99,
    gender: "women",
    type: "watch",
    img: "https://images.pexels.com/photos/69046/watch-wrist-watch-packshot-time-69046.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
    inCart: false,
    category: "accessories"
  },
  {
    id: 12,
    name: "Women Rose Gold  watch",
    description: "Women Rose Gold watch",
    price: 14.99,
    gender: "women",
    type: "necklace",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3b_i7JNfXbXt67ZYXuZJu4BXsE8_dQpo0qA&usqp=CAU",
    inCart: false,
    category: "accessories"
  },
  {
    id: 13,
    name: "Men Silver watch",
    description: "Men Silver watch",
    price: 10.99,
    gender: "men",
    type: "shirt",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5utyFvGQYJfRqSker5Y_gluLZqUOS6ZApuA&usqp=CAU",
    inCart: false,
    category: "clothes"
  },
  {
    id: 14,
    name: "Men Black watch",
    description: "Men Black watch",
    price: 14.99,
    gender: "men",
    type: "shirt",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDRHHlZ6MYTegHvN_WbdF_jBuly4WuSpDysg&usqp=CAU",
    inCart: false,
    category: "clothes"
  },
  {
    id: 15,
    name: "Men Black watch",
    description: "Men Black watch",
    price: 20.99,
    gender: "men",
    type: "shirt",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2eKCkmIpyHwNa9FEGvLSMsyw7mIZUSd-mZg&usqp=CAU",
    inCart: false,
    category: "clothes"
  },
  {
    id: 16,
    name: "Men Black watch",
    description: "Men Black watch",
    price: 13.99,
    gender: "men",
    type: "shirt",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJIOa3lwXWmDSRrxaMKBEGwirQ6ysDDoNlpQ&usqp=CAU",
    inCart: false,
    category: "clothes"
  },
  {
    id: 17,
    name: "Men Black watch",
    description: "Men Black watch",
    price: 13.99,
    gender: "men",
    type: "tie",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSS_nA2mqJ98X5bUyLLgj9QdqBaqtCARyZJw&usqp=CAU",
    inCart: false,
    category: "accessories"
  },
  {
    id: 18,
    name: "Men Black watch",
    description: "Men Black watch",
    price: 9.99,
    gender: "men",
    type: "shirt",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0AvkuJyYiGl4OWC2LCGvRg1fhkxdH-rLAcw&usqp=CAU",
    inCart: false,
    category: "clothes"
  },
  {
    id: 19,
    name: "Men Black watch",
    description: "Men Black watch",
    price: 35.99,
    gender: "men",
    type: "tie",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXJIzr_vR8arE_vjRbjp0XyZ0fVPNdh3X52Q&usqp=CAU",
    inCart: false,
    category: "accessories"
  },
  {
    id: 20,
    name: "Men Black watch",
    description: "Men Black watch",
    price: 15.99,
    gender: "men",
    type: "tie",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPHhUGR1sHgoDPDa8VJLlA7etf3luNtM6LzQ&usqp=CAU",
    inCart: false,
    category: "accessories"
  },
  {
    id: 21,
    name: "Kids watch",
    description: "Kids watch",
    price: 15.99,
    gender: "kids",
    type: "tie",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-mM116yrttzmkeYc1Rd8dk_5zzyQVzkw0bQ&usqp=CAU",
    inCart: false,
    category: "accessories"
  },
  {
    id: 22,
    name: "Kids watch",
    description: "Kids watch",
    price: 15.99,
    gender: "kids",
    type: "tie",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PetRCkAJJaziVzYy3JCPp0jRBwBVAzX1fg&usqp=CAU",
    inCart: false,
    category: "accessories"
  },
  {
    id: 23,
    name: "Kids watch",
    description: "Kids watch",
    price: 15.99,
    gender: "kids",
    type: "tie",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3P-Xsn1PO8Cyrq6EWL8TDz04KhbGOkL48Kg&usqp=CAU",
    inCart: false,
    category: "accessories"
  },
  {
    id: 24,
    name: "Kids watch",
    description: "Kids watch",
    price: 15.99,
    gender: "kids",
    type: "tie",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdney94tbZm_VZplhmq7d5_aN1_Fa5zYtq4w&usqp=CAU",
    inCart: false,
    category: "accessories"
  },
];

export default products;
