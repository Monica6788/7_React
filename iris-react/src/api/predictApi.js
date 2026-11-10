import axios from "axios";

export async function predict(form) {
  const { data } = await axios.post("/api/predict", form);
  return data;
}

/** axios 오류를 화면에 표시할 문자열로 변환한다. */
export function toErrorMessage(e) {
  if (axios.isAxiosError(e) && e.response) {
    const { status, data } = e.response;
    return `(${status}) ${JSON.stringify(data?.detail ?? data)}`;
  }
  return e.message;
}
