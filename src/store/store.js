export const store = {
    user: {
        name: "Aayush",
        email: "aayush@gmail.com",
        department: "Development",
        role: "Front End Developer",
        phone: "+977 9000000000"

    },

    //attendance array from AttendaceView
    attendance: [
        {
            date: "May 20, 2026",
            CheckIn: "09:05:15",
            CheckOut: "06:08:50",
            Status: "Late In - Late Out",
        },
        {
            date: "May 21, 2026",
            CheckIn: "08:58:15",
            CheckOut: "06:08:50",
            Status: "Early In - Late Out",
        },
        {
            date: "May 22, 2026",
            CheckIn: "09:05:15",
            CheckOut: "06:08:50",
            Status: "Late In - Late Out",
        },
        {
            date: "May 23, 2026",
            CheckIn: "09:05:15",
            CheckOut: "05:59:50",
            Status: "Early In - Early Out",
        },
        {
            date: "May 24, 2026",
            CheckIn: "09:05:15",
            CheckOut: "06:08:50",
            Status: "Late In - Late Out",
        },
    ],

    //leaves from LeaveView
    leave: [
        {
            id: 1,
            type: "Annual Leave",
            from: "2024-01-10",
            to: "2024-01-15",
            reason: "Family vacation",
            status: "approved",
        },
        {
            id: 2,
            type: "Sick Leave",
            from: "2024-02-05",
            to: "2024-02-06",
            reason: "Fever and cold",
            status: "rejected",
        },
        {
            id: 3,
            type: "Emergency Leave",
            from: "2024-03-01",
            to: "2024-03-02",
            reason: "Family emergency",
            status: "pending",
        },
        {
            id: 4,
            type: "Annual Leave",
            from: "2024-04-10",
            to: "2024-04-12",
            reason: "Personal work",
            status: "approved",
        },
    ],

    //all leaves from LeaveManagementview
    allLeaves: [
        {
            id: 1,
            type: "Annual",
            from: "2026-06-10",
            to: "2026-06-14",
            reason: "Family vacation",
            status: "pending",
        },
        {
            id: 2,
            type: "Sick",
            from: "2026-06-08",
            to: "2026-06-08",
            reason: "Fever",
            status: "approved",
        },
        {
            id: 3,
            type: "Maternity",
            from: "2026-07-01",
            to: "2026-08-01",
            reason: "Maternity leave",
            status: "pending",
        },
        {
            id: 4,
            type: "Annual",
            from: "2026-05-15",
            to: "2026-05-17",
            reason: "Out of town",
            status: "rejected",
        },
        {
            id: 5,
            type: "Unpaid",
            from: "2026-06-20",
            to: "2026-06-22",
            reason: "Personal work",
            status: "pending",
        },
    ],

    //logs from WorkLogView
    logs: [
        {
            id: 1,
            date: "2026-05-20",
            description: "Created employee dashboard UI",
            units: 2,
            hours: 5,
        },
        {
            id: 2,
            date: "2026-05-21",
            description: "Integrated attendance API",
            units: 1,
            hours: 4,
        },
        {
            id: 3,
            date: "2026-05-22",
            description: "Fixed login validation bugs",
            units: 3,
            hours: 6,
        },
        {
            id: 4,
            date: "2026-05-23",
            description: "Worked on leave management module",
            units: 2,
            hours: 7,
        },
    ],

    //logs from admin WorkLogManagementView
    adminLogs: [
        {
            id: 101,
            employeeName: "Aayush",
            date: "2026-06-01",
            task: "Fix navigation bug",
            hours: 4,
        },
        {
            id: 102,
            employeeName: "Rohan",
            date: "2026-06-01",
            task: "Update API documentation",
            hours: 6,
        },
        {
            id: 103,
            employeeName: "Sita",
            date: "2026-06-02",
            task: "Database migration",
            hours: 8,
        },
        {
            id: 104,
            employeeName: "Niranjan",
            date: "2026-06-02",
            task: "Implement new UI component",
            hours: 5,
        },
        {
            id: 105,
            employeeName: "Anjali",
            date: "2026-06-03",
            task: "Weekly code review",
            hours: 3,
        },
    ],

    //employees from EmployeeListView
    employees: [
        {
            id: 101,
            name: "Aayush",
            email: "aayush@gmail.com",
            department: "Development",
            role: "Front End Developer",
            salary: 30000,
            phone: "+977 9000000000",
        },
        {
            id: 102,
            name: "Rohan",
            email: "rohan@gmail.com",
            department: "Development",
            role: "Back End Developer",
            salary: 35000,
            phone: "+977 9111111111",
        },
        {
            id: 103,
            name: "Sita",
            email: "sita@gmail.com",
            department: "Design",
            role: "UI/UX Designer",
            salary: 28000,
            phone: "+977 9222222222",
        },
        {
            id: 104,
            name: "Niranjan",
            email: "niranjan@gmail.com",
            department: "Quality Assurance",
            role: "QA Engineer",
            salary: 25000,
            phone: "+977 9333333333",
        },
        {
            id: 105,
            name: "Anjali",
            email: "anjali@gmail.com",
            department: "Management",
            role: "Project Manager",
            salary: 45000,
            phone: "+977 9444444444",
        },
    ],

    //paycheck from MonthlySummaryView
    paycheckSummary: {
        baseSalary: 3500,
        earnedBaseSalary: 3500,
        unitsBonus: 120,
        grossPay: 3620,
        taxDeduction: 150,
        netPay: 3470,
    }
}


