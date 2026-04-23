/**
 * State Election Data
 * Contains comprehensive election information for all Indian states
 * Last Updated: April 2026
 */

// Ensure we don't have duplicate declarations
if (typeof window.stateElectionData === 'undefined') {
    window.stateElectionData = {
    "Andhra Pradesh": {
        dates: "13 May 2024",
        seats: "175",
        ls: "25",
        status: "Recent Election",
        type: "State"
    },
    "Bihar": {
        dates: "20 October - 07 November 2025",
        seats: "243",
        ls: "40",
        status: "Upcoming",
        type: "State"
    },
    "Delhi": {
        dates: "08 February 2025",
        seats: "70",
        ls: "7",
        status: "Upcoming 2025",
        type: "UT"
    },
    "Gujarat": {
        dates: "01 & 05 December 2027",
        seats: "182",
        ls: "26",
        status: "Completed (2022)",
        type: "State"
    },
    "Karnataka": {
        dates: "10 May 2023",
        seats: "224",
        ls: "28",
        status: "Completed (2023)",
        type: "State"
    },
    "Kerala": {
        dates: "06 April 2026",
        seats: "140",
        ls: "20",
        status: "Upcoming 2026",
        type: "State"
    },
    "Madhya Pradesh": {
        dates: "17 November 2028",
        seats: "230",
        ls: "29",
        status: "Completed (2023)",
        type: "State"
    },
    "Maharashtra": {
        dates: "20 November 2024",
        seats: "288",
        ls: "48",
        status: "Current/Upcoming",
        type: "State"
    },
    "Tamil Nadu": {
        dates: "14 April 2026",
        seats: "234",
        ls: "39",
        status: "Upcoming 2026",
        type: "State"
    },
    "Uttar Pradesh": {
        dates: "10 Feb - 07 Mar 2027",
        seats: "403",
        ls: "80",
        status: "Completed (2022)",
        type: "State"
    },
    "West Bengal": {
        dates: "01 - 29 April 2021",
        seats: "294",
        ls: "42",
        status: "Upcoming",
        type: "State"
    },
    "Andaman and Nicobar Islands": {
        dates: "19 April 2024 (LS)",
        seats: "0",
        ls: "1",
        status: "Recent Election",
        type: "UT"
    },
    "Arunachal Pradesh": {
        dates: "19 April 2024",
        seats: "60",
        ls: "2",
        status: "Recent Election",
        type: "State"
    },
    "Assam": {
        dates: "March-April 2026",
        seats: "126",
        ls: "14",
        status: "Upcoming 2026",
        type: "State"
    },
    "Chandigarh": {
        dates: "01 June 2024 (LS)",
        seats: "0",
        ls: "1",
        status: "Recent Election",
        type: "UT"
    },
    "Chhattisgarh": {
        dates: "Nov 2028",
        seats: "90",
        ls: "11",
        status: "Completed (2023)",
        type: "State"
    },
    "Dadra and Nagar Haveli and Daman and Diu": {
        dates: "07 May 2024 (LS)",
        seats: "0",
        ls: "1",
        status: "Recent Election",
        type: "UT"
    },
    "Goa": {
        dates: "Feb 2027",
        seats: "40",
        ls: "2",
        status: "Completed (2022)",
        type: "State"
    },
    "Haryana": {
        dates: "Oct 2024",
        seats: "90",
        ls: "10",
        status: "Current/Upcoming",
        type: "State"
    },
    "Himachal Pradesh": {
        dates: "Nov 2027",
        seats: "68",
        ls: "4",
        status: "Completed (2022)",
        type: "State"
    },
    "Jammu and Kashmir": {
        dates: "Sept-Oct 2024",
        seats: "90",
        ls: "5",
        status: "Current/Upcoming",
        type: "UT"
    },
    "Jharkhand": {
        dates: "Nov-Dec 2024",
        seats: "81",
        ls: "14",
        status: "Current/Upcoming",
        type: "State"
    },
    "Ladakh": {
        dates: "20 May 2024 (LS)",
        seats: "0",
        ls: "1",
        status: "Recent Election",
        type: "UT"
    },
    "Lakshadweep": {
        dates: "19 April 2024 (LS)",
        seats: "0",
        ls: "1",
        status: "Recent Election",
        type: "UT"
    },
    "Manipur": {
        dates: "28 Feb-March 2027",
        seats: "60",
        ls: "2",
        status: "Completed (2022)",
        type: "State"
    },
    "Meghalaya": {
        dates: "Feb 2028",
        seats: "60",
        ls: "2",
        status: "Completed (2023)",
        type: "State"
    },
    "Mizoram": {
        dates: "Nov 2028",
        seats: "40",
        ls: "1",
        status: "Completed (2023)",
        type: "State"
    },
    "Nagaland": {
        dates: "Feb 2028",
        seats: "60",
        ls: "1",
        status: "Completed (2023)",
        type: "State"
    },
    "Odisha": {
        dates: "12 & 29 May 2024",
        seats: "147",
        ls: "21",
        status: "Recent Election",
        type: "State"
    },
    "Puducherry": {
        dates: "May 2024",
        seats: "30",
        ls: "1",
        status: "Recent Election",
        type: "UT"
    },
    "Punjab": {
        dates: "8 February 2027",
        seats: "117",
        ls: "13",
        status: "Completed (2022)",
        type: "State"
    },
    "Rajasthan": {
        dates: "25 Nov & 1 Dec 2023",
        seats: "200",
        ls: "25",
        status: "Completed (2023)",
        type: "State"
    },
    "Sikkim": {
        dates: "April 2024",
        seats: "32",
        ls: "1",
        status: "Recent Election",
        type: "State"
    },
    "Telangana": {
        dates: "13 Nov 2023",
        seats: "119",
        ls: "17",
        status: "Completed (2023)",
        type: "State"
    },
    "Tripura": {
        dates: "2 March 2023",
        seats: "60",
        ls: "2",
        status: "Completed (2023)",
        type: "State"
    }
    };
}

// Make it accessible globally
const stateElectionData = window.stateElectionData;

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = stateElectionData;
}
