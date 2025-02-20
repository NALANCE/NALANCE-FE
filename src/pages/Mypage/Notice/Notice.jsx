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
        '원하는 카테고리를 자유롭게 선정하시면 됩니다. 사용자가 주로 활동하는 분야로 선정하시는 것을 추천드립니다.',
    },
    {
      question: '왜 BALANCE가 맞아야 하나요?',
      answer:
        '페르소나(=카테고리) 간의 균형이 맞아야 하는 이유는 다음과 같습니다.\n' +
        '1. 페르소나끼리 서로를 지탱하며 안정적인 자아를 형성한다.\n' +
        '2. 일부 페르소나가 흔들리더라도, 자아 전체는 안정적으로 유지된다.\n' +
        '3. 모든 페르소나가 골고루 발달된다.',
    },
    {
      question: '활동 낮음 알림은 어떻게 이용하나요?',
      answer:
        '제일 약화된 페르소나(=카테고리)임을 인지하고, 해당 페르소나의 활동을 전보다 늘려주시는 것을 추천드립니다.',
    },
    {
      question: '이미지 저장은 어떻게 이용하나요?',
      answer:
        '‘비율 이미지’를 디지털 다이어리에 첨부하거나, 출력해 실물 다이어리에 기록하는 용도로 사용하시면 됩니다.',
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
            answer={notices[activeIndex].answer.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
            isOpen={true}
            onClick={() => handleToggle(null)}
          />
        )}
      </S.Container>
      <S.BottomLogoWrapper>
        <BottomLogo />
      </S.BottomLogoWrapper>
    </>
  );
};

export default Notice;
