import React from "react";

const ResignationTemplate = (props) => {
  return (
    <>
      Dzień dobry,
      <br></br>
      <br></br>
      dziękujemy za informację.
      <br></br>
      <br></br>
      Zgodnie z umową, od dnia rezygnacji obowiązuje Państwa miesięczny okres
      wypowiedzenia umowy i do tego czasu uczeń może uczęszczać na zajęcia.
      <br></br>
      <br></br>W Państwa przypadku termin wypowiedzenia umowy jest od
      <b>{props.resignationDate}</b> do <b>{props.resignationDate}</b>.<br></br><br></br>
      Płatność, którą należy uiścić to suma zajęć odbytych do końca okresu
      wypowiedzenia; w tym wypadku są to zajęcia:
      <br></br>
      {/* Map tu wrzuc na lekcje przefiltorwane do oplacenia */}
      <br></br>
      Cena za jedno spotkanie 2 x 45 minut to <b>Cena kursu / ilosc zajec</b>
      zł.<br></br>
      Zatem całkowita suma za Państwa udział w kursie to
      <b> cena kursu zsumowana z rat</b> zł.<br></br>
      Do tej pory opłacili Państwo <b>zsumowana ilosc wplat</b> zł. W ciągu 7
      dni roboczych zwrócimy Państwu kwotę <b></b> zł. Uregulowali Państwo
      wszystkie swoje zobowiązania. Prosimy o uregulowanie kwoty <b> </b>zł.
      <br></br>
      <br></br>W osobnej wiadomości przesyłamy link do płatności<br></br>
      <br></br>
      <br></br>
      Czy moglibyśmy również poznać powód Państwa rezygnacji?
    </>
  );
};

export default ResignationTemplate;
