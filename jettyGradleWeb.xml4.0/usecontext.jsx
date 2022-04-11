function Counter() {
    const [count, setCount] = React.useState(0);
    const [calculation, setCalculation] = React.useState(0);

    React.useEffect(() => {
        setCalculation(() => count * 2);
    }); // <- add the count variable here

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
            <p>Calculation: {calculation}</p>
        </div>
    );
}

ReactDOM.render(<Counter />, document.getElementById('mydiv'));