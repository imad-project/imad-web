import countries from "i18n-iso-countries";
import ko from "i18n-iso-countries/langs/ko.json";

// 한국어 데이터 로드
countries.registerLocale(ko);

export function getCountryNames(codes: string[]): string[] {
  return codes.map(
    (code) => countries.getName(code.toUpperCase(), "ko") || "알 수 없는 국가"
  );
}
