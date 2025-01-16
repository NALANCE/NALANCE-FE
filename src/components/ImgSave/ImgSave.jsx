import imgSave from "assets/icons/imgSave.svg";
import html2canvas from "html2canvas";

const ImgSave = () => {
  const onClickImgBtn = () => {
    const target = document.getElementsByClassName("DailyContainer")[0];
    if (!target) {
      return alert("사진 저장에 실패했습니다.");
    }
    html2canvas(target).then((canvas) => {
      const link = document.createElement("a"); // 다운로드할 링크를 제공하기 위함
      document.body.appendChild(link); // 다운로드 기능을 수행할 수 있게
      link.href = canvas.toDataURL("image/png");
      link.download = "Daily.png"; // 파일 이름
      link.click(); // 클릭하면 다운되도록
      document.body.removeChild(link);
    });
  };
  return (
    <div>
      <img src={imgSave} onClick={onClickImgBtn}></img>
    </div>
  );
};

export default ImgSave;
