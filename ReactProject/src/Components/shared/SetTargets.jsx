import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { setTargetValues } from "../../store/nutritionSlice";

export default function SetTargets({ handleAddTargets }) {
    const [targetProtein, setTargetProtein] = useState('');
    const [targetCalories, setTargetCalories] = useState('');
    const [targetSugar, setTargetSugar] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddTargets(targetProtein, targetCalories, targetSugar);
        localStorage.setItem('targetProtein', targetProtein);
        localStorage.setItem('targetCalories', targetCalories);
        localStorage.setItem('targetSugar', targetSugar);
    };

    useEffect(() => {
        setTargetProtein(localStorage.getItem('targetProtein') ? JSON.parse(localStorage.getItem('targetProtein')) : "");
        setTargetCalories(localStorage.getItem('targetCalories') ? JSON.parse(localStorage.getItem('targetCalories')) : "");
        setTargetSugar(localStorage.getItem('targetSugar') ? JSON.parse(localStorage.getItem('targetSugar')) : "");
    }, []);

    const dispatch = useDispatch();

    useEffect(() => {
        // Dispatch the target values
        dispatch(setTargetValues({
            protein: targetProtein,
            calories: targetCalories,
            sugar: targetSugar
        }));
    }, [targetProtein, targetCalories, targetSugar, dispatch]);

    return (
        <details style={{
            display: 'flex',
            flexDirection: 'column',
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "1em",
            marginTop: "8px",
            backgroundColor: "#f9f9f9",
            color: "#333",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
        }}>
            <summary style={{
                color: '#4a9f8b',
                fontSize: "1.5rem",
                fontWeight: 'bold',
                cursor: 'pointer',
                padding: '0.5em',
                borderBottom: "1px solid #ccc",
                textAlign: 'center'
            }}>
                Set nutrition targets
            </summary>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '10px' }}>
                <h3 style={{ textAlign: 'center' }}>Set personal nutrient targets</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: "10px", justifyContent: "space-around" }}>
                    {['Protein', 'Calories', 'Sugar'].map((nutrient) => (
                        <div key={nutrient} style={{ flex: '1 1 30%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <label htmlFor={`target${nutrient}`} style={{ marginBottom: '0.5em' }}>{nutrient}</label>
                            <input
                                style={{
                                    width: "100%",
                                    padding: "0.5em",
                                    borderRadius: "4px",
                                    border: "1px solid #bbb",
                                    backgroundColor: "#fff",
                                    color: "#333"
                                }}
                                type="text"
                                id={`target${nutrient}`}
                                value={nutrient === 'Protein' ? targetProtein : nutrient === 'Calories' ? targetCalories : targetSugar}
                                onChange={(e) => {
                                    if (nutrient === 'Protein') setTargetProtein(e.target.value);
                                    else if (nutrient === 'Calories') setTargetCalories(e.target.value);
                                    else setTargetSugar(e.target.value);
                                }}
                            />
                        </div>
                    ))}
                </div>
                <button type="submit" onClick={handleSubmit} style={{
                    backgroundColor: "#4a9f8b",
                    color: 'white',
                    fontSize: "1rem",
                    padding: "0.5em",
                    fontWeight: "bold",
                    marginTop: "0.5rem",
                    cursor: "pointer",
                    border: "none",
                    borderRadius: "4px",
                    transition: "background-color 0.3s",
                    width: "100%"
                }}>
                    Set targets
                </button>
            </div>
            <div style={{ marginTop: '20px' }}>
                <h3 style={{ textAlign: 'center' }}>Personal notes for calculating targets / gain muscle + weight</h3>
                <div style={{ display: 'flex', flexDirection: 'row', gap: "15px", flexWrap: 'wrap' }}>
                    {['Protein', 'Calories', 'Sugar'].map((nutrient) => (
                        <details key={nutrient} style={{ flex: '1 1 30%', textAlign: 'left' }}>
                            <summary style={{
                                color: '#4a9f8b',
                                fontSize: "1.25rem",
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}>
                                {nutrient}
                            </summary>
                            {nutrient === 'Protein' && '1.2g protein per body weight kg'}
                            {nutrient === 'Calories' && 'More than 2500 calories a day, to build muscle and gain weight'}
                            {nutrient === 'Sugar' && '40g max sugar per day'}
                        </details>
                    ))}
                </div>
            </div>
        </details>
    );
}
