

const TextWithBR = function convertTextToHTML(props){
    const arrText = props.text.split(/\\n)/);
    const finalComponents = [];
    let i = 0;
    arrText.forEach( (line) => {
        finalComponents.push(<span key={i++}>{line}</span>);
        finalComponents.push(<br key={i++}/>);
    });   
    return finalComponents;
}

export default TextWithBR;