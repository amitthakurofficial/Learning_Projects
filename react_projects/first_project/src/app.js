import React from 'react';
import { render } from 'react-dom';
// import Names from './names';
import SearchParams from './searchparams';

const App = () => {
    // return React.createElement("div", {}, [
    //     React.createElement(names, { name: "amit", Age: "22" }),
    //     React.createElement(names, { name: "alok", Age: "22" }),
    //     React.createElement(names, { name: "sachin", Age: "23" }),
    // ]);
    return (
        <div>
            {/* <Names name="amit" Age="22" />
            <Names name="alok" Age="21" /> */}
            <SearchParams />
        </div>
    );
};
render(<App />, document.getElementById("root"));
// render(React.createElement(App), document.getElementById("root"));
