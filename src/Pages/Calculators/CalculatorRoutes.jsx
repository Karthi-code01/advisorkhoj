import CompoundingCalculator from "./CompoundingCalculator";
import CrorepatiCalculator from "./CrorepatiCalculator";
import SIPCalculator from "./SIPCalculator";

export const CalculatorRoutes = [
    { path: "Crorepati-Calculator", element: <CrorepatiCalculator /> },
    { path: "Compounding-Calculator", element: <CompoundingCalculator /> },
    { path: "Systematic-Investment-Plan-Calculator", element: <SIPCalculator /> },

];