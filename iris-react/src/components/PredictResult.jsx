import ProbabilityChart from "../charts/ProbabilityChart";
import { COLORS } from "../constants/iris";

export default function PredictResult({ result }) {
  return (
    <section className="result">
      <h2>
        예측 결과: <span style={{ color: COLORS[result.label] }}>{result.label}</span>{" "}
        ({(result.probability * 100).toFixed(1)}%)
      </h2>
      <ProbabilityChart probabilities={result.probabilities} />
    </section>
  );
}
