import React, { useState, useEffect } from 'react';
import { Formik,Field} from 'formik';
import {Form} from 'react-bootstrap';
import * as Yup from 'yup';
import {productService} from './ProductService';
import Layout from '../core/Layout';
import AddProductDetail from './shared/_addProductDetail';

//
import CONTAINER from '../../shared/container';
import BUTTON from '../../shared/button';

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
    
    
  const initialValues = { 
    serviceCode:"",
    name:"",
    description:"",
    price:"",
    quantity:"",
    categories:[], 
    category:"",
    photo:"",
    shipping:"",
    loading:false,
    error:"",
    createdProduct:"",
    redirectToProfile:false,
    formData:""
  };
  function onSubmit(params) {
    productService.create(params).then(data=>{
      console.log(data);
    });
}


  return (
    <Layout title="Add Product" description="This is the Home page">
      <CONTAINER>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async values => onSubmit(values)
        }
      >
          
        {( {values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit }) => {
            const [statecategory, setstatecategory] = useState(null);
    useEffect(() => {
      //productService.getCategories().then(objcategories => {
        //const fields = ['title', 'firstName', 'lastName', 'email', 'role'];
        //fields.forEach(field => setFieldValue(field, user[field], false));
        
        //console.log("mkk"+JSON.stringify(objcategories.data));
        //setstatecategory(objcategories.data);
    //});
      //setstatecategory(getCategories());
}, [statecategory]);
      return(<Form className="mx-auto"  onSubmit={handleSubmit}>
        <div className="form-row">
        <Form.Group controlId="serviceCode" className="col-6">
          <Form.Label>Service Coe :</Form.Label>
          <Form.Control
            type="text"
            name="serviceCode"
            placeholder="Service Code"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.serviceCode}
            />
          
        </Form.Group>
        <Form.Group className="col-6" controlId="name">
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

        </div>
        <div className="form-row">
        <div className="form-group col-12">
          <label>Description :</label>
          <Field
                name="description"
                component="textarea"
                placeholder="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                className={touched.description && errors.description ? "error" : null}
                rows="4"
                cols={20}>
{touched.description && errors.description ? (
                <div className="error-message">{errors.description}</div>
              ): null}
          </Field>
          </div>
        </div>
        <div className="form-row">
        <Form.Group className="col-6" controlId="price">
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
        <Form.Group className="col-6" controlId="quantity">
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
        </div>
        <Form.Group controlId="category">
          <Form.Label>category :</Form.Label>
          
             <Form.Control as="select" name="category" 
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.category}
             >
             {statecategory && statecategory.map((cat,index) => 
             <option key={index} value={cat._id} >{cat.name}</option>
             )}   
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
        <AddProductDetail></AddProductDetail>
        <BUTTON  variant="primary"  type="submit" onSubmit={handleSubmit}> 
          Add Product Details
        </BUTTON>
      </Form>)
}}
      </Formik>
      </CONTAINER>
      </Layout>
  );
}

export default addProduct;
