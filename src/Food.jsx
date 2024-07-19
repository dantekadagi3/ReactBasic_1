//When adding javascript outside the return statement you don't need curly brackets
function Food(){

    const food1="Apple";
    const food2="tangarine";
    return(
<ol>
    <li>Apple</li>
    <li>{food1}</li>
    <li>{food2}</li>
</ol>
    );
}
export default Food