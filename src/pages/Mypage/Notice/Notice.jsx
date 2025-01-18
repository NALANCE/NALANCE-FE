import React, { useState } from 'react';
import Topbar from 'components/Topbar/Topbar';
import BottomLogo from 'components/BottomLogo/BottomLogo';
import NoticeItem from 'components/NoticeItem/NoticeItem';
import * as S from './Notice.style';

const Notice = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const notices = [
    {
      question: '카테고리를 선정하는 기준이 있나요?',
      answer:
        '개인이 원하는 카테고리를 자유롭게 선정하시면 됩니다. 사용자가 주로 활동하는 분야를 설정하시는 것을 추천드립니다.',
    },
    {
      question: '지난 날짜는 기록하지 못하나요?',
      answer:
        '현재는 당일 기록만 가능합니다. 추후 업데이트를 통해 지난 날짜 기록 기능을 추가할 예정입니다.',
    },
    {
      question: '카카오톡 연동이 언제 가능할까요?',
      answer: '카카오톡 연동은 2024년 하반기에 지원될 예정입니다.',
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index)); // 클릭 시 열림/닫힘 토글
  };

  return (
    <>
      <Topbar pageTitle="공지사항" />
      <S.Container>
        {activeIndex === null ? (
          notices.map((notice, index) => (
            <NoticeItem
              key={index}
              question={notice.question}
              isOpen={false}
              onClick={() => handleToggle(index)}
            />
          ))
        ) : (
          <NoticeItem
            key={activeIndex}
            question={notices[activeIndex].question}
            answer={notices[activeIndex].answer}
            isOpen={true}
            onClick={() => handleToggle(null)}
          />
        )}
      </S.Container>
      <BottomLogo />
    </>
  );
};

export default Notice;
