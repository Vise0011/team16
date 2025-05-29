document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('recommendForm');
  const resultSection = document.getElementById('resultSection');
  const selectedList = document.getElementById('selectedList');
  const descriptionBox = document.getElementById('descriptionBox');
  const resetBtn = document.getElementById('resetBtn');

  // 중복 방지용 플래그 (외부에 선언)
  let isProcessing = false;

  form.addEventListener('submit', async e => {
    e.preventDefault();

    if (isProcessing) {
      console.warn("중복 제출 차단됨");
      return;
    }
    isProcessing = true;
    console.log("추천 요청 실행");

    const userInput = {};
    form.querySelectorAll('select').forEach(sel => {
      userInput[sel.name] = sel.value;
    });

    try {
      const res = await fetch("/api/v1/condition-weight", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userInput)
      });

      const json = await res.json();

      selectedList.innerHTML = '';
      descriptionBox.innerHTML = '';

      json.top5.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        selectedList.appendChild(li);
      });

      if (json.description) {
        const desc = document.createElement("p");
        desc.className = "llm-description";
        desc.innerHTML = json.description.replace(/\n/g, "<br>");
        descriptionBox.appendChild(desc);
      }

      form.classList.add('hidden');
      resultSection.classList.remove('hidden');
    } catch (err) {
      console.error("서버 요청 실패", err);
    } finally {
      isProcessing = false;
    }
  });

  resetBtn.addEventListener('click', () => {
    resultSection.classList.add('hidden');
    form.reset();
    form.classList.remove('hidden');
    selectedList.innerHTML = '';
    descriptionBox.innerHTML = '';
  });
});
