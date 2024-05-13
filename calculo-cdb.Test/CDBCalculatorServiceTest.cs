
using calculo_cdb.Logic;

namespace calculo_cdb.Test
{ 

    [TestClass]
    public class CDBCalculatorServiceTest
    {
        ICDBCalculatorService CDBCalculatorService = new CDBCalculatorService();

        [TestInitialize]
        public void Setup()
        {
            CDBCalculatorService = new CDBCalculatorService();
        }


        [TestMethod]
        public void Test_ExecuteCalculationCDB_ValidResults()
        {
            // Arrange
            int qtyMonths = 12;
            double initialValue = 1000;

            // Act
            var result = CDBCalculatorService.RunCDBCalculation(qtyMonths, initialValue);

            // Assert
            Assert.IsNotNull(result);
            Assert.IsTrue(result.RawScore > initialValue);
            Assert.IsTrue(result.NetIncome >= initialValue);
        }

        [TestMethod]
        public void Test_RunCalculationCDB_DifferentResultsForDifferentInitialValues()
        {
            // Arrange
            int qtyMonths = 12;
            double initialValue1 = 1000;
            double initialValue2 = 2000;

            // Act
            var result1 = CDBCalculatorService.RunCDBCalculation(qtyMonths, initialValue1);
            var result2 = CDBCalculatorService.RunCDBCalculation(qtyMonths, initialValue2);

            // Assert
            Assert.AreNotEqual(result1.RawScore, result2.RawScore);
        }

        [TestMethod]
        public void Test_ExecuteCalculationCDB_QtyMonthsNegative()
        {
            // Assert
            Assert.ThrowsException<ArgumentException>(() => CDBCalculatorService.RunCDBCalculation(-1, 1000));
        }

        [TestMethod]
        public void Test_ExecuteCalculationCDB_NegativeInitialValue()
        {
            // Assert
            Assert.ThrowsException<ArgumentException>(() => CDBCalculatorService.RunCDBCalculation(12, -1000));
        }

        [TestMethod]
        public void Test_ExecuteCalculationCDB_QtyMonthsLessThanTwo()
        {
            // Assert
            Assert.ThrowsException<ArgumentException>(() => CDBCalculatorService.RunCDBCalculation(1, 1000));
        }
    }
}