import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { Col, Row } from "react-grid-system";
import styled from "styled-components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const DatePickerStyle = styled.div`
  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__quarter-text--selected,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__quarter-text--in-range,
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--in-selecting-range,
  .react-datepicker__year-text--in-range {
    border-radius: 22px;
    background: ${(props) => props.theme.colors.primary} !important;
    color: #fff;
  }
  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__day {
    width: 2.7rem;
    height: 2.7rem;
    line-height: 2.7rem;
  }
  .react-datepicker__day {
    /* color: #666666; */
  }
  .react-datepicker__day {
    color: red;
  }
  .react-datepicker__day--selected {
    color: #fff;
  }

  .react-datepicker__header {
    background: #fff;
    border-bottom: none;
  }
`;
const DatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  function generateArrayOfYears() {
    var max = new Date().getFullYear();
    var min = max - 9;
    var years = [];

    for (var i = max; i >= min; i--) {
      years.push(i);
    }
    return years;
  }
  const years = generateArrayOfYears();
  return (
    <DatePickerStyle>
      <ReactDatePicker
        onChange={onChange}
        inline
        locale="id"
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <Col>
            <Row justify="center" align="center">
              <Col md={7.5}>
                <Row>
                  <Col>month</Col>
                  <Col>
                    <select
                      value={date.getFullYear()}
                      onChange={({ target: { value } }) => changeYear(value)}
                    >
                      {years.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </Col>
                </Row>
              </Col>
              <Col md={4.5}>
                <Row>
                  <Col>
                    <FiChevronLeft color="#333333" />
                  </Col>
                  <Col>
                    <FiChevronRight color="#333333" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        )}
      />
    </DatePickerStyle>
  );
};

export default DatePicker;
