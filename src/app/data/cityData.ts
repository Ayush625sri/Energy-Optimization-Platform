const cityData = [
  {
    city: "Varanasi",
    temperature: {
      current: {
        value: 30,
        unit: "°C",
      },
      forecast: [
        {
          date: "2024-10-09",
          high: 31,
          low: 24,
        },
        {
          date: "2024-10-10",
          high: 29,
          low: 23,
        },
      ],
    },
    weather: {
      description: "Clear skies",
      humidity: 50,
      wind: {
        speed: 10,
        direction: "N",
      },
    },
    tariffRates: {
      current: 0.2,
      forecast: [
        {
          hour: "10:00",
          rate: 0.2,
        },
        {
          hour: "11:00",
          rate: 0.25,
        },
      ],
    },
    peakHours: {
      timing: [
        {
          start: "17:00",
          end: "20:00",
        },
      ],
    },
    notifications: [
      {
        id: 1,
        type: "Weather Alert",
        message:
          "A heatwave is expected this week. Stay hydrated and reduce energy usage during peak hours.",
        timestamp: "2024-10-08T07:00:00Z",
        severity: "high",
      },
      {
        id: 2,
        type: "Tariff Rate Change",
        message:
          "The electricity tariff will increase by 0.25 cents starting next week.",
        timestamp: "2024-10-08T09:00:00Z",
        severity: "medium",
      },
      {
        id: 3,
        type: "Peak Hours Notification",
        message:
          "Peak hours from 5 PM to 8 PM are predicted to be busier than usual today. Plan your usage accordingly.",
        timestamp: "2024-10-08T08:30:00Z",
        severity: "high",
      },
      {
        id: 4,
        type: "Electricity Demand Update",
        message:
          "Electricity demand is expected to peak in the next hour. Consider reducing usage.",
        timestamp: "2024-10-08T11:00:00Z",
        severity: "high",
      },
      {
        id: 5,
        type: "Forecast Alert",
        message:
          "The forecasted electricity rate for the next hour is $4.00. Prepare to adjust usage.",
        timestamp: "2024-10-08T10:45:00Z",
        severity: "medium",
      },
    ],
    hourlyDemand: [
      {
        date: "2024-09-30",
        hourlyData: [
          { hour: "00:00", demand: 15.2 },
          { hour: "01:00", demand: 14.8 },
          { hour: "02:00", demand: 14.5 },
          { hour: "03:00", demand: 14.1 },
          { hour: "04:00", demand: 13.8 },
          { hour: "05:00", demand: 13.5 },
          { hour: "06:00", demand: 14.0 },
          { hour: "07:00", demand: 16.5 },
          { hour: "08:00", demand: 18.0 },
          { hour: "09:00", demand: 20.5 },
          { hour: "10:00", demand: 21.0 },
          { hour: "11:00", demand: 22.5 },
          { hour: "12:00", demand: 23.0 },
          { hour: "13:00", demand: 24.0 },
          { hour: "14:00", demand: 25.0 },
          { hour: "15:00", demand: 24.5 },
          { hour: "16:00", demand: 23.0 },
          { hour: "17:00", demand: 22.0 },
          { hour: "18:00", demand: 23.5 },
          { hour: "19:00", demand: 24.0 },
          { hour: "20:00", demand: 25.5 },
          { hour: "21:00", demand: 24.0 },
          { hour: "22:00", demand: 23.0 },
          { hour: "23:00", demand: 20.5 },
        ],
      },
      {
        date: "2024-10-01",
        hourlyData: [
          { hour: "00:00", demand: 14.8 },
          { hour: "01:00", demand: 14.5 },
          { hour: "02:00", demand: 14.0 },
          { hour: "03:00", demand: 13.5 },
          { hour: "04:00", demand: 13.2 },
          { hour: "05:00", demand: 13.0 },
          { hour: "06:00", demand: 14.0 },
          { hour: "07:00", demand: 16.0 },
          { hour: "08:00", demand: 17.5 },
          { hour: "09:00", demand: 19.0 },
          { hour: "10:00", demand: 21.0 },
          { hour: "11:00", demand: 22.0 },
          { hour: "12:00", demand: 22.5 },
          { hour: "13:00", demand: 23.5 },
          { hour: "14:00", demand: 24.0 },
          { hour: "15:00", demand: 23.5 },
          { hour: "16:00", demand: 22.0 },
          { hour: "17:00", demand: 21.0 },
          { hour: "18:00", demand: 23.0 },
          { hour: "19:00", demand: 24.0 },
          { hour: "20:00", demand: 25.0 },
          { hour: "21:00", demand: 23.5 },
          { hour: "22:00", demand: 21.0 },
          { hour: "23:00", demand: 19.0 },
        ],
      },
      // Continue for the remaining 28 days
      {
        date: "2024-10-08",
        hourlyData: [
          { hour: "00:00", demand: 16.5 },
          { hour: "01:00", demand: 15.8 },
          { hour: "02:00", demand: 15.0 },
          { hour: "03:00", demand: 14.5 },
          { hour: "04:00", demand: 14.0 },
          { hour: "05:00", demand: 13.5 },
          { hour: "06:00", demand: 14.5 },
          { hour: "07:00", demand: 16.0 },
          { hour: "08:00", demand: 17.5 },
          { hour: "09:00", demand: 19.0 },
          { hour: "10:00", demand: 20.0 },
          { hour: "11:00", demand: 22.0 },
          { hour: "12:00", demand: 23.0 },
          { hour: "13:00", demand: 24.5 },
          { hour: "14:00", demand: 25.0 },
          { hour: "15:00", demand: 24.0 },
          { hour: "16:00", demand: 23.0 },
          { hour: "17:00", demand: 22.0 },
          { hour: "18:00", demand: 23.5 },
          { hour: "19:00", demand: 24.0 },
          { hour: "20:00", demand: 25.5 },
          { hour: "21:00", demand: 24.0 },
          { hour: "22:00", demand: 23.0 },
          { hour: "23:00", demand: 20.0 },
        ],
      },
    ],
  },
];
