import React from 'react';


const Layout=({title="Title",description="Descritpion",children})=><div>
    <div className="jumbotron">
        <h2>{title}</h2>
        <p className="lead">{description}</p>
    </div>
<div>{children}</div>
</div>


export default Layout;
