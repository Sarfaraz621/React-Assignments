import React from 'react';
import ReactDom from 'react-dom/client';

function project_name(props){
    return(<h1>{props.data-ns-test}</h1>);
}
function project_description(props){
    return(<h1>{props.data-ns-test}</h1>);
}
function assignment()
{
    return(<>
<project_name data-ns-test="assignment-name">Chat App</project_name>
<project_description data-ns-test="assignment-description">Fully Functioning</project_description>
    </>);
}
const root=ReactDom.createRoot(document.getElementById('root'));
root.render(<assignment/>);