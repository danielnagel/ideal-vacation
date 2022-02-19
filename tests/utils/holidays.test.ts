import { getHolidays } from "../../src/utils/holidays";

describe("Test utils/holidays", () => {
  describe("Test function getHolidays", () => {
    test("Get public holidays for US, Lousiana, New Orleans, year 2016", () => {
      expect(
        getHolidays(2016, "US", "la", "no", { types: ["public"] })
      ).toStrictEqual([
        {
          date: "2016-01-01 00:00:00",
          start: new Date(2016, 0, 1, 7, 0, 0),
          end: new Date(2016, 0, 2, 7, 0, 0),
          name: "New Year's Day",
          rule: "01-01 and if sunday then next monday if saturday then previous friday",
          type: "public",
        },
        {
          date: "2016-01-18 00:00:00",
          end: new Date(2016, 0, 19, 7, 0, 0),
          name: "Martin Luther King Jr. Day",
          rule: "3rd monday in January",
          start: new Date(2016, 0, 18, 7, 0, 0),
          type: "public",
        },
        {
          date: "2016-02-09 00:00:00",
          end: new Date(2016, 1, 10, 7, 0, 0),
          name: "Mardi Gras",
          rule: "easter -47",
          start: new Date(2016, 1, 9, 7, 0, 0),
          type: "public",
        },
        {
          date: "2016-02-15 00:00:00",
          end: new Date(2016, 1, 16, 7, 0, 0),
          name: "Washington's Birthday",
          rule: "3rd monday in February",
          start: new Date(2016, 1, 15, 7, 0, 0),
          type: "public",
        },
        {
          date: "2016-03-25 00:00:00",
          end: new Date(2016, 2, 26, 6, 0, 0),
          name: "Good Friday",
          rule: "easter -2",
          start: new Date(2016, 2, 25, 6, 0, 0),
          type: "public",
        },
        {
          date: "2016-05-30 00:00:00",
          end: new Date(2016, 4, 31, 7, 0, 0),
          name: "Memorial Day",
          rule: "monday before 06-01",
          start: new Date(2016, 4, 30, 7, 0, 0),
          type: "public",
        },
        {
          date: "2016-07-04 00:00:00",
          end: new Date(2016, 6, 5, 7, 0, 0),
          name: "Independence Day",
          rule: "07-04 and if sunday then next monday if saturday then previous friday",
          start: new Date(2016, 6, 4, 7, 0, 0),
          type: "public",
        },
        {
          date: "2016-09-05 00:00:00",
          end: new Date(2016, 8, 6, 7, 0, 0),
          name: "Labor Day",
          rule: "1st monday in September",
          start: new Date(2016, 8, 5, 7, 0, 0),
          type: "public",
        },
        {
          date: "2016-10-10 00:00:00",
          end: new Date(2016, 9, 11, 7, 0, 0),
          name: "Columbus Day",
          rule: "2nd monday in October",
          start: new Date(2016, 9, 10, 7, 0, 0),
          type: "public",
        },
        {
          date: "2016-11-08 00:00:00",
          end: new Date(2016, 10, 9, 7, 0, 0),
          name: "Election Day",
          rule: "tuesday after 1st monday in November in even years",
          start: new Date(2016, 10, 8, 7, 0, 0),
          type: "public",
        },
        {
          date: "2016-11-11 00:00:00",
          end: new Date(2016, 10, 12, 7, 0, 0),
          name: "Veterans Day",
          rule: "11-11",
          start: new Date(2016, 10, 11, 7, 0, 0),
          type: "public",
        },
        {
          date: "2016-11-24 00:00:00",
          start: new Date(2016, 10, 24, 7, 0, 0),
          end: new Date(2016, 10, 25, 7, 0, 0),
          name: "Thanksgiving Day",
          rule: "4th thursday in November",
          type: "public",
        },
        {
          date: "2016-12-25 00:00:00",
          end: new Date(2016, 11, 26, 7, 0, 0),
          name: "Christmas Day",
          rule: "12-25 and if sunday then next monday if saturday then previous friday",
          start: new Date(2016, 11, 25, 7, 0, 0),
          type: "public",
        },
        {
          date: "2016-12-26 00:00:00",
          start: new Date(2016, 11, 26, 7, 0, 0),
          end: new Date(2016, 11, 27, 7, 0, 0),
          substitute: true,
          name: "Christmas Day (substitute day)",
          rule: "12-25 and if sunday then next monday if saturday then previous friday",
          type: "public",
        },
      ]);
    });
    test("Get public holidays for DE, Nordrhein Westfalen, year 2020", () => {
        expect(
          getHolidays(2020, "DE", "NW", "", { types: ["public"] })
        ).toStrictEqual([
          {
            date: "2020-01-01 00:00:00",
            start: new Date(2020, 0, 1, 0, 0, 0),
            end: new Date(2020, 0, 2, 0, 0, 0),
            name: "Neujahr",
            rule: "01-01",
            type: "public",
          },
          {
            date: "2020-04-10 00:00:00",
            end: new Date(2020, 3, 11, 0, 0, 0),
            name: "Karfreitag",
            rule: "easter -2",
            start: new Date(2020, 3, 10, 0, 0, 0),
            type: "public",
          },
          {
            date: "2020-04-13 00:00:00",
            end: new Date(2020, 3, 14, 0, 0, 0),
            name: "Ostermontag",
            rule: "easter 1",
            start: new Date(2020, 3, 13, 0, 0, 0),
            type: "public",
          },
          {
            date: "2020-05-01 00:00:00",
            end: new Date(2020, 4, 2, 0, 0, 0),
            name: "Maifeiertag",
            rule: "05-01",
            start: new Date(2020, 4, 1, 0, 0, 0),
            type: "public",
          },
          {
            date: "2020-05-21 00:00:00",
            end: new Date(2020, 4, 22, 0, 0, 0),
            name: "Christi Himmelfahrt",
            rule: "easter 39",
            start: new Date(2020, 4, 21, 0, 0, 0),
            type: "public",
          },
          {
            date: "2020-06-01 00:00:00",
            end: new Date(2020, 5, 2, 0, 0, 0),
            name: "Pfingstmontag",
            rule: "easter 50",
            start: new Date(2020, 5, 1, 0, 0, 0),
            type: "public",
          },
          {
            date: "2020-06-11 00:00:00",
            end: new Date(2020, 5, 12, 0, 0, 0),
            name: "Fronleichnam",
            rule: "easter 60",
            start: new Date(2020, 5, 11, 0, 0, 0),
            type: "public",
          },
          {
            date: "2020-10-03 00:00:00",
            end: new Date(2020, 9, 4, 0, 0, 0),
            name: "Tag der Deutschen Einheit",
            rule: "10-03",
            start: new Date(2020, 9, 3, 0, 0, 0),
            type: "public",
          },
          {
            date: "2020-11-01 00:00:00",
            start: new Date(2020, 10, 1, 0, 0, 0),
            end: new Date(2020, 10, 2, 0, 0, 0),
            name: "Allerheiligen",
            rule: "11-01",
            type: "public",
          },
          {
            date: "2020-12-25 00:00:00",
            end: new Date(2020, 11, 26, 0, 0, 0),
            name: "1. Weihnachtstag",
            rule: "12-25",
            start: new Date(2020, 11, 25, 0, 0, 0),
            type: "public",
          },
          {
            date: "2020-12-26 00:00:00",
            start: new Date(2020, 11, 26, 0, 0, 0),
            end: new Date(2020, 11, 27, 0, 0, 0),
            name: "2. Weihnachtstag",
            rule: "12-26",
            type: "public",
          },
        ]);
      });
  });
});
