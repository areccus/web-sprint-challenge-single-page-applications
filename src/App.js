import './App.css';
import {Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home"
import Builder from "./Components/Builder";
import axios from "axios"
import React, { useEffect, useState } from "react"

import * as yup from 'yup'
import schema from './validation/formSchema'

const initialFormValues = {
  name: "",
  size: "",
  ham: false,
  pepperoni: false,
  bacon: false,
  chicken: false,
  pineapple: false,
  sausage: false, 
  peppers: false,
  more: ""
}
const initialErrors = {
  name: "",
  size: "",
  more: "",

}
const initialPizza = []
const initialDisabled = true;

const App = () => {

  const [pizza, setPizza] = useState(initialPizza)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setformErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(initialDisabled)


  const getPizzas = () => {
    axios.get('https://reqres.in/api/orders')
      .then(res => {
        setPizza(res.data);
      })
      .catch(err => console.error(err))
  }
  const postNewPizza = newPizza => {
    axios.post(`https://reqres.in/api/orders`, newPizza)
      .then(res => {
        setPizza([res.data, ...pizza])
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setformErrors({ ...formErrors, [name]: "" }))
      .catch(err => setformErrors({ ...formErrors, [name]: err.formErrors[0] }))
  }
  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const formSubmit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      more: [
        'ham',
        'pepperoni',
        'bacon',
        'chicken',
        'pineapple',
        'sausage', 
        'peppers',].filter(pizza => formValues[pizza])
    }
    postNewPizza(newPizza)
  }

  useEffect(() => {
    getPizzas()
  }, [])

  useEffect(() => {
    schema.isValid(formValues).then(valid =>
      setDisabled(!valid)
    )
  }, [formValues])



  return (
    <div className="app">
    <nav>
      <h1>Lambda Eats</h1>
      <div className="nav-links">
      <Link to='/'>Home</Link>
      <Link to='/pizza'>Order</Link>
      </div>
    </nav>
    

    <Switch>
      <Route path='/'>
        <Home />
      </Route>
      <Route path='/pizza'>
        <Builder 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
        />
      </Route>
    </Switch>
    </div>
  )
};
export default App;