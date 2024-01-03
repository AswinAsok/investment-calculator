import Header from "./components/Header";
import UserInput from "./components/UserInput";

function App() {
    return (
        <>
            <Header />
            <UserInput />
            <table id="result">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest(Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>10850</td>
                        <td>550</td>
                        <td>550</td>
                        <td>10300</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default App;
