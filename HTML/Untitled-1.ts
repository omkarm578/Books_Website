const App = () => {

        const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        const evenNumbers = numbers.filter((num) => num%2===0);

        return (

          <>

            <h1>ES6 Array Iteration Methods</h1>

            {/* iterate over array here */}

            {evenNumbers.map((num) => (<h3>{num}</h3>))}

          </>

        );

      };

      const rootElement = ReactDOM.createRoot(document.getElementById("root"));

      rootElement.render(<App />);

    </script>