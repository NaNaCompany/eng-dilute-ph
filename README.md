# 이상 희석용액 pH 계산기

활동도계수를 1로 둔 수소이온 농도 기반 pH 계산

- Plan ID: E093
- App: https://nanalab.kr/eng-dilute-ph/
- Repository: https://github.com/NaNaCompany/eng-dilute-ph
- Formula: `pH ≈ −log₁₀(c_H/(1 mol/L))`
- Output: 농도 근사 pH

## Model

c_H>0. 표준농도 1 mol/L로 무차원화하고 활동도계수 1의 희석 근사를 쓴다. 정확한 pH의 정의는 수소이온 활동도 기준이다. 0~14로 강제 제한하지 않으며 해리 평형은 풀지 않는다.

Inputs are normalized to SI. Only one scalar is returned. Model conditions, finite numbers, physical boundaries, overflow and underflow are checked. External solver APIs and property databases are not used.

## Verification

Run `node --test tests/*.test.mjs` with Node.js 22 or later. Independent 70-digit Decimal example result: `7`. Source and license notices are in [SOURCES.md](SOURCES.md) and [LICENSE](LICENSE).

## Hosting

GitHub Pages uses `main` and `/`, with the NaNaCompany domain inherited. Google GTM, GA4, AdSense, Cloudflare analytics and the gray More Apps link are included. All code, descriptions and graphics are original.

## Static languages

Korean (existing root), English (`en/`), Spanish (`es/`), Simplified Chinese (`zh/`), Japanese (`ja/`) and German (`de/`). Each page has its own canonical URL, reciprocal hreflang, localized metadata, interface, validation messages and preview image. The language links work without JavaScript. Calculation code is shared and no runtime translation API is used.

Edit `localization/*.json` for text, `src/template.html` for the shared page, and run `python scripts/build-locales.py`. Run `python scripts/build-locales.py --check` and `npm test` before publishing. Decimal commas are accepted in Spanish and German; thousands separators are not supported.
