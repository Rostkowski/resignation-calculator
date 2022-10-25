import React, { useEffect, useState } from "react";
import Input from "../../UI/Input/Input";
import Button from "react-bootstrap/Button";
import Textarea from "../../UI/Textarea/Textarea";

const CustomerDataForm = (props) => {
  const [resignationDate, setResignationDate] = useState("");
  const [registrationAPILink, setRegistrationAPILink] = useState(null);
  const [timetableAPILink, setTimetableAPILink] = useState(null);
  const [registrationDataObject, setRegistrationDataObject] = useState("");
  const [timetableDataObject, setTimetableDataObject] = useState("");
  const [paymentDetails, setPaymentDetails] = useState({
    installments: [],
    payments: [],
    timetableId: 0,
  });
  const [lessonDatesArray, setLessonDatesArray] = useState([]);

  const registrationIdChangeHandler = (event) => {
    setRegistrationAPILink(
      `https://giganciprogramowaniaformularz.edu.pl/api/RegistrationStatus/GetStudentDetails/${event.target.value}`
    );
    setPaymentDetails({
      installments: [],
      payments: [],
    });
    setLessonDatesArray([]);
    setRegistrationDataObject("");
    setTimetableDataObject("");
  };

  const registrationDataObjectHandler = (event) => {
    setRegistrationDataObject(event.target.value);
    try {
      const { installments, payments, selectedTimetableId } = JSON.parse(
        event.target.value
      );
      setPaymentDetails({
        installments: installments,
        payments: payments,
        timetableId: selectedTimetableId,
      });
      setTimetableAPILink(
        `https://giganciprogramowaniaformularz.edu.pl/api/RegistrationStatus/Groups/${selectedTimetableId}`
      );
    } catch {
      console.log("Niepoprawnie skopiowana treść strony.");
    }
  };

  const timeteableDataObjectHandler = (event) => {
    setTimetableDataObject(event.target.value);
    try {
      const lessonDates = JSON.parse(event.target.value).timetables[0]
        .timetablesInLoc[0].lessonsDates;
      setLessonDatesArray(lessonDates);
    } catch (error) {
      console.log("Niepoprawnie skopiowana treść strony." + error);
    }
  };
 
  const resignationDateChangeHandler = (event) => {
    setResignationDate(event.target.value);
    console.log(event.target.value)
  };

  return (
    <>
      <form>
        <div className="px-2">
          <Input
            id="resignationDate"
            type="date"
            labelText="Data rezygnacji:"
            onChange={resignationDateChangeHandler}
          />
          <Input
            id="registrationID"
            type="number"
            labelText="ID kartoteki ucznia:"
            onChange={registrationIdChangeHandler}
          />
          {registrationAPILink && (
            <>
              <Textarea
                id="registrationApiLink"
                labelText="Skopiuj poniższy link do nowej karty i skopiuj (ctrl+a i ctrl+c) zawartość którą zwróci"
                value={registrationAPILink}
                readOnly={true}
              ></Textarea>
              <Textarea
                id="registrationObject"
                labelText="Wklej zawartość strony tutaj"
                onChange={registrationDataObjectHandler}
                value={registrationDataObject}
              ></Textarea>
            </>
          )}
          {paymentDetails.installments?.length > 0 && (
            <>
              <Textarea
                id="registrationApiLink"
                labelText="Teraz musimy pobrać informacje o grupie. Ponownie wklej poniższy link do nowej karty i skopiuj zawartość strony."
                value={timetableAPILink}
                readOnly={true}
              ></Textarea>
              <Textarea
                id="registrationObject"
                labelText="Wklej skopiowaną zawartość strony tutaj i naciśnij przycisk dalej aby otrzymać rozliczoną rezygnację."
                onChange={timeteableDataObjectHandler}
              ></Textarea>
              <Button>Dalej</Button>
            </>
          )}
        </div>
      </form>
    </>
  );
};

export default CustomerDataForm;
