from fastapi import APIRouter, Body
from app.services.condition_weight import get_weighted_top5
from app.services.hf_llm import ask_hf_llama  # 또는 ask_local_llama

router = APIRouter()

@router.post("/condition-weight")
def recommend_by_condition(user_input: dict = Body(...)):
    top5_menus = get_weighted_top5(user_input)
    
    # 설명 생성
    description = ask_hf_llama(top5_menus)

    # description 반환
    return {
        "top5": [menu["menu"] for menu in top5_menus],
        "description": description
    }
