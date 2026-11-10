import { useState } from "react";
import { predict, toErrorMessage } from "../api/predictApi";
import PredictForm from "../components/PredictForm";
import PredictResult from "../components/PredictResult";
import { DEFAULTS } from "../constants/iris";



export default function PredictPage() {
  const [form, setForm] = useState(DEFAULTS);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (key, value) => setForm({ ...form, [key]: value });

  const handlePredict = async () => {
    setLoading(true);
    setError(null);
    try {
      setResult(await predict(form));
    } catch (e) {
      setResult(null);
      setError(toErrorMessage(e));
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container">
      <h1>붓꽃 품종 예측</h1>
      <PredictForm
        form={form}
        onChange={handleChange}
        onSubmit={handlePredict}
        loading={loading}
      />
      {error && <p className="error">오류: {error}</p>}
      {result && <PredictResult result={result} />}
    </main>
  );
}
