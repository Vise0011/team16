<details> <summary> 디렉토리 구조 </summary>
git  파일을 다운로드 하셨으면
python /root/16_team/app/llama/model_download.py 파일을 실행시켜서 모델을 다운로드 해주세요(40GB)


16_team/
├── .env                        ←환경 변수
├── readne.md
├── requirment.py
├── static/                    ← JS, CSS 파일
│   ├── css/
│   │   └── first_page.css
│   │   └── second_page.css
│   └── js/
│       └── first_page.js
│       └── second_page.js
│       └── main.js             ← 추천을 위한 함수
├── app/
│   ├── main.py                ← FastAPI 엔트리 포인트
│   ├── templates/            ← HTML 템플릿``
│   │   └── first_page.html
│   │   └── second_page.html
│   ├── services/             ← 알고리즘 로직 (추천, LLM 호출 등)
│   │   └── __init__.py
│   │   ├── condition_weight.py
│   │   └── recommender.py
│   │   └── site2_recommender.py
│   │   └── hf_llm.py
│   ├── api/
│   │   └── v1/
│   │       └── endpoints/
│   │           └── condition_weight.py
│   │           └── menu.py
│   │           └── menu_recommend.py
│   │           └── order.py
│   │           └── prompt.py
│   │           └── user_input.py
│   ├── llama/
│   │   └── __init__.py
│   │   └── model_runner.py
│   │   └── llama-3.1-8B-Instruct/
│   ├── db/
│   │   └── models/
│   │       └── menu.py
│   │       └── user_inputs.py
│   │   └── database.py
│   ├── __init__.py
│   ├── config.py
│   └── main.py 
├── data/
│   │  └── non_var/
│   │  └── site1_db/
│   │       └── alcohol.json
│   │       └── category.json
│   │       └── people.json
│   │       └── price.json
│   │       └── rain.json
│   │       └── season.json
│   │       └── time.json
│   │  └── site2_db/
│   │  └── var/
│   ├── data_to_db.py
│   └── summation.py
</details>

1. **레포 클론**
   ```bash
   git clone https://github.com/Vise0011/team16.git
   cd team16

2. Python 환경 설정
conda activate your-env
pip install -r requirements.txt

3. 모델 다운로드( 다운시 개인 토큰 및 모델 사용권한 필요/ huggingface-cli login)
python app/llama/model_download.py

4. FastAPI 서버 실행

uvicorn app.main:app --reload

