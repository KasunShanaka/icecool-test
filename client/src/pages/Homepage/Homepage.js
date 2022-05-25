import React, { useEffect, useState } from 'react';
import style from './Homepage.module.scss';
// import classnames from 'classnames';

//mui imports
import Button from "@mui/material/Button";

import Image1 from '../../img/image1.png';
import Image2 from '../../img/image2.png';
import Image3 from '../../img/image3.png';
import Image4 from '../../img/image4.png';


const Homepage = () => {

  // const [activeCone, setActiveCone] = useState(false);
  const [orderCone, setOrderCone] = useState({
    coneName: "",
    conePrice: 0,
  })
  const [orderFlavor, setOrderFlavor] = useState({
    flavorName: "",
    flavorPrice: 0,
  })
  const [orderToppings, setOrderToppings] = useState({
    toppingName: "",
    toppingPrice: 0,
  })

  useEffect(() => {
  }, [])

  const handleReset = () => {
    setOrderCone({
      coneName: "",
      conePrice: 0,
    })
    setOrderFlavor({
      flavorName: "",
      flavorPrice: 0,
    })
    setOrderToppings({
      toppingName: "",
      toppingPrice: 0,
    })
    console.log(orderCone, orderFlavor, orderToppings)
  }

  const handleCone = (name, price) => {
    if (orderCone.coneName === "") {
      setOrderCone(orderCone.coneName = name)
      setOrderCone(orderCone.conePrice = price)
      console.log(orderCone)
    } else {
      console.log("You Picked ", orderCone)
    }
  }

  const handleFlavor = (name, price) => {
    if (orderFlavor.flavorName === "") {
      setOrderFlavor(orderFlavor.flavorName = name)
      setOrderFlavor(orderFlavor.flavorPrice = price)
      console.log(orderFlavor)
    } else {
      console.log("You Picked ", orderFlavor)
    }
  }

  const handleToppings = (name, price) => {
    if (orderToppings.toppingName === "") {
      setOrderToppings(orderToppings.toppingName = name)
      setOrderToppings(orderToppings.toppingPrice = price)
      console.log(orderToppings)
    } else {
      console.log("You Picked ", orderToppings)
    }
  }

  const toppings = [
    {
      name: "Sprinkles",
      price: 50,
    },
    {
      name: "Toasted Marshmellow",
      price: 100,
    },
    {
      name: "Toasted Almond Flakes",
      price: 150,
    },
    {
      name: "Dash of Peanut butter",
      price: 50,
    },
    {
      name: "Oreo Crumbles",
      price: 60,
    },
    {
      name: "Dried Apples",
      type: "Dried Fruit",
      price: 25,
    },
    {
      name: "Dried Mango",
      type: "Dried Fruit",
      price: 30,
    },
    {
      name: "Dried Apricot",
      type: "Dried Fruit",
      price: 40,
    },
    {
      name: "Blueberry",
      type: "Dried Fruit",
      price: 45,
    },
  ]

  const flavors = [
    {
      name: "Raspberry Slushy",
      price: 200,
    },
    {
      name: "Coco coffee",
      price: 350,
    },
    {
      name: "Nutty Fruit",
      price: 150,
    },
    {
      name: "Pistachio Delight",
      price: 350,
    },

  ]

  const cones = [
    {
      name: "Wafer cone",
      price: 200,
      image: Image1,
    },
    {
      name: "Waffle cone",
      price: 350,
      image: Image2,
    },
    {
      name: "Waffle bowl",
      price: 150,
      image: Image3,
    },
    {
      name: "Ice cream sandwich wafers",
      price: 350,
      image: Image4,
    },
  ]

  return (
    <div className={style.container}>
      <nav className={style.header}>
        Pick a Cone
      </nav>
      <section className={style.coneSection}>
        {
          cones.map((i, j) => (
            <div key={j} className={style.coneCards} onClick={() => handleCone(i.name, i.price)}>
              <div className={style.name}>
                {i.name}
              </div>
              <div className={style.coneImage}>
                <img src={i.image} alt="" />
              </div>
              <div className={style.price}>
                Rs.{i.price}
              </div>
            </div>
          ))
        }
      </section>
      <nav className={style.header}>
        Select your Flavor
      </nav>
      <section className={style.flavors} >
        {
          flavors.map((i, j) => (
            <div key={j} className={style.flavorCards} onClick={() => handleFlavor(i.name, i.price)}>
              <div className={style.name}>
                {i.name} -
              </div>
              <div className={style.price}>
                Rs.{i.price}
              </div>
            </div>
          ))
        }
      </section>
      <nav className={style.header}>
        Add toppings
      </nav>
      <section className={style.toppings}>
        {
          toppings.map((i, j) => (
            <div key={j} className={style.toppingsCard} onClick={() => handleToppings(i.name, i.price)}>
              <span className={style.name}>
                {i.name} -
              </span>
              <span className={style.price}>
                Rs.{i.price}
              </span>
              <div className={style.type}>
                {i.type}
              </div>
            </div>

          ))
        }
      </section>
      <div className={style.resetButton}>
        <Button
          onClick={() => handleReset()}
          variant='contained'
        >
          Reset
        </Button>
      </div>
    </div>
  )
}

export default Homepage