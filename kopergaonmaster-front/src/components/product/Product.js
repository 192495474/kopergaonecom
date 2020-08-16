import React from 'react';
import {Formik} from 'formik';
import {Button, Form} from 'react-bootstrap';
import * as Yup from 'yup';
import styled from 'styled-components';
//shared components
//import CONTAINER from '../../shared/container';
//import BUTTON from '../../shared/button';
//import MYFORM from '../../shared/form';

const CONTAINER = styled.div`
  background: #F7F9FA;
  height: auto;
  width: 90%;
  margin: 5em auto;
  color: snow;
  -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);

  @media(min-width: 786px) {
    width: 60%;
  }

  label {
    color: #24B9B6;
    font-size: 1.2em;
    font-weight: 400;
  }

  h1 {
    color: #24B9B6;
    padding-top: .5em;
  }

  .form-group {
    margin-bottom: 2.5em;
  }
  .error {
    border: 2px solid #FF6565;
  }
  .error-message {
    color: #FF6565;
    padding: .5em .2em;
    height: 1em;
    position: absolute;
    font-size: .8em;
  }
`;
const MYFORM = styled(Form)`
  width: 90%;
  text-align: left;
  padding-top: 2em;
  padding-bottom: 2em;

  @media(min-width: 786px) {
    width: 50%;
  }
`;
const BUTTON = styled(Button)`
  background: #1863AB;
  border: none;
  font-size: 1.2em;
  font-weight: 400;

  &:hover {
    background: #1D3461;
  }
`;
// Validation Schema with yup
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

//Function component to add product
const Product = () => {
  return (
    <CONTAINER>
        <Formik initialValues={{ name:"", description:"", price:"",quantity:"", category:"",photo:""}}
                 // Hooks up our validationSchema to Formik 
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
      }}
      >
        {/* Callback function containing Formik state and helpers that handle common form actions */}
      {( {values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit }) => (
      <Form className="mx-auto" onSubmit={handleSubmit}>
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
            {/* Applies the proper error message from validateSchema when the user has clicked the element and there is an error, also applies the .error-message CSS class for styling */}
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
          />
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
            />
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
            />
        </Form.Group>
        <Form.Group controlId="category">
          <Form.Label>category :</Form.Label>
          
             <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      
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


export default Product;
