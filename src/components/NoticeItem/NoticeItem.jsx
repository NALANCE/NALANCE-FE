import React from 'react';
import * as S from './NoticeItem.style';
import noticeArrow from 'assets/icons/notice_arrow.svg';

const NoticeItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <>
      <S.Question onClick={onClick}>
        <S.Label>Q.</S.Label>
        <S.QuestionText>{question}</S.QuestionText>
        <S.Arrow src={noticeArrow} alt="화살표" isOpen={isOpen} />
      </S.Question>
      {isOpen && answer && (
        <S.Answer>
          <S.Label>A.</S.Label>
          <S.AnswerText>{answer}</S.AnswerText>
        </S.Answer>
      )}
    </>
  );
};

export default NoticeItem;
