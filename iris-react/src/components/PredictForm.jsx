import { FIELDS } from "../constants/iris";

export default function PredictForm({ form, onChange, onSubmit, loading }) {
  return (
    <section className="form">
      {FIELDS.map(({ key, label }) => (
        <label key={key}>
          {label}
          <input
            type="number"
            step="0.1"
            value={form[key]}
            required
            onChange={(e) => onChange(key, parseFloat(e.target.value))}
          />
        </label>
      ))}
      <button onClick={onSubmit} disabled={loading}>
        {loading ? "요청 중..." : "예측하기"}
      </button>
    </section>
  );
}
