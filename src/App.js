import { useState } from 'react';
import './App.css';

const App = () => {
    const [crazies, setCrazies] = useState(null);
    const [crazyCount, setCrazyCount] = useState(0);

    const generateCrazies = () => {
        if (crazyCount === 0) {
            setCrazies(null);
            return;
        }

        const crazy = 'Crazy? I was crazy once. They locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy.\n';
        setCrazies(crazy.repeat(crazyCount));
    };

    return (
        <div className='app' style={{ textAlign: 'center' }}>
            <h1>Rubber Room</h1>
            
            <div>
                <p>How many crazies?</p>
                <input type='number' onChange={(e) => setCrazyCount(e.target.value)} />
                <button style={{ marginLeft: '10px' }} onClick={generateCrazies}>Generate</button>
            </div>

            <textarea value={crazies}></textarea>
        </div>
    );
};

export default App;
