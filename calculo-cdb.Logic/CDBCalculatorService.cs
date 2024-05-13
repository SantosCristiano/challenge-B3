namespace calculo_cdb.Logic;

public class CDBCalculatorService : ICDBCalculatorService
{
    public ResultCDBCalculation RunCDBCalculation(int qtyMonths, double initialValue)
    {
        if (initialValue <= 0)
        {
            throw new ArgumentException("The initial value must be a positive monetary value.");
        }

        if (qtyMonths <= 1)
        {
            throw new ArgumentException("The term in months must be greater than 1.");
        }

        var results = new List<double>();
        var valueGrossResult = 0.0;

        const double CDI = 0.009;
        const double rateBankAboutCDI = 1.08;

        for (int i = 0; i < qtyMonths; i++)
        {
            var resultMonthPrevious = (i == 0 && results.Count == 0) ? initialValue : results[i - 1];
            var resultMonth = resultMonthPrevious * (1 + (CDI * rateBankAboutCDI));

            results.Add(resultMonth);
        }

        valueGrossResult = results[results.Count - 1];

        var profit = valueGrossResult - initialValue;

        var valueTax = CalculateTax(qtyMonths, profit);

        double valueNetResult = initialValue + (profit - valueTax);

        var result = new ResultCDBCalculation { RawScore = results[results.Count - 1], NetIncome = valueNetResult };

        return result;
    }

    public double CalculateTax(int qtyMonths, double valueGrossResult)
    {
        if (valueGrossResult <= 0)
        {
            throw new ArgumentException("The gross result value must be a positive monetary value.");
        }

        if (qtyMonths <= 1)
        {
            throw new ArgumentException("The term in months must be greater than 1.");
        }

        double valueTax = 0.0;

        var feesTax = new Dictionary<int, double>
        {
            { 6, 0.225 },
            { 12, 0.20 },
            { 24, 0.175 },
            { int.MaxValue, 0.15 }
        };

        double feeTax = feesTax.First(kv => qtyMonths <= kv.Key).Value;

        valueTax = valueGrossResult * feeTax;

        return valueTax;
    }
}
