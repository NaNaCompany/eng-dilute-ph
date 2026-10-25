export const tool={
  "id": "E093",
  "slug": "eng-dilute-ph",
  "title": "이상 희석용액 pH 계산기",
  "title_en": "Ideal Dilute Solution pH Calculator",
  "category": "화학",
  "category_en": "Chemistry",
  "fields": [
    {
      "key": "h",
      "label": "수소이온 몰농도 c_H",
      "label_en": "Hydrogen ion molar concentration c_H",
      "dimension": "concentration",
      "example": 0.0001,
      "constraint": "positive",
      "display_unit": "molL",
      "display_value": "1e-07"
    }
  ],
  "result_label": "농도 근사 pH",
  "result_label_en": "Concentration approximation pH",
  "result_dimension": "ratio",
  "formula": "pH ≈ −log₁₀(c_H/(1 mol/L))",
  "purpose": "활동도계수를 1로 둔 수소이온 농도 기반 pH 계산",
  "purpose_en": "Calculate concentration-based pH with an activity coefficient of one.",
  "assumptions": "c_H>0. 표준농도 1 mol/L로 무차원화하고 활동도계수 1의 희석 근사를 쓴다. 정확한 pH의 정의는 수소이온 활동도 기준이다. 0~14로 강제 제한하지 않으며 해리 평형은 풀지 않는다.",
  "assumptions_en": "Required: positive hydrogen ion concentration normalized by 1 mol/L. Ideal dilute approximation with activity coefficient one; exact pH uses hydrogen ion activity. No forced 0–14 clipping or dissociation equilibrium solving.",
  "sources": [
    {
      "label": "IUPAC Gold Book · pH",
      "url": "https://goldbook.iupac.org/terms/view/P04524"
    },
    {
      "label": "OpenStax · Chemistry 2e · 14.2 pH and pOH",
      "url": "https://openstax.org/books/chemistry-2e/pages/14-2-ph-and-poh"
    }
  ],
  "condition": "",
  "condition_en": "",
  "site": "https://nanalab.kr/eng-dilute-ph/",
  "repository": "https://github.com/NaNaCompany/eng-dilute-ph",
  "output_unit": "1"
};
