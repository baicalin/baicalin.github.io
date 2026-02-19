(() => {
  const STORAGE_KEY = "silico_lang";

  const getByPath = (obj, path) =>
    path.split(".").reduce((acc, k) => (acc && acc[k] != null ? acc[k] : null), obj);

  const getLangFromQuery = () => {
    const p = new URLSearchParams(window.location.search);
    const lang = p.get("lang");
    return (lang === "ko" || lang === "en") ? lang : null;
  };

  const setLang = (lang) => {
    localStorage.setItem(STORAGE_KEY, lang);
    apply(lang);
  };

  const apply = (lang) => {
    const dict = window.SILICO_I18N && window.SILICO_I18N[lang];
    if (!dict) return;

    document.documentElement.setAttribute("lang", lang);

    // 텍스트 치환 (textContent)
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = getByPath(dict, key);
      if (typeof val === "string") el.textContent = val;
    });

    // HTML 치환 (innerHTML) - sup/sub/br 포함 문자열용
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      const val = getByPath(dict, key);
      if (typeof val === "string") el.innerHTML = val;
    });

    // 속성 치환 (예: href, aria-label 등)
    // 사용법: data-i18n-attr="href:toggle_href"
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      const spec = el.getAttribute("data-i18n-attr");
      const [attr, key] = spec.split(":").map(s => s.trim());
      const val = getByPath(dict, key);
      if (attr && typeof val === "string") el.setAttribute(attr, val);
    });
  };

  const init = () => {
    // 1) URL 파라미터 우선 (?lang=ko)
    const q = getLangFromQuery();
    if (q) {
      localStorage.setItem(STORAGE_KEY, q);
      // 깔끔하게 파라미터 제거(선택)
      const url = new URL(window.location.href);
      url.searchParams.delete("lang");
      window.history.replaceState({}, "", url.toString());
    }

    // 2) 저장값 없으면 기본 en
    const stored = localStorage.getItem(STORAGE_KEY);
    const lang = stored || "en";
    apply(lang);

    // 3) 토글 버튼 클릭(링크 클릭) 시 언어 스위칭
    document.querySelectorAll("[data-lang-toggle]").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        const cur = document.documentElement.getAttribute("lang") || "en";
        const next = (cur === "ko") ? "en" : "ko";
        setLang(next);
      });
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
