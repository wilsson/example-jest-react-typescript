import * as React from "react";
import * as ReactDOM from "react-dom";
import { Link } from './link';
import { Counter } from './counter';

function App(){
    return(
        <div>
            <Link page="http://www.facebook.com">Facebook</Link>
            <Counter />
        </div>
    )
}
ReactDOM.render(
   <App />,
    document.getElementById("container")
);