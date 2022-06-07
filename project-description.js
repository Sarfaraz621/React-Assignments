import React from 'react';

function project_name(props){
    return(<h1>{props.data-ns-test}</h1>);
}
function project_description(props){
    return(<h1>{props.data-ns-test}</h1>);
}
function App()
{
    return(<><div>
        <project_name data-ns-test="assignment-name">Name:Chat App</project_name>
    </div><div>
            <project_description data-ns-test="assignment-description">Description:Fully Functioning</project_description>
        </div></>);
};

export default App;