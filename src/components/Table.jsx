import { calculateInvestmentResults, formatter } from "../util/investment";

const Table = ({ userInput }) => {
    const resultsData = calculateInvestmentResults(userInput);

    const renderTableRows = () => {
        return resultsData.map((data, index) => {
            const investmentValue = formatter.format(data.valueEndOfYear);
            const interest = formatter.format(data.interest);
            const totalInterest = formatter.format(
                data.valueEndOfYear -
                    data.annualInvestment * data.year -
                    userInput.initialInvestment
            );
            const investedCapital = formatter.format(
                data.valueEndOfYear -
                    (data.valueEndOfYear -
                        data.annualInvestment * data.year -
                        userInput.initialInvestment)
            );

            return (
                <tr key={index}>
                    <td>{data.year}</td>
                    <td>{investmentValue}</td>
                    <td>{interest}</td>
                    <td>{totalInterest}</td>
                    <td>{investedCapital}</td>
                </tr>
            );
        });
    };

    return (
        <>d
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
                <tbody>{resultsData && renderTableRows()}</tbody>
            </table>
        </>
    );
};

export default Table;
