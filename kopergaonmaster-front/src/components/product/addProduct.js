import React, { useState, useEffect } from 'react';
import { Formik, useField, useFormikContext } from 'formik';
import {Button, Form} from 'react-bootstrap';
import * as Yup from 'yup';
import styled from 'styled-components';
import {getCategories} from './ProductService';

//
import CONTAINER from '../../shared/container';
import BUTTON from '../../shared/button';
import MYFORM from '../../shared/form';
const categoriesarr=getCategories;
const validationSchema = Yup.object().shape({
    name: Yup.string()
    .min(2, "*Service Name must have at least 2 characters")
    .max(100, "*Service Name can't be longer than 100 characters")
    .required("*Service Name is required"),
    description: Yup.string()
    .min(20, "*Description must have at least 2 characters")
    .required("*Description is required"),
    price: Yup.string()
    .required("*Price is required"),
    quantity: Yup.string()
    .required("*Quantity is required")
  });

 


const addProduct=()=> {
    console.log(getCategories());
  const initialValues = { 
    name:"",
    description:"",
    price:"",
    quantity:"",
    categories:getCategories(), 
    category:"",
    photo:"",
    shipping:"",
    loading:false,
    error:"",
    createdProduct:"",
    redirectToProfile:false,
    formData:""
  };
  return (
      <CONTAINER>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async values => alert(JSON.stringify(values, null, 2))
        }
      >
          
        {( {values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit }) => (
            
      <Form className="mx-auto"  onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Service Name :</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Service Name"
            /* Set onChange to handleChange */
            onChange={handleChange}
            /* Set onBlur to handleBlur */
            onBlur={handleBlur}
            /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
            value={values.name}
            /* Check if the name field (this field) has been touched and if there is an error, if so add the .error class styles defined in the CSS (make the input box red) */
   className={touched.name && errors.name ? "error" : null}
            />
           
            {touched.name && errors.name ? (
                <div className="error-message">{errors.name}</div>
              ): null}
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description :</Form.Label>
          <Form.Control
            type="text"
            name="description"
            placeholder="Description"
            /* Set onChange to handleChange */
            onChange={handleChange}
            /* Set onBlur to handleBlur */
            onBlur={handleBlur}
            /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
            value={values.description}
            className={touched.description && errors.description ? "error" : null}
          />
          {touched.description && errors.description ? (
                <div className="error-message">{errors.description}</div>
              ): null}
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Price :</Form.Label>
          <Form.Control
            type="text"
            name="price"
            placeholder="Price"
            /* Set onChange to handleChange */
            onChange={handleChange}
            /* Set onBlur to handleBlur */
            onBlur={handleBlur}
            /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
            value={values.price}
            className={touched.price && errors.price ? "error" : null}
            />
            {touched.price && errors.price ? (
                <div className="error-message">{errors.price}</div>
              ): null}
        </Form.Group>
        <Form.Group controlId="quantity">
          <Form.Label>Quantity :</Form.Label>
          <Form.Control
            type="text"
            name="quantity"
            placeholder="quantity"
            /* Set onChange to handleChange */
            onChange={handleChange}
            /* Set onBlur to handleBlur */
            onBlur={handleBlur}
            /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
            value={values.quantity}
            className={touched.quantity && errors.quantity ? "error" : null}
            />
            {touched.quantity && errors.quantity ? (
                <div className="error-message">{errors.quantity}</div>
              ): null}
        </Form.Group>
        <Form.Group controlId="category">
          <Form.Label>category :</Form.Label>
          
             <Form.Control as="select">
      <option>1</option>
      
    </Form.Control>
        </Form.Group>
        <Form.Group controlId="photo">
          <Form.Label>photo :</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            placeholder="photo"
            /* Set onChange to handleChange */
            onChange={handleChange}
            /* Set onBlur to handleBlur */
            onBlur={handleBlur}
            /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
            value={values.photo}
            />
            <Form.File id="photo" label="Select Service Photo" />
        </Form.Group>
        <BUTTON variant="primary"  type="submit" onSubmit={handleSubmit}> 
          Submit
        </BUTTON>
      </Form>
          )}
      </Formik>
      </CONTAINER>
  );
}

export default addProduct;
