import styled, { css } from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
`;

export const Checkbox = styled.input`
  appearance: none;
  width: 18px;
  height: 18px;
  border: 0.3px solid #000; /* 기존 border 두께가 얇아서 1.5px로 조정 */
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative; /* ::after 위치 조정을 위해 필요 */

  &:checked::after {
    content: "";
    width: 14px; /* 체크 아이콘 크기 조정 */
    height: 10px; /* 체크 아이콘 크기 조정 */
    background-image: url("data:image/svg+xml,%3Csvg width='14' height='10' viewBox='0 0 10 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23000' fill-rule='evenodd' d='M9.07801.967669c.1247.124731.19474.293881.19474.470251 0 .17637-.07004.34552-.19474.47025l-4.9854 4.98541c-.06589.06589-.14411.11817-.2302.15383-.08608.03567-.17835.05402-.27154.05402-.09318 0-.18545-.01835-.27154-.05402-.08609-.03566-.16431-.08794-.23019-.15383L.612176 4.41706c-.063527-.06136-.114198-.13475-.149057-.2159s-.053208-.16843-.053975-.25675c-.000768-.08831.016061-.1759.049505-.25764.033444-.08174.082832-.15601.145283-.21846.062451-.06245.136715-.11184.218458-.14528.081742-.03344.169327-.05027.25764-.04951.08832.00077.1756.01912.25675.05398.08115.03486.15454.08553.2159.14906l2.03797 2.03797L8.13707.967669c.06177-.061808.13511-.11084.21584-.144293.08072-.033453.16725-.050671.25463-.050671.08738 0 .17391.017218.25463.050671.08073.033453.15407.082485.21584.144293Z' clip-rule='evenodd'/%3E%3C/svg%3E");
    background-size: cover; /* 아이콘이 잘리지 않도록 contain 사용 */
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
  }
`;


export const TodoText = styled.span`
  font-size: 16px;
  width: 100%;
  padding: 2px; /* 내부 여백 추가 */
  box-sizing: border-box; /* 패딩 포함 크기 계산 */
  border: 0px solid transparent; /* 선택 시 보더가 튀지 않게 */
  border-bottom: 1px solid ${({ theme }) => theme.colors.bordergray};
  
  &:focus {
    outline: none; /* 기본 outline 제거 */
  }
`;

export const Time = styled.span`
  font-size: 16px;
  padding: 2px;
  text-align: center;
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bordergray};
  width: 20%;
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.error};
  margin-top: 5px;
`;

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 70%;
`;
