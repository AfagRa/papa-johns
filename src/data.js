export const data = {
  sizes: {
    xs: "Mini, 6sm",
    sm: "Kiçik, 23sm",
    md: "Orta, 30sm",
    lg: "Böyük, 35sm",
    xl: "Ekstra böyük, 40sm"
  },

  pizzas: [
    {
      id: 1,
      name: 'Çiken Ranç',
      img: 'cikenRanc.jpg',
      desc: 'Ranç sousu, qril toyuğu, pomidor, mozzarella',
      filter: ['chicken'],
      prices: { xs:6, sm: 11, md: 17, lg: 22 }
    },
    {
      id: 2,
      name: 'Marqarita',
      img: 'Marqarita.jpg',
      desc: 'Pizza sousu, ekstra mozzarella, pomidor, oreqano',
      filter: ['vegetarian', 'classic'],
      prices: { xs:6, sm: 8, md: 13, lg: 16 }
    },
    {
      id: 3,
      name: '4 Pendir',
      img: '4pendir.jpg',
      desc: 'Pizza sousu, mozzarella, feta, parmezan və cheddar pendirləri',
      filter: ['vegetarian', 'cheese'],
      prices: { sm: 11, md: 16, lg: 22 }
    },
    {
      id: 4,
      name: 'Qarışıq ət',
      img: 'qarishiqEt.jpg',
      desc: 'Pizza sousu, mal əti, pepperoni, italyan sosisi, vetçina, mozzarella',
      filter: ['meat', 'premium'],
      prices: { sm: 14, md: 22, lg: 29 }
    },
    {
      id: 5,
      name: 'NY Style Pizza Marqarita',
      img: 'NYpepperoni.jpg',
      desc: 'Pizza sousu, pepperoni, mozzarella',
      filter: ['meat', 'classic'],
      prices: { xl: 23 }
    },
    {
      id: 6,
      name: 'Star Marqarita',
      img: 'starMarqarita.jpg',
      desc: 'Ulduz kənar, mozzarella və pomidor sousu',
      filter: ['vegetarian', 'star', 'premium'],
      prices: { md: 14 }
    },
    {
      id: 7,
      name: 'Star Classic Pepperoni',
      img: 'starPepperoni.jpg',
      desc: 'Ulduz kənar, pepperoni, mozzarella',
      filter: ['meat', 'star', 'premium'],
      prices: { md: 15 }
    },
    {
      id: 8,
      name: 'Star Western BBQ',
      img: 'starWesternBBQ.jpg',
      desc: 'Ulduz kənar, BBQ sousu, mal əti, soğan, mozzarella',
      filter: ['meat', 'star', 'premium', 'bbq'],
      prices: { md: 17}
    },
    {
      id: 9,
      name: 'Star Chicken BBQ',
      img: 'starChickenBBQ.jpg',
      desc: 'Ulduz kənar, qril toyuğu, BBQ sousu, mozzarella',
      filter: ['chicken', 'star', 'premium', 'bbq'],
      prices: { md: 17 }
    },
    {
      id: 10,
      name: 'BBQ Chicken',
      img: 'bbqChicken.jpg',
      desc: 'BBQ sousu, qril toyuğu, pomidor, mozzarella',
      filter: ['chicken', 'bbq'],
      prices: { sm: 14, md: 20, lg: 26 }
    },
    {
      id: 11,
      name: 'Italian Sausage',
      img: 'italianSausage.jpg',
      desc: 'Pizza sousu, italyan sosisi, mozzarella',
      filter: ['meat', 'classic'],
      prices: { sm: 13, md: 19, lg: 25 }
    },
    {
      id: 12,
      name: 'Greek',
      img: 'greek.jpg',
      desc: 'Pizza sousu, feta, zeytun, pomidor, mozzarella',
      filter: ['vegetarian', 'mediterranean'],
      prices: { sm: 8, md: 13, lg: 18 }
    },
    {
      id: 13,
      name: 'Hawaiian',
      img: 'hawaiian.jpg',
      desc: 'Pizza sousu, ananas, vetçina, mozzarella',
      filter: ['meat', 'sweet'],
      prices: { xs:6, sm: 10, md: 18, lg: 23 }
    },
    {
      id: 14,
      name: 'Veggie Delight',
      img: 'veggieDelight.jpg',
      desc: 'Pizza sousu, göbələk, bibər, soğan, pomidor, mozzarella',
      filter: ['vegetarian', 'healthy'],
      prices: { sm: 9, md: 13, lg: 18 }
    },
    {
      id: 15,
      name: 'Spicy Pepperoni',
      img: 'spicyPepperoni.jpg',
      desc: 'Pizza sousu, pepperoni, acılı sous, mozzarella',
      filter: ['meat', 'spicy'],
      prices: { sm: 14, md: 20, lg: 26 }
    },
    {
      id: 16,
      name: 'Spicy Italian',
      img: 'spicyItalian.jpg',
      desc: 'Pizza sousu, italyan sosisi, pepperoni, pul bibər, mozzarella',
      filter: ['meat', 'spicy'],
      prices: { sm: 15, md: 21, lg: 27 }
    },
    {
      id: 17,
      name: 'Crispy Cheese Spaysi İtalyan',
      img: 'crispyCheese.jpg',
      desc: 'Pizza sousu, Ekstra İtalyan sosisi, Pepperoni, Panko Mozzarella, Pul bibər',
      filter: ['meat', 'spicy', 'premium', 'cheese'],
      prices: { sm: 16, md: 22, lg: 28 }
    },
    {
      id: 18,
      name: 'Çiken Göbələk',
      img: 'chickenMushroom.jpg',
      desc: 'Göbələk sousu, Qril toyuğu, Turşu xiyar, Göbələk, Mozzarella',
      filter: ['chicken'],
      prices: { sm: 14, md: 20, lg: 26 }
    },
    {
      id: 19,
      name: 'Papa Miks',
      img: 'papaMiks.jpg',
      desc: 'Çiken Barbekyu, Hot & Spaysi, Marqarita, Klassik Pepperoni',
      filter: ['meat', 'chicken', 'spicy', 'premium'],
      prices: { lg: 32 }
    },
    {
      id: 20,
      name: 'Çiken Baffalo',
      img: 'chickenBuffalo.jpg',
      desc: 'Ranç Sousu, Çiken poppers, Vetçina, Mozzarella, Baffalo Sousu',
      filter: ['chicken', 'spicy'],
      prices: { sm: 15, md: 21, lg: 27 }
    },
    {
      id: 21,
      name: 'Klassik Pepperoni',
      img: 'classicPepperoni.jpg',
      desc: 'Pizza sous, Pepperoni, Ekstra Mozzarella',
      filter: ['meat', 'classic'],
      prices: { sm: 12, md: 18, lg: 24 }
    },
    {
      id: 22,
      name: 'Karnaval',
      img: 'Carnaval.jpg',
      desc: 'Pizza Sous, Göbələk, Qara Zeytun, Pepperoni, Mozzarella',
      filter: ['meat'],
      prices: { sm: 13, md: 19, lg: 25 }
    },
    {
      id: 23,
      name: 'Cheddar Dabl Burger',
      img: 'cheddarDoubleBurger.jpg',
      desc: '1000 ada sousu, Mal əti, Pomidor, Mozzarella, Cheddar',
      filter: ['meat', 'cheese', 'premium'],
      prices: { sm: 16, md: 22, lg: 28 }
    },
    {
      id: 24,
      name: 'Cheddar Çiken Club',
      img: 'cheddarChickenClub.jpg',
      desc: 'Pizza sousu, Qril toyuğu, Pomidor, Vetçina, Mozzarella, Cheddar, Ranç sousu',
      filter: ['chicken', 'cheese', 'premium'],
      prices: { sm: 15, md: 21, lg: 27 }
    },
    {
      id: 25,
      name: 'Qarışıq Ət BBQ',
      img: 'qarishiqEtBBQ.jpg',
      desc: 'BBQ Sousu, Mal əti, Pepperoni, İtalyan Sosisi, Vetçina, Mozzarella',
      filter: ['meat', 'bbq', 'premium'],
      prices: { sm: 17, md: 23, lg: 29 }
    }
  ],

  snacks: [
    {
      id: 1,
      name: "Kalzone Pepperoni və İtalyan sosisi",
      img: "kalzone-pepperoni.jpg",
      desc: "Pepperoni, İtalyan Sosisləri, Sarımsaq Sousu, Mozzarella + 1 ədəd Pizza sousu",
      price: 6
    },
    {
      id: 2,
      name: "Kalzone Qril Toyuğu və Göbələk",
      img: "kalzone-gril.jpg",
      desc: "Qril Toyuğu, Göbələk, Sarımsaq Sousu, Mozzarella + 1 ədəd Pizza sousu",
      price: 6
    },
    {
      id: 3,
      name: "Cheddar Pendirli Çubuqlar",
      img: "cheddar-sticks.jpg",
      desc: "14 Ədəd | Sarımsaq sousu, Mozzarella, Cheddar. + 1 ədəd Pizza sousu və 1 ədəd Sarımsaq sousu",
      price: 9
    },
    {
      id: 4,
      name: "Cheddar Rolls",
      img: "cheddar-rolls.jpg",
      desc: "8 Ədəd | Çeddar, Sarımsaq sousu + 1 ədəd Pizza sousu",
      price: 9
    },
    {
      id: 5,
      name: "Pendirli mütəkkələr",
      img: "pendir-mutekke.jpg",
      desc: "8 Ədəd | Strinq pendiri, Sarımsaq sousu, Parmezan. + 1 ədəd Pizza sousu və 1 ədəd Sarımsaq sousu",
      price: 10
    },
    {
      id: 6,
      name: "Pendirli Çubuqlar",
      img: "pendir-cubuq.jpg",
      desc: "14 Ədəd | + 1 ədəd Pizza sousu",
      price: 7
    },
    {
      id: 7,
      name: "Küncütlü Pendirli Çubuqlar",
      img: "kuncutlu-cubuq.jpg",
      desc: "14 Ədəd | Mozzarella, Küncüt + 1 ədəd Sarımsaq sousu",
      price: 8
    },
    {
      id: 8,
      name: "Çiken Poppers",
      img: "ciken-poppers.jpg",
      desc: "100% toyuq döş əti + 1 ədəd Pizza sousu",
      price: 7
    },
    {
      id: 9,
      name: "Çiken Rolls",
      img: "ciken-rolls.jpg",
      desc: "8 Ədəd | Qril Toyuq, Turşu Xiyar, Mozzarella, Ranç Sousu + 1 ədəd Pizza sousu",
      price: 9
    },
    {
      id: 10,
      name: "Toyuq qanadlari 7 ədəd",
      img: "ciken-wings.jpg",
      desc: "Barbekyu və ya Baffalo sousu ilə",
      price: 10
    },
    {
      id: 11,
      name: "Kartof Dilimləri",
      img: "kartof-dilim.jpg",
      desc: "1 ədəd Pizza sousu",
      price: 4.90
    },
    {
      id: 12,
      name: "Acılı Çiken Rolls",
      img: "acili-ciken-rolls.jpg",
      desc: "8 Ədəd | Qril Toyuq, Halapeno Bibəri, Mozzarella Pendiri, Ranç sousu + 1 ədəd Pizza sousu",
      price: 9
    },   
  ]
};