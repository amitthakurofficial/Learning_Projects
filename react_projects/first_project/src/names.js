import React from 'react';

export default function Names({ name, Age }) {

    //Actual  react code, all the html is being transpiled to React.creatElement via babel.
    
    // return React.createElement("div", {}, [
    //     // React.createElement('h1', {}, props.name),
    //     React.createElement("h1", {}, name),
    //     React.createElement("h1", {}, Age),
    // ]);

    return (
        <div>
            <h1>{name}</h1>
            <h2>{Age}</h2>
        </div>
    )
};
