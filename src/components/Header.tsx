import  {useState, createElement as cElement} from 'react';


function Header() {
    const [counter, setCounter] = useState(0)
  const elem1 = cElement(`button`, {
    onClick: () => setCounter(counter+1),
    key: 23
            }, `Click ME ${counter}`)
  return (
  
        <h1> {counter} HEADER  {elem1} </h1> 
  
    );
}

export default Header;
