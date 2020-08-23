import React from 'react';
import Navbar from './Navbar';

const Layout=({title="Title",description="Descritpion",children})=><div>
    <Navbar/>
    <div className="jumbotron">
        <h2>{title}</h2>
        <p className="lead">{description}</p>
    </div>
<div>{children}</div>
</div>


export default Layout;
