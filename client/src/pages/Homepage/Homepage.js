import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './Homepage.module.scss';
// import classnames from 'classnames';

//mui imports
import Button from "@mui/material/Button";

//image imports
import Image1 from '../../img/image1.png';
import Image2 from '../../img/image2.png';
import Image3 from '../../img/image3.png';
import Image4 from '../../img/image4.png';


const Homepage = () => {

  const [totalPrice, setTotalPrice] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
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
    type: ""
  })

  // useEffect(()=> {

  // },[])

  const handleReset = () => {
    setErrorMsg("");
    setTotalPrice(0);
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
      type: ""
    })
    console.log(orderCone, orderFlavor, orderToppings)
  }

  const handleSubmit = async () => {
    if (orderCone.coneName === "" || orderFlavor.flavorName === "" || orderToppings.toppingName === "") {
      console.log("You haven't select any item")
    } else {
      var { data } = await axios.post("http://localhost:5000", {
        orderCone,
        orderFlavor,
        orderToppings,
      })
        .catch(error => {
          console.log(error.response.data.message)
          setErrorMsg(error.response.data.message)
        });
      handleReset();
    }
    setTotalPrice(data.totalPrice)
  }

  const handleCone = (name, price) => {
    if (orderCone.coneName === "" || orderCone.conePrice === "") {
      setOrderCone({
        coneName: name,
        conePrice: price,
      })
      console.log(orderCone)
    } else {
      console.log("You Picked ", orderCone)
    }
  }

  const handleFlavor = (name, price) => {
    if (orderFlavor.flavorName === "" || orderFlavor.flavorPrice === "") {
      setOrderFlavor({
        flavorName: name,
        flavorPrice: price,
      })
      console.log(orderFlavor)
    } else {
      console.log("You Picked ", orderFlavor)
    }
  }

  const handleToppings = (name, price, type) => {
    if (orderToppings.toppingName === "" || orderToppings.toppingPrice === 0) {
      setOrderToppings({
        toppingName: name,
        toppingPrice: price,
        type: type,
      })
      // setOrderToppings(orderToppings.toppingPrice = price)
      console.log(orderToppings)
    } else {
      console.log("You already picked = ", orderToppings)
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
            <div key={j} className={style.toppingsCard} onClick={() => handleToppings(i.name, i.price, i.type)}>
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
      <div className={style.buyButton}>
        <Button
          onClick={() => handleSubmit()}
          variant='contained'
          type='handleSubmit'
        >
          Buy
        </Button>
      </div>
      <div className={style.totalPrice}>
        Total Price - {totalPrice}
      </div>
      <div className={style.error}>
        Error Message - {errorMsg}
      </div>
    </div>
  )
}

export default Homepage