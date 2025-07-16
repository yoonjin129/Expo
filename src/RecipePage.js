import React from 'react';
import { useParams } from 'react-router-dom';
import './RecipePage.css';

const recipeDetails = {
  '귀리죽': {
    title: '귀리죽',
    ingredients: ['귀리 40g', '물 300ml', '소금 약간'],
    steps: [
      '귀리를 깨끗이 씻은 후, 물에 30분 이상 불려둡니다.',
      '냄비에 불린 귀리와 물을 넣고 중불에서 15~20분간 저어가며 끓입니다.',
      '죽이 걸쭉해지면 소금으로 간을 맞추고 마무리합니다.'
    ],
    blogLink: 'https://blog.naver.com',
    videoLink: 'https://youtube.com'
  },
  '삶은 달걀 1개': {
    title: '삶은 달걀',
    ingredients: ['달걀 1개', '물 적당량', '소금 약간'],
    steps: [
      '냄비에 달걀과 물을 넣고 센 불에서 끓입니다.',
      '물이 끓기 시작하면 중불로 줄여 10분간 삶습니다.',
      '삶은 달걀은 찬물에 식혀 껍질을 벗깁니다.'
    ],
    blogLink: 'https://blog.example.com',
    videoLink: 'https://youtube.com'
  },
  '사과 한 조각': {
    title: '사과 한 조각',
    ingredients: ['사과 1/4개'],
    steps: ['사과를 깨끗이 씻고 껍질을 벗긴 후 1/4 조각으로 썰어줍니다.'],
    blogLink: 'https://blog.example.com',
    videoLink: 'https://youtube.com'
  },
  '통밀 토스트 2장': {
    title: '통밀 토스트',
    ingredients: ['통밀 식빵 2장'],
    steps: ['식빵을 토스터기에 넣고 노릇하게 구워줍니다.'],
    blogLink: 'https://blog.example.com',
    videoLink: 'https://youtube.com'
  },
  '닭가슴살 슬라이스': {
    title: '닭가슴살 슬라이스',
    ingredients: ['닭가슴살 100g', '소금', '후추'],
    steps: [
      '닭가슴살에 소금과 후추를 뿌려 밑간합니다.',
      '팬에 닭가슴살을 굽고 식힌 후 얇게 슬라이스합니다.'
    ],
    blogLink: 'https://blog.example.com',
    videoLink: 'https://youtube.com'
  },
  '바나나': {
    title: '바나나',
    ingredients: ['바나나 1개'],
    steps: ['껍질을 벗긴 후 먹기 좋게 썰어 접시에 담습니다.'],
    blogLink: 'https://blog.example.com',
    videoLink: 'https://youtube.com'
  },
  '그릭 요거트 150g': {
    title: '그릭 요거트',
    ingredients: ['그릭 요거트 150g'],
    steps: ['그릭 요거트를 그릇에 담습니다.'],
    blogLink: 'https://blog.example.com',
    videoLink: 'https://youtube.com'
  },
  '견과류 한 줌': {
    title: '견과류',
    ingredients: ['아몬드, 호두 등 견과류 한 줌'],
    steps: ['요거트 위에 견과류를 뿌려줍니다.'],
    blogLink: 'https://blog.example.com',
    videoLink: 'https://youtube.com'
  },
  '블루베리': {
    title: '블루베리',
    ingredients: ['블루베리 한 줌'],
    steps: ['블루베리를 깨끗이 씻은 후 요거트 위에 올립니다.'],
    blogLink: 'https://blog.example.com',
    videoLink: 'https://youtube.com'
  },
  '닭가슴살 샌드위치': {
    title: '닭가슴살 샌드위치',
    ingredients: ['통밀식빵 2장', '닭가슴살 80g', '양상추', '토마토 슬라이스', '머스타드'],
    steps: [
      '식빵을 토스터기에 구워줍니다.',
      '구운 닭가슴살을 슬라이스합니다.',
      '빵 사이에 양상추, 토마토, 닭가슴살을 넣고 머스타드를 바릅니다.'
    ],
    blogLink: 'https://blog.example.com',
    videoLink: 'https://youtube.com'
  },
  '채소': {
    title: '채소',
    ingredients: ['양배추', '당근', '오이 등 채소 적당량'],
    steps: ['채소를 깨끗이 씻고 먹기 좋게 썰어 접시에 곁들입니다.'],
    blogLink: 'https://blog.example.com',
    videoLink: 'https://youtube.com'
  },
  '통밀 파스타 100g': {
    title: '통밀 파스타',
    ingredients: ['통밀 파스타 100g', '물', '소금'],
    steps: ['끓는 물에 소금을 약간 넣고 파스타를 10분간 삶습니다.'],
    blogLink: 'https://blog.example.com',
    videoLink: 'https://youtube.com'
  },
  '토마토 소스': {
    title: '토마토 소스',
    ingredients: ['토마토 소스 100g'],
    steps: ['팬에 토마토 소스를 데워 삶은 파스타 위에 뿌립니다.'],
    blogLink: 'https://blog.example.com',
    videoLink: 'https://youtube.com'
  },
  '잡곡밥 150g': {
    title: '잡곡밥',
    ingredients: ['잡곡 150g', '물 적당량'],
    steps: ['잡곡을 씻고 불린 후 전기밥솥에 취사합니다.'],
    blogLink: 'https://blog.example.com',
    videoLink: 'https://youtube.com'
  },
  '돼지고기 볶음': {
    title: '돼지고기 볶음',
    ingredients: ['돼지고기 100g', '양파', '대파', '간장', '고추장', '마늘'],
    steps: [
      '팬에 기름을 두르고 마늘과 돼지고기를 볶습니다.',
      '양파와 대파를 넣고 간장, 고추장으로 간을 맞춰 볶습니다.'
    ],
    blogLink: 'https://blog.example.com',
    videoLink: 'https://youtube.com'
  },
  '채소볶음': {
    title: '채소볶음',
    ingredients: ['양배추, 당근 등 채소 100g'],
    steps: ['팬에 기름을 두르고 채소를 볶아 소금으로 간을 맞춥니다.'],
    blogLink: 'https://blog.example.com',
    videoLink: 'https://youtube.com'
  },
  '닭가슴살 구이': {
    title: '닭가슴살 구이',
    ingredients: ['닭가슴살 100g', '소금', '후추'],
    steps: [
      '닭가슴살에 소금과 후추로 간을 합니다.',
      '팬에 굽거나 에어프라이어에 180도로 15분 구워줍니다.'
    ],
    blogLink: 'https://blog.example.com',
    videoLink: 'https://youtube.com'
  },
  '고구마 150g': {
    title: '고구마',
    ingredients: ['고구마 150g'],
    steps: ['고구마를 깨끗이 씻은 후 찜기에 25분간 쪄줍니다.'],
    blogLink: 'https://blog.example.com',
    videoLink: 'https://youtube.com'
  },
  '채소 스팀': {
    title: '채소 스팀',
    ingredients: ['브로콜리, 당근, 콜리플라워 등 채소'],
    steps: ['채소를 찜기에 넣고 5~7분간 찝니다.'],
    blogLink: 'https://blog.example.com',
    videoLink: 'https://youtube.com'
  },
  '소고기 장조림': {
    title: '소고기 장조림',
    ingredients: ['소고기 120g', '간장', '물', '설탕', '마늘'],
    steps: [
      '소고기를 냄비에 넣고 물과 함께 삶습니다.',
      '간장, 설탕, 마늘을 넣고 조림 국물이 졸아들 때까지 끓입니다.'
    ],
    blogLink: 'https://blog.example.com',
    videoLink: 'https://youtube.com'
  },
  '밥 100g': {
    title: '밥 100g',
    ingredients: ['쌀 100g', '물 적당량'],
    steps: ['쌀을 씻고 취사합니다.'],
    blogLink: 'https://blog.example.com',
    videoLink: 'https://youtube.com'
  },
  '나물무침': {
    title: '나물무침',
    ingredients: ['시금치 또는 고사리 50g', '참기름', '소금', '마늘'],
    steps: ['끓는 물에 나물을 데친 후 양념에 무칩니다.'],
    blogLink: 'https://blog.example.com',
    videoLink: 'https://youtube.com'
  },
  '두부조림': {
    title: '두부조림',
    ingredients: ['두부 150g', '간장', '마늘', '고춧가루'],
    steps: [
      '두부를 적당한 크기로 자르고 구워줍니다.',
      '간장 양념을 끓여 부어 졸여줍니다.'
    ],
    blogLink: 'https://blog.example.com',
    videoLink: 'https://youtube.com'
  },
  '김치': {
    title: '김치',
    ingredients: ['김치 50g'],
    steps: ['김치를 접시에 덜어 곁들입니다.'],
    blogLink: 'https://blog.example.com',
    videoLink: 'https://youtube.com'
  }
};

function RecipePage() {
  const { title } = useParams();
  const parts = title.split(' + ');

  return (
    <div className="recipe-container">
      <h2 className="recipe-title">레시피</h2>
      <h3 className="recipe-subtitle">{title}</h3>

      {parts.map((part, index) => {
        const recipe = recipeDetails[part];
        return recipe ? (
          <div key={index} className="recipe-card">
            <div className="recipe-name">{recipe.title}</div>

            <div className="section-title">재료</div>
            <ul className="ingredients">
              {recipe.ingredients.map((ing, i) => (
                <li key={i}>{ing}</li>
              ))}
            </ul>

            <div className="section-title">만드는 법</div>
            <ol className="steps">
              {recipe.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>

            <div className="recipe-links">
              <a href={recipe.blogLink} target="_blank" rel="noopener noreferrer" className="recipe-link">
                블로그 보기
              </a>
              <a href={recipe.videoLink} target="_blank" rel="noopener noreferrer" className="recipe-link">
                영상보기
              </a>
            </div>
          </div>
        ) : null;
      })}
    </div>
  );
}

export default RecipePage;