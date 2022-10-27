import React from "react";
import { format, addDays } from "date-fns";

const ResignationTemplate = (props) => {
  const startResignationDay = Date.parse(
    props.resignationDetails.resignationDate
  );
  const finalResignationDay = addDays(startResignationDay, 30);

  const formatLessonDate = (lesson) => {
    const splitDates = lesson.split(".");
    const dateObject = new Date(splitDates[2], splitDates[1] - 1, splitDates[0]);
    return dateObject;
  };

  const dateObjectArray =
    props.resignationDetails.lessonDatesArray.map(formatLessonDate);

  const lessonsToBePaid = dateObjectArray.filter(
    (lesson) => lesson <= finalResignationDay
  );

  const installmentsAmount = Math.round(
    props.resignationDetails.paymentDetails.installments.reduce(
      (a, b) => a + b,
      0
    )
  );

  const paymentsAmount = Math.round(
    props.resignationDetails.paymentDetails.payments.reduce((a, b) => a + b, 0)
  );

  const amountPerLesson = Math.round(
    installmentsAmount / dateObjectArray.length
  );

  const totalAmountToPayOrRefund =
    lessonsToBePaid.length * amountPerLesson - paymentsAmount;

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
      <b> {format(startResignationDay, "dd.MM.yyyy")}</b> do
      <b> {format(finalResignationDay, "dd.MM.yyyy")}</b>.<br></br>
      <br></br>
      Płatność, którą należy uiścić to suma zajęć odbytych do końca okresu
      wypowiedzenia; w tym wypadku są to zajęcia:
      <br></br>
      <br></br>
      {lessonsToBePaid.map((lesson) => (
        <>
          <p>{format(lesson, "dd.MM.yyyy")}</p>
        </>
      ))}
      <br></br>
      Cena za jedno spotkanie 2 x 45 minut to{" "}
      <b>
        {dateObjectArray.length > 0 &&
        props.resignationDetails.paymentDetails.installments.length > 0
          ? amountPerLesson
          : 0}
      </b>
      zł.<br></br>
      Zatem całkowita suma za Państwa udział w kursie to
      <b> {lessonsToBePaid.length * amountPerLesson}</b> zł.<br></br>
      Do tej pory opłacili Państwo{" "}
      <b>
        {props.resignationDetails.paymentDetails.payments.length > 0
          ? paymentsAmount
          : 0}
      </b>{" "}
      zł.
      {totalAmountToPayOrRefund < 0 && (
        <p>
          W ciągu 7 dni roboczych zwrócimy Państwu kwotę{" "}
          <b>{Math.abs(totalAmountToPayOrRefund)}</b> zł.
        </p>
      )}
      {totalAmountToPayOrRefund === 0 && (
        <p>Uregulowali Państwo wszystkie swoje zobowiązania.</p>
      )}
      {totalAmountToPayOrRefund > 0 && (
        <p>
          Prosimy o uregulowanie kwoty <b>{totalAmountToPayOrRefund}</b> zł.
          <br></br>
          <br></br>W osobnej wiadomości przesyłamy link do płatności<br></br>
        </p>
      )}
      <br></br>
      <br></br>
      Czy moglibyśmy również poznać powód Państwa rezygnacji?
    </>
  );
};

export default ResignationTemplate;
