import CityData from '@/app/db/models/CityData';
import { NextResponse } from 'next/server';


// Forecast for the next hour
export async function GET() {
  try {
    // Fetch city data from the CityData collection
    const cities = await CityData.find({});
    // const hourlyDemand = cities[0].hourlyDemand;
    const tariffRates = cities[0].tariffRates;
    const currentRate = (tariffRates.current * (6 - 3) + 3).toFixed(2); 
    const nextHourForecast = ((tariffRates.forecast[0].rate + Math.random()) * (6 - 3) + 3).toFixed(2); // Random forecast rate for the next hour

    // Return the fetched data as JSON
    return NextResponse.json({currentRate, nextHourForecast});
  } catch (error) {
    console.error('Error fetching city data:', error);
    return NextResponse.json({ error: 'Failed to fetch city data' }, { status: 500 });

  }
}

