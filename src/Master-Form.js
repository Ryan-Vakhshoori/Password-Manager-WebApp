import { useState } from 'react';

function MasterForm() {
    const [input, setInput]  = useState('')
    const [correctInput, setCorrectInput] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        setCorrectInput(input === 'password');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='password' value={input} onChange={(e) => {setInput(e.target.value)}} />
            </form>
            {(correctInput !== '' && !correctInput) ? <div>Incorrect Input</div> : <br />}
        </div>
    )
}

export default MasterForm;